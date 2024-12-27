import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.backgroundColor};
  padding: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 40rem;
  height: 52rem;
  border: 0.1rem solid ${COLOR.borderColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.4rem;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  object-position: center;
  padding-bottom: 0.4rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin: 1.2rem 0;
`;

export const Label = styled.p`
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;

export const Warning = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: #ff2929;
  height: 2rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 6.4rem;
  padding: 1rem;
  font-size: 1.2rem;
  border: 0.1rem solid ${COLOR.borderColor};
  background-color: ${COLOR.boxColor};
  resize: none;
  border-radius: 0.4rem;
  outline: none;
`;

export const Spacer = styled.div`
  flex: 1;
`