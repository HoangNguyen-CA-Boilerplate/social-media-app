import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    color: ${({ theme }) => theme.clrs.neutral[900]};
}
`;

export default GlobalStyles;
