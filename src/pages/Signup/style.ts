import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const SignupBox = styled.div`
  border: 0.1rem solid ${COLOR.borderColor};
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.8rem;
  gap: 0.4rem;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  object-position: center;
  padding-bottom: 0.4rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 32rem;
  height: 44rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const Warning = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: #ff2929;
  height: 2rem;
`;

export const NavWrap = styled.div`
  width: 100%;
`;

export const Nav = styled(Link)`
  color: #444;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
