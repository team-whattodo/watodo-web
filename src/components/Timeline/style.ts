import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.2rem;
  flex: 1;
`;


export const TimelineItem = styled.div`
  padding: 1.6rem;
  background-color: ${COLOR.backgroundColor};
  display: flex;
  flex-direction: column;
`;

export const TimelineLabel = styled.p`
  color: ${COLOR.grayColor};
  font-size: 1.6rem;
  font-weight: 300;
`;

export const TimelineContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
`;

export const SprintDetail = styled.p`
  font-size: 1.2rem;
  color: ${COLOR.grayColor};
`