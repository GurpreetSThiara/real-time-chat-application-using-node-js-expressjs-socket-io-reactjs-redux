import React, { useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Typography, Box, IconButton } from '@mui/material';
import { PhotoCamera, FolderOpen } from '@mui/icons-material';

const InputFile = ({ open, onClose }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Select a File</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body1" gutterBottom>
            Choose a file to send:
          </Typography>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<PhotoCamera />}
            onClick={() => fileInputRef.current.click()}
            sx={{ mb: 2 }}
          >
            Camera
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FolderOpen />}
            onClick={() => fileInputRef.current.click()}
          >
            File Explorer
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InputFile;
