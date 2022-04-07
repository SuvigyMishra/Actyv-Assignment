import styled from "styled-components";
import { Navigate, Outlet } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DashboardLayout() {
  const userDetails = useStoreState((state) => state.userDetails);
  const { background } = useStoreState((state) => state.theme);

  if (!userDetails.accessToken) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <Wrapper style={{ background }}>
      <Outlet />
    </Wrapper>
  );
}
