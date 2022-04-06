import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div``;

export default function AuthLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
