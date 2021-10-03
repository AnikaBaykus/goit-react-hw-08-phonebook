import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.css';
import Container from './Container';
import AppBar from './AppBar';
// import ContactsViews from 'views/ContactsView';
// import HomeViews from 'views/HomeViews';
// import RegisterViews from 'views/RegisterViews';
// import LoginViews from 'views/LoginViews';
// import NotFoundViews from 'views/NotFoundViews';
const HomeViews = lazy(() =>
  import('./HomeViews/HomeViews.jsx' /* webpackChunkName: "Home_Page" */),
);
const RegisterViews = lazy(() =>
  import(
    './RegisterViews/RegisterViews.jsx' /* webpackChunkName: "Register_Page" */
  ),
);
const LoginViews = lazy(() =>
  import('./LoginViews/LoginViews.jsx' /* webpackChunkName: "Login_Page" */),
);
const ContactsViews = lazy(() =>
  import(
    './ContactsViews/ContactsViews.jsx' /* webpackChunkName: "Contacts_Page" */
  ),
);
const NotFoundViews = lazy(() =>
  import(
    './NotFoundViews/NotFoundViews.jsx' /* webpackChunkName: "Not_Found" */
  ),
);

export default function App() {
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
