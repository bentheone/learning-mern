import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      element={user ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
