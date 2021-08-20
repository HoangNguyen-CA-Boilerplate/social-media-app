import React from 'react';
import LayoutMessage from '../components/layout/LayoutMessage';
import LayoutHeader from '../components/layout/LayoutHeader';

function PageNotFound() {
  return (
    <>
      <LayoutHeader>Page Not Found</LayoutHeader>
      <LayoutMessage sub='Sorry, the page you are looking for could not be found.'>
        404
      </LayoutMessage>
    </>
  );
}

export default PageNotFound;
