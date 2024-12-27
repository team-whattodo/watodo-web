import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { COLOR } from "../constants/colors";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  width: 100%;
  height: 100svh;
  background-color: ${COLOR.backgroundColor};
  display: flex;
`;

const Content = styled.div`
  width: calc(100% - 40rem);
  height: 100%;
`;

const ProjectLayout = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default ProjectLayout;
