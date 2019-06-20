
//用路由懒加载
import Loadable from 'react-loadable';
import Loading from "common/loading";
//当组件没加载进来的时候执行loding  加载进来就执行组件渲染
const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});

const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
});

const Settings = Loadable({
    loader: () => import('./settings'),
    loading: Loading,
});

const Users = Loadable({
    loader: () => import('./users'),
    loading: Loading,
});

export {
    Home,
    Login,
    NotFound,
    Settings,
    Users,
}