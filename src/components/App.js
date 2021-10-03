import { Route, Switch } from 'react-router';
import { lazy, Suspense, useState } from 'react';
import './App.css';
import Container from './Container';
import ContactsViews from 'views/ContactsView';
import HomeViews from 'views/HomeViews';
import RegisterViews from 'views/RegisterViews';
import LoginViews from 'views/LoginViews';
import NotFoundViews from 'views/NotFoundViews';
import AppBar from './AppBar';

// import HomePage from './HomePage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './MoviesPage';
// import NotFound from './NotFound';

// const HomePage = lazy(() =>
//   import('./HomePage/HomePage.jsx' /* webpackChunkName: "Home_Page" */),
// );
// const MoviesPage = lazy(() =>
//   import('./MoviesPage/MoviesPage.jsx' /* webpackChunkName: "Movies_Page" */),
// );
// const MovieDetailsPage = lazy(() =>
//   import(
//     './MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "Movies_Page_Details" */
//   ),
// );
// const NotFound = lazy(() =>
//   import('./NotFound/NotFound.jsx' /* webpackChunkName: "Not_Found" */),
// );

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
