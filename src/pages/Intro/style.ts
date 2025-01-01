import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  background-color: ${COLOR.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ButtonBox = styled.div`
  width: 16rem;
  border-radius: 100rem;
`

export const Text = styled.p`
  font-size: 1.6rem;
`

export const Accent = styled.span`
  font-size: 1.6rem;
  color: ${COLOR[500]};
`