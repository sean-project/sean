
import MainBox from '../layouts/MainBox.tsx';
import StarList from "../pages/StarSearch";
import StarDetail from "../pages/StarDetail";
const router = [
    {
        path: '/MainBox',
        children:[{
            path: 'StarList',
            element: <StarList />,
        },{
            path: 'StarDetail',
            element: <StarDetail />,
        }]
    }
];

export default router;
