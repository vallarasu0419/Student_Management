import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ email: "", pass: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    let valid = true;
    let errorObj = { email: "", pass: "" };

    if (!validateEmail(email)) {
      errorObj.email = "Please enter a valid email address.";
      valid = false;
    }

    if (pass.length < 6) {
      errorObj.pass = "Password must be at least 6 characters.";
      valid = false;
    }

    setError(errorObj);

    if (valid) {
      setUser({
        email,
        password: pass,
        firstName: "Vikkaraman",
        lastName: "V",
      });
      navigate("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error.email}
          helperText={error.email}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          error={!!error.pass}
          helperText={error.pass}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
