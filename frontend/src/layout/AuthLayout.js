import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c4e7f7;
`;

export default function AuthLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
