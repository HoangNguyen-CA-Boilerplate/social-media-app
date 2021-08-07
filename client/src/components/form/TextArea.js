import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = styled(TextareaAutosize)`
  display: block;
  width: 100%;
  resize: none;

  min-height: 10em;

  font-size: 1rem;
  padding: 0.8em;
  outline: none;
  border: ${(props) =>
    props.error
      ? '2px solid ' + props.theme.clrs.danger
      : '2px solid ' + props.theme.clrs.neutral[200]};

  &:focus {
    border: 2px solid ${({ theme }) => theme.clrs.primary[500]};
  }
`;

export default TextArea;
