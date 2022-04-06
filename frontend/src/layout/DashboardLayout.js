import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div``;

export default function DashboardLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
