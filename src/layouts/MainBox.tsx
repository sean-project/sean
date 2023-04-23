import {
    GithubFilled,
    InfoCircleFilled,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { ProLayout, SettingDrawer } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';
import {useRoutes} from "react-router-dom";
import routerConfig from '../routers';
// import StarSearch from "../pages/StarSearch";

export default () => {
    const routesContent = useRoutes(routerConfig);

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                {...defaultProps}
                location={{
                    pathname,
                }}
                title={'Sean'}
                avatarProps={{
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                    size: 'small',
                    title: (
                        <div
                            style={{
                                color: '#dfdfdf',
                            }}
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
