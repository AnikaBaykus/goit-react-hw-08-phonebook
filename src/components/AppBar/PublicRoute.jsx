import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  redirectTo = '/contacts',
  restricted = false,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
