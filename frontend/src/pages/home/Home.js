import { Paper as MuiPaper, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import styled from "styled-components";
import { LooksOne, LooksTwo } from "@mui/icons-material";

const Paper = styled(MuiPaper)`
  height: 400px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export default function Home() {
  const userDetails = useStoreState((state) => state.userDetails);

  return (
    <Paper>
      {userDetails.business === "Business 1" ? (
        <LooksOne style={{ height: "50px", width: "50px" }} />
      ) : (
        <LooksTwo style={{ height: "50px", width: "50px" }} />
      )}

      <Typography>{`Welcome ${userDetails.name}`}</Typography>
    </Paper>
  );
}
