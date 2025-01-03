import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  gap: 0.4rem;
`;

export const NoScheduleWrap = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoScheduleText = styled.p`
  color: ${COLOR.grayColor};
  font-size: 2rem;
`;

export const GanttWrap = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
  overflow: scroll;
`

export const AddWrap = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonWrap = styled.div`
  width: 10rem;
`;
