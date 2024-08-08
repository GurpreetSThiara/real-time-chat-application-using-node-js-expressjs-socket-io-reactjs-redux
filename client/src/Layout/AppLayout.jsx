/* eslint-disable react/display-name */
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Header from '../components/Header/Header';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <Box component="main" sx={{ flex: 1 }}>
          <WrappedComponent {...props} />
        </Box>
        <footer>
          <Box
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <IconButton component="a" href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton component="a" href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </footer>
      </Box>
    );
  };
};

export default AppLayout;
