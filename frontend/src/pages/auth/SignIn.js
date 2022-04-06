import { Paper as MuiPaper, TextField, Typography, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import styled from "styled-components";

const Paper = styled(MuiPaper)`
  width: 500px;
  padding: 20px;
`;

export default function SignIn() {
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" gutterBottom>
            Welcome! Sign In to Continue
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth name="" label="User Name" />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth name="" label="Password" />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton variant="contained" fullWidth style={{ textTransform: "none" }}>
            Sign In
          </LoadingButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
