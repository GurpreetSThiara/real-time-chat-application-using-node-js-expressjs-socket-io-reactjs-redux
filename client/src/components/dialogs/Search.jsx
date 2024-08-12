import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  InputAdornment,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const sampleData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Emily Johnson' },
  { id: 4, name: 'Michael Brown' },
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim()) {
      const filteredResults = sampleData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
  };

  const handleSendRequest = (name) => {
    alert(`Message request sent to ${name}`);
  };

  return (
    <Dialog open onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Search
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          placeholder="Search users..."
          value={query}
          onChange={handleSearch}
          variant="outlined"
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {results.length > 0 ? (
            results.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} />
                <Box ml={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    onClick={() => handleSendRequest(item.name)}
                  >
                    Send Request
                  </Button>
                </Box>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No results found" />
            </ListItem>
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
