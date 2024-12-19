import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { COLOR } from "../constants/colors";

const Container = styled.div`
  width: 100%;
  height: 100svh;
  background-color: ${COLOR.backgroundColor};
`;

const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
