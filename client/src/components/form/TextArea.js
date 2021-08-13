import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = styled(TextareaAutosize)`
  overflow: hidden;
  display: block;
  width: 100%;
  resize: none;

  line-height: 1.2em;

  font-size: 1.2rem;
  outline: none;
  border: none;

  &:focus {
  }
`;

export default TextArea;
