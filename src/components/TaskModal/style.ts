import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 52rem;
  min-height: 36rem;
  background-color: ${COLOR.backgroundColor};
  border: 0.1rem solid ${COLOR.borderColor};
  border-radius: 0.8rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const Spacer = styled.div`
  flex: 1;
`

export const Form = styled.form`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const Label = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`

export const Warning = styled.p`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: #ff6060;
`