import React from 'react';
import Spinner from './Spinner';
function LoadAsync({ data, error, loading, children }) {
  if (error) return <h1>{error}</h1>;
  else if (loading) return <Spinner />;
  else if (data) {
    return children;
  } else {
    return null;
  }
}

export default LoadAsync;
