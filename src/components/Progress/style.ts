import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ProgressWrap = styled.div`
  width: 100%;
  height: 1.6rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  background-color: ${COLOR.borderColor};
`;

export const Progress = styled.div<{ $progress: string }>`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background-color: ${COLOR[500]};
  border-radius: 10rem;
`;

export const Dot = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 100rem;
  background-color: ${COLOR.borderColor};
`;

export const DotWrap = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Text = styled.p`
  font-size: 2rem;
  align-self: flex-end;
  margin-top: 0.8rem;
`

export const Accent = styled.span`
  font-size: 2rem;
  color: ${COLOR[500]};
`