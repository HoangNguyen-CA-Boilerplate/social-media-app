import React from 'react';
import Spinner from './Spinner';
function LoadAsync({ error, loading, children }) {
  if (error) return <h1>{error}</h1>;
  else if (loading) return <Spinner />;
  return children;
}

export default LoadAsync;
