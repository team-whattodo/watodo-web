import styled from "@emotion/styled";

export const P = styled.p<{ $fontSize: string; $color: string }>`
  font-family: "Jua";
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $color }) => $color};
`;
