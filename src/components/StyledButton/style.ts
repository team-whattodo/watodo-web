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

const DivButton = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  transition: all 0.2s;
  text-align: center;
`;

export const DeleteButton = styled(DivButton)<{ $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? "#333" : COLOR.boxColor)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  color: #ff2929;
  &:hover {
    background-color: #444;
  }
`;

export const CancelButton = styled(DivButton)<{ $disabled: boolean }>`
  color: #ccc;
  background-color: ${(props) => (props.$disabled ? "#333" : COLOR.boxColor)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: #333;
  }
`;
