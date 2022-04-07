import { useState } from "react";
import { Paper as MuiPaper } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import * as yup from "yup";

import Form from "./sign in components/Form";
import { useStoreActions } from "easy-peasy";

const Paper = styled(MuiPaper)`
  width: 500px;
  padding: 20px;
`;

export default function SignIn() {
  const navigate = useNavigate();
  const { setUserDetails } = useStoreActions((actions) => actions.userDetails);

  const [formData] = useState({
    username: "",
    password: "",
  });

  return (
    <Paper>
      <Formik
        validateOnMount
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(formData, { setSubmitting }) => {
          axios({
            url: "/api/auth/sign-in",
            baseURL: "http://localhost:3001",
            data: formData,
            method: "POST",
          })
            .then((response) => {
              if (response.data.status) {
                setUserDetails(response.data.data);
                navigate("/");
              }
            })
            .catch((error) => {
              console.log(`%c[error]`, "font-weight: bold; color: red", error);
            });
        }}
      >
        {(formikProps) => <Form formikProps={formikProps} />}
      </Formik>
    </Paper>
  );
}

const validationSchema = yup.object({
  username: yup.string().required("Please enter your user name"),
  password: yup.string().required("Please enter your password"),
});
