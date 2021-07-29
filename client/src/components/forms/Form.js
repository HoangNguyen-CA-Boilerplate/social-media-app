import styled from 'styled-components';

const Form = styled.form`
  & > * + * {
    margin-top: 1em;
  }

  max-width: 25rem;
`;

export default Form;
