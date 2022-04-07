import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AuthLayout() {
  const theme = localStorage.getItem("THEME");

  return (
    <Wrapper
      style={{
        background:
          theme === "B1" ? "#FF99BB" : theme === "B2" ? "#C7F7D4" : "#c4e7f7",
      }}
    >
      <Outlet />
    </Wrapper>
  );
}
