import React, { useEffect } from 'react';
import styled from 'styled-components';

import { BrandIcon } from '../theme/brand';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/slices/authSlice';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(BrandIcon)`
  color: ${({ theme }) => theme.clrs.primary[500]};
  font-size: 3rem;
`;

const Landing = () => {
  const dispatch = useDispatch(loadUser());

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Container>
      <Icon />
    </Container>
  );
};

export default Landing;
