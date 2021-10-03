import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Container from './Container';
import AppBar from './AppBar';
import { authOperations } from 'redux/auth';
// import ContactsViews from 'views/ContactsView';
// import HomeViews from 'views/HomeViews';
// import RegisterViews from 'views/RegisterViews';
// import LoginViews from 'views/LoginViews';
// import NotFoundViews from 'views/NotFoundViews';
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
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/">
            <HomeViews />
          </Route>
          <Route exact path="/register">
            <RegisterViews />
          </Route>
          <Route path="/login">
            <LoginViews />
          </Route>
          <Route path="/contacts">
            <ContactsViews />
          </Route>
          <Route>
            <NotFoundViews />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
