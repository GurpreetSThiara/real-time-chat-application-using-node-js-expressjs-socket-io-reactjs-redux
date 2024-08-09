import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { keyframes } from '@emotion/react';

// Keyframes for the dots animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Style for each dot
const dotStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  animation: `${bounce} 1.4s infinite ease-in-out`,
  display: 'inline-block',
  margin: '0 4px',
};

// Dot animations with delay for a sequential effect
const dotDelayStyle = (delay) => ({
  ...dotStyle,
  animationDelay: `${delay}s`,
});

export const LayoutLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1200, // Make sure it's above other content
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={dotDelayStyle(0)} />
        <Box sx={dotDelayStyle(0.2)} />
        <Box sx={dotDelayStyle(0.4)} />
      </Box>
    </Box>
  );
};
