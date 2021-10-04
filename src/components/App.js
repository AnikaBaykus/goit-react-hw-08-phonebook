import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Container from './Container';
import AppBar from './AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './AppBar/PrivateRoute';
import PublicRoute from './AppBar/PublicRoute';

const HomeViews = lazy(() =>
  import('../views/HomeViews.jsx' /* webpackChunkName: "Home_Page" */),
);
const RegisterViews = lazy(() =>
  import('../views/RegisterViews.jsx' /* webpackChunkName: "Register_Page" */),
);
const LoginViews = lazy(() =>
  import('../views/LoginViews.jsx' /* webpackChunkName: "Login_Page" */),
);
const ContactsViews = lazy(() =>
  import('../views/ContactsView.jsx' /* webpackChunkName: "Contacts_Page" */),
);
const NotFoundViews = lazy(() =>
  import('../views/NotFoundViews.jsx' /* webpackChunkName: "Not_Found" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(authSelectors.getIsCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isCurrentUser && (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeViews />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterViews />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginViews />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsViews />
            </PrivateRoute>
            <Route>
              <NotFoundViews />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
