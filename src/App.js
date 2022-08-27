import { Route, Routes } from 'react-router-dom';
import AuthProvider from './utils/AuthProvider';
import React, { Suspense } from 'react';
import appRoutes from './template/AppRoutes';
import { Provider } from 'react-redux';


// Containers
const Template = React.lazy(() => import('./template/Template'));

// Pages
const Login = React.lazy(() => import('./pages/Login'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));



const loading = (
  <div className="progress">
    <img src='assets/imgs/loader.gif' />
  </div>
)


function App() {
  return (
    <Suspense fallback={loading}>
      <Provider>
        <AuthProvider>
          <Routes>
            {appRoutes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.component />} >
                  {route.children && route.children.map((route, idx) => {
                    return route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.component />} > </Route>
                    )
                  })}</Route>
              )
            })}
          </Routes>
        </AuthProvider>
      </Provider>
    </Suspense >
  );
}

export default App;
