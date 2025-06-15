import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import Layout from './components/Layout/Layout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
      </Route>
    </Routes>
  );
}
