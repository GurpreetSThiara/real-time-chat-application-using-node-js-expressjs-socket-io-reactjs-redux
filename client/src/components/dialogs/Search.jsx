import React, { useEffect, useState } from 'react';
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
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useLazySearchUsersQuery, useSendConnectionRequestMutation } from '../../redux/api/usersSlice';

import toast from "react-hot-toast";
import useAsyncMutation from '../../hooks/useAsyncMutation';


const Search = ({onClose}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  //const [isLoading , setIsLoading] = useState(false);
  const [sendConnectionRequest , isLoading , data]= useAsyncMutation(useSendConnectionRequestMutation);
  

  const [searchUsers ] = useLazySearchUsersQuery();



  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

   
  };

  const handleClose = () => {
    onClose();
   // setQuery('');
    //setResults([]);
  };

  const handleSendRequest =async (id) => {
    await sendConnectionRequest("sending connection request",{userId:id});
 
  };

  useEffect(()=>{

      const timeOut = setTimeout(()=>{
     
        searchUsers(query).then((res)=> {
          setResults(res.data.users);
          console.log(res.data)
       
        }).catch((e)=>{
            console.log("error")
            console.log("error")
            console.log("error")
            console.log("error")
            console.log(e)
        

        });
      },2000);

      return () => {
        clearTimeout(timeOut);
      }
      
  },[query])

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
          {results?.length > 0 ? (
            results.map((item) => (
              <ListItem key={item._id}>
                <Avatar src={item.avatar}/>
                <ListItemText primary={item.name} />
                <Box ml={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    onClick={() => handleSendRequest(item._id)}
                  >
                    Send Request
                  </Button>
                </Box>
              </ListItem>
            ))
          ) : (
            <ListItem>
              {isLoading?  <ListItemText primary="Loading" />:              <ListItemText primary="No users" />

}
              
            </ListItem>
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
