import React from 'react';
import Spinner from './Spinner';
import LayoutMessage from './layout/LayoutMessage';
function LoadAsync({ error, loading, children }) {
  if (error) return <LayoutMessage>{error}</LayoutMessage>;
  else if (loading) return <Spinner />;
  return children;
}

export default LoadAsync;
