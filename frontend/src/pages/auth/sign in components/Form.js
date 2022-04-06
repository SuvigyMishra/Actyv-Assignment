import { TextField, Typography, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function Form({ formikProps }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome! Sign In to Continue
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          name="username"
          label="User Name"
          value={formikProps.values.username}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          helperText={formikProps.errors.username}
          error={
            !!(formikProps.touched.username && formikProps.errors.username)
          }
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          name="password"
          label="Password"
          value={formikProps.values.password}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          helperText={formikProps.errors.password}
          error={
            !!(formikProps.touched.password && formikProps.errors.password)
          }
        />
      </Grid>

      <Grid item xs={12}>
        <LoadingButton
          variant="contained"
          fullWidth
          onClick={formikProps.handleSubmit}
          disabled={!formikProps.isValid}
          loading={!!formikProps.isSubmitting}
          style={{ textTransform: "none" }}
        >
          Sign In
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
