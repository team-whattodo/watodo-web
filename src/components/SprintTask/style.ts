import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${COLOR.backgroundColor};
  padding: 1rem;
  height: 12rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const Branch = styled.input`
  background-color: ${COLOR.boxColor};
  padding: 1rem;
  border-radius: 0.2rem;
  border: 0.1rem solid ${COLOR.borderColor};
  font-size: 1.6rem;
  outline: none;
`;
