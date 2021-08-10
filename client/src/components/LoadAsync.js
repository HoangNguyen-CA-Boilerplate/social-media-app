import React from 'react';
import Spinner from './Spinner';
function LoadAsync({ data, error, loading, children }) {
  if (error) return <h1>{error}</h1>;
  else if (loading) return <Spinner />;
  else if (data) {
    return children;
  } else {
    return <h1>Could Not Get Resource!</h1>;
  }
}

export default LoadAsync;
