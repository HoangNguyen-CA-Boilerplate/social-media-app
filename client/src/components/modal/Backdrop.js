import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[900] + 'AA'};
  position: relative;
  z-index: 50;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  margin: 0 !important;
`;
export default Backdrop;
