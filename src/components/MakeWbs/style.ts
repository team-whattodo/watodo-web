import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.p`
  width: 100%;
  margin-bottom: 0.4rem;
  font-size: 1.6rem;
`;


export const Textarea = styled.textarea`
  font-size: 1.2rem;
  resize: none;
  padding: 1rem;
  border: 0.1rem solid ${COLOR.borderColor};
  background-color: ${COLOR.boxColor};
  border-radius: 0.4rem;
  width: 100%;
  min-height: 8rem;
  outline: none;
  margin-bottom: 1rem;
`;

export const Warning = styled.p`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: #ff2929;
  text-align: start;
`;