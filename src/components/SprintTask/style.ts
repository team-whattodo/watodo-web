import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div<{ $isDone: boolean }>`
  background-color: ${props=>props.$isDone ? COLOR[800] : COLOR.backgroundColor};
  padding: 1rem;
  height: 12rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const Branch = styled.input<{ $isDone: boolean }>`
  background-color: ${(props) =>
    props.$isDone ? COLOR[600] : COLOR.boxColor};
  padding: 1rem;
  border-radius: 0.2rem;
  border: 0.1rem solid
    ${(props) => (props.$isDone ? COLOR[400] : COLOR.borderColor)};
  font-size: 1.6rem;
  outline: none;
`;
