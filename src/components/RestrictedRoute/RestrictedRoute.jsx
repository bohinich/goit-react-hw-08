import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return !isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
