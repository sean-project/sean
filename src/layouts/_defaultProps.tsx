import { CrownFilled, SearchOutlined, SmileFilled, TabletFilled} from '@ant-design/icons';

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/welcome',
                name: '欢迎',
                icon: <SmileFilled />,
                component: './Welcome',
            },
            {
                name: '艺人',
                icon: <TabletFilled />,
                path: '/star',
                routes: [
                    {
                        path: '/star/search',
                        name: '搜索',
                        icon:<SearchOutlined />
                    },
                    {
                        path: '/star/volume',
                        name: '声量',
                        icon: <CrownFilled />
                    },
                ],
            },
        ],
    },
    location: {
        pathname: '/',
    }
};
