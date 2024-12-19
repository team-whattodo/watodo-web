import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Input = styled.input<{
  $fontSize: string;
}>`
  width: 100%;
  outline: none;
  font-size: ${({ $fontSize }) => $fontSize};
  border: 0.1rem solid ${COLOR.borderColor};
  border-radius: 0.4rem;
  background-color: ${COLOR.boxColor};
  padding: 1rem;
`;
