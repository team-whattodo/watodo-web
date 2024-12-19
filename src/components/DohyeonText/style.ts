import styled from "@emotion/styled";

export const P = styled.p<{ $fontSize: string; $color: string }>`
  font-family: "Do Hyeon";
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $color }) => $color};
  font-style: italic;
  padding-right: 0.4rem;
`;
