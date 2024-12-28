import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.form`
  width: 100%;
  height: 56rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.p`
  width: 100%;
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
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
`

export const DateInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 0.1rem solid ${COLOR.borderColor};
  background: url("/assets/calendar.svg") no-repeat right 10px center
    ${COLOR.boxColor};
  outline: none;
  font-family: var(--font-jua);
  &::-webkit-calendar-picker-indicator {
    appearance: none;
    opacity: 0;
    cursor: pointer;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Warning = styled.p`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  color: #ff2929;
  text-align: start;
`;
