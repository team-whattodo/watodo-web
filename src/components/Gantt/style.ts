import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const ChartContainer = styled.div`
  max-width: 100%;
  overflow: scroll;
  margin: 20px 0;
`;

export const ChartTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export const TaskHeader = styled.th`
  font-size: 1.6rem;
  padding: 1.2rem;
  text-align: left;
  border: 0.1rem solid ${COLOR.borderColor};
  min-width: 15rem;
  font-family: "Do Hyeon";
  font-style: italic;
  text-align: center;
`;

export const DateHeader = styled.th`
  font-size: 1.6rem;
  color: ${COLOR[300]};
  text-align: center;
  padding: 1rem;
  border: 0.1rem solid ${COLOR.borderColor};
  white-space: nowrap;
  font-family: "Do Hyeon";
  font-style: italic;
`;

export const TaskTitle = styled.td`
  height: 4rem;
  font-size: 1.4rem;
  padding: 1rem;
  border: 0.1rem solid ${COLOR.borderColor};
  white-space: nowrap;
`;

export const ChartCell = styled.td`
  position: relative;
  border: 0.1rem solid ${COLOR.borderColor};
`;

export const TaskBar = styled.div`
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  border-radius: 0.8rem;
  opacity: 0.9;
  background-color: ${COLOR[500]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`;
