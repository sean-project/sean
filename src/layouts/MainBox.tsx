import { ProLayout } from '@ant-design/pro-components';
import {useEffect, useState} from 'react';
import defaultProps from './_defaultProps';
import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import routerConfig from '../routers';

export default () => {
    const routesContent = useRoutes(routerConfig);
    const nav = useNavigate()
    const loc = useLocation()
    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
    useEffect(()=>{
        setPathname(loc.pathname || '/welcome');
        if (loc.pathname === '/star'){
            nav('/star/search')
        }
    },[loc.pathname])
    return (
        <div
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                {...defaultProps}
                location={{
                    pathname,
                }}
                menuItemRender={(item, dom) => (
                    <div
                        onClick={() => {
                            nav(item.path || '/welcome')
                        }}
                    >
                        {dom}
                    </div>
                )}
                title={'Sean'}
                avatarProps={{
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                    size: 'small',
                    title: (
                        <div
                        >
                            张温柔
                        </div>
                    ),
                }}
                onMenuHeaderClick={(e) => console.log(e)}
                {...{
                    fixSiderbar: true,
                    layout: 'mix',
                    splitMenus: true,
                }}
            >
                {
                    routesContent
                }
            </ProLayout>
        </div>
    );
};
