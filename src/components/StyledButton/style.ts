import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  border-radius: 0.4rem;
  background-color: ${COLOR[500]};
  border: none;
  outline: none;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled(SubmitButton)`
  background-color: ${COLOR.boxColor};
  color: #ff2929;
  &:hover {
    background-color: #444;
  }
  &:disabled {
    background-color: var(--box-color);
    cursor: not-allowed;
  }
`;

export const CancelButton = styled(SubmitButton)`
  color: #ccc;
  background-color: ${COLOR.boxColor};
  &:hover {
    background-color: #333;
  }
  &:disabled {
    background-color: #333;
    cursor: not-allowed;
  }
`;