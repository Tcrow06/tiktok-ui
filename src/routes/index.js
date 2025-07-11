import routesConfig from '~/config/routes';

//Layout
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Public routes
// Cho phép truy cập khi không cần login
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// Private routes
// Nếu chưa đăng nhập thì chuyển sang trang đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
