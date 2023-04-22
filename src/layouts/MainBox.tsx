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
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
    });

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                token={{
                    header: {
                        colorBgHeader: '#292f33',
                        colorHeaderTitle: '#fff',
                        colorTextMenu: '#dfdfdf',
                        colorTextMenuSecondary: '#dfdfdf',
                        colorTextMenuSelected: '#fff',
                        colorBgMenuItemSelected: '#22272b',
                        colorTextMenuActive: 'rgba(255,255,255,0.85)',
                        colorTextRightActionsItem: '#dfdfdf',
                    },
                    colorTextAppListIconHover: '#fff',
                    colorTextAppListIcon: '#dfdfdf',
                    sider: {
                        colorMenuBackground: '#fff',
                        colorMenuItemDivider: '#dfdfdf',
                        colorBgMenuItemHover: '#f6f6f6',
                        colorTextMenu: '#595959',
                        colorTextMenuSelected: '#242424',
                        colorTextMenuActive: '#242424',
                        colorBgMenuItemCollapsedHover: '#242424',
                    },
                }}
                bgLayoutImgList={[
                    {
                        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                        left: 85,
                        bottom: 100,
                        height: '303px',
                    },
                    {
                        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                        bottom: -68,
                        right: -45,
                        height: '303px',
                    },
                    {
                        src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                        bottom: 0,
                        left: 0,
                        width: '331px',
                    },
                ]}
                {...defaultProps}
                location={{
                    pathname,
                }}
                menu={{
                    type: 'group',
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
                actionsRender={(props) => {
                    if (props.isMobile) return [];
                    return [
                        <InfoCircleFilled key="InfoCircleFilled" />,
                        <QuestionCircleFilled key="QuestionCircleFilled" />,
                        <GithubFilled key="GithubFilled" />,
                    ];
                }}
                onMenuHeaderClick={(e) => console.log(e)}
                menuItemRender={(item, dom) => (
                    <a
                        onClick={() => {
                            setPathname(item.path || '/welcome');
                        }}
                    >
                        {dom}
                    </a>
                )}
                {...settings}
            >
                {
                    routesContent
                }
            </ProLayout>
            <SettingDrawer
                pathname={pathname}
                enableDarkTheme
                getContainer={() => document.getElementById('test-pro-layout')}
                settings={settings}
                onSettingChange={(changeSetting) => {
                    setSetting(changeSetting);
                }}
                disableUrlParams={false}
            />
        </div>
    );
};
