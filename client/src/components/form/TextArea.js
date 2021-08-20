import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = styled(TextareaAutosize)`
  font-size: 1.2rem;
  line-height: 1.2em;

  display: block;
  width: 100%;
  resize: none;
  overflow: hidden;

  outline: none;
  border: none;

  &:focus {
  }
`;

export default TextArea;
