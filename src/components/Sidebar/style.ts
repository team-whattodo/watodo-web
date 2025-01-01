import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 40rem;
  height: 100%;
  border-right: 0.1rem solid ${COLOR.borderColor};
  padding: 0 1rem;
`;

export const Header = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: flex-end;
  padding: 1rem 0.4rem;
  border-bottom: 0.1rem solid ${COLOR.borderColor};
  gap: 0.8rem;
`;

export const Text = styled.p`
  font-size: 2rem;
`;

export const ProjectWrap = styled.div`
  width: 100%;
  height: calc(100% - 24rem);
  overflow-y: scroll;
`;

export const ProjectItem = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${COLOR.boxColor};
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.4s;
  border: 0.1rem solid ${COLOR.borderColor};
  &:hover{
    transform: scaleY(1.1);
  }
  margin-top: 1rem;
`

export const ProjectDetail = styled.p`
  font-size: 1.2rem;
`

export const Footer = styled.div`
  width: 100%;
  height: 18rem;
  border-top: 0.1rem solid ${COLOR.borderColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const UserWrap = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.8rem;
`

export const UsernameWrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
`

export const UserInfo = styled.p`
  font-size: 1.6rem;
  color: ${COLOR.grayColor};
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: 4rem;
`

export const NewWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  margin-top: 1rem;
`

export const New = styled.div`
  width: 10rem;
  padding: 0.4rem 0;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${COLOR.boxColor};
  border-radius: 0.4rem;
`