import React, { useState } from 'react';
import { Link,Container, Typography, TextField, Button, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Login = ({setIsLogin}) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSignUpRedirect = () => {
    setIsLogin(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, sm: 3 }, // Responsive padding
          width: '100%',
          maxWidth: 400, // Max width for larger screens
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            mt: 1,
          }}
        >
          {error && (
            <Typography color="error" variant="body2" gutterBottom>
              {error}
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
            error={!validateEmail(email) && email !== ''}
            helperText={!validateEmail(email) && email !== '' ? 'Invalid email address' : ''}
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
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
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
