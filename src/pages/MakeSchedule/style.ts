import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Box = styled.div`
  width: 100%;
  max-width: 44rem;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

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
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`

export const SelectWrap = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: space-between;
`

export const SelectItem = styled.div<{$selected: boolean}>`
  width: 20.4rem;
  height: 14rem;
  background-color: ${COLOR.boxColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.4rem;
  cursor: pointer;
  gap: 0.8rem;
  border: ${props=>props.$selected ? "0.3rem" : '0'} solid ${COLOR[500]};
`

export const SelectDetail = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`