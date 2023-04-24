import StarList from "../pages/StarSearch";
import StarDetail from "../pages/StarDetail";
import StarVolume from "../pages/StarVolume";
const router = [
    {
        path: '/',
        children:[{
            path: 'star/search',
            element: <StarList />,
        },{
            path: 'star/:starId',
            element: <StarDetail />,
        },{
            path: 'star/volume',
            element: <StarVolume />,
        }]
    }
];

export default router;
