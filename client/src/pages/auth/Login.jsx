import React, { useState } from "react";
import {
  Link,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/userSlice";
import { reduxLogin } from "../../redux/reducers/auth";
import toast from "react-hot-toast";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setError] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading, isError }] = useLoginMutation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    const res = await login({
      username: email,
      password: password,
    });
    const data = res?.data;
    const error = res?.error;

    console.log("emailasddsc");
    console.log(data);

    if (!error && !isLoading && data) {
      // reduxLogin();
      toast.success(data.message);
      console.log(data);
    }

    if (!isLoading && data) {
      if (data.status === false) {
        // toast.error(data.message)
      }
    }

    if (error) {
      console.log("hjjkjk");
      console.log(error);
      console.log("hjjkjk");
      toast.error(error.data.message);
    }
  };

  const handleSignUpRedirect = () => {
    setIsLogin(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, sm: 3 },
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            mt: 1,
          }}
        >
          {formError && (
            <Typography color="formError" variant="body2" gutterBottom>
              {formError}
            </Typography>
          )}
          <TextField
            label="Email Address"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            formError={!validateEmail(email) && email !== ""}
            helperText={
              !validateEmail(email) && email !== ""
                ? "Invalid email address"
                : ""
            }
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Login
          </Button>
          <Typography variant="body2" align="center">
            {"Don't have an account? "}
            <Link
              component="button"
              variant="body2"
              onClick={handleSignUpRedirect}
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
