import React from 'react'
import { Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Login'));
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'));
const Template = React.lazy(() => import("./Template"))
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const LifecycleA = React.lazy(() => import('../pages/Lifecycle/LifecycleA'));

const ClassCounter = React.lazy(() => import('../pages/state-hook/ClassCounter'));
const HookCounter = React.lazy(() => import('../pages/state-hook/HookCounter'));
const CallbackHook = React.lazy(() => import('../pages/callback-hook/CallbackHook'));



export const sideBarRoutes = [
    { path: '/', name: 'Home', component: Home },
    // { path: 'home', name: 'Home', component: Home },
    { path: 'about', name: 'About', component: About },
    { path: 'lifecycle', name: 'Lifecycle', component: LifecycleA },
    { path: 'state-class', name: 'State Class', component: ClassCounter },
    { path: 'state-hook', name: 'State Hook', component: HookCounter },
    { path: 'callback-hook', name: 'Callback Hook', component: CallbackHook },

]

const appRoutes = [
    { path: '/', name: 'Home', component: Template, children: sideBarRoutes },
    { path: 'login', name: 'Login', component: Login },
    { path: '*', name: 'Not Found', component: PageNotFound },

]


export default appRoutes;

// export default function AppRoutes() {
//     return (

//         { routes.map((route) => <Route path={route.path} element={route.component}></Route>) }

//     )
// }
