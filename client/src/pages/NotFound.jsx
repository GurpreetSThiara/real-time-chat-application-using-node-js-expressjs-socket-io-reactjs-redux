import React from 'react';
import { Container, Typography, Button, Box, IconButton } from '@mui/material';
import { Home as HomeIcon, SentimentDissatisfied as SentimentDissatisfiedIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // For navigation

const NotFound = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleHomeRedirect = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <SentimentDissatisfiedIcon sx={{ fontSize: 100, color: 'error.main' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h6" component="h2" color="text.secondary">
          The page you’re looking for doesn’t exist.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        onClick={handleHomeRedirect}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
