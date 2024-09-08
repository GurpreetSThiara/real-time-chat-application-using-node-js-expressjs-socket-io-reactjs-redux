import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, IconButton, Popover, Typography } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import { useAcceptRequestMutation, useGetMyNotificationsQuery } from '../../redux/api/userSlice';
import useAsyncMutation from '../../hooks/useAsyncMutation';
import toast from 'react-hot-toast';

const Notifications = ({ onClose }) => {
  const { data, isLoading, error, isError } = useGetMyNotificationsQuery();

  console.log(data)
  console.log(data)
  console.log(data)
  console.log(data)

  //const [acceptRequest]= useAsyncMutation(useAcceptRequestMutation);

  const [acceptRequest ] = useAcceptRequestMutation();

  


  // State for popovers
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState('');

  const handlePopoverOpen = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent('');
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    onClose();
  };

  const handleAcceptRequest = async (id , accept) => {
   try {
    const res = await acceptRequest( { requestId: id, accept });
    if(res.data){
      toast.success("Request acceped successfully");
      handleClose();
    }
   }catch(e){
    console.log(e)
   }

    // {
    //   "data": {
    //     "success": true,
    //     "message": "Friend Request Accepted",
    //     "senderId": "66c76434d2b80ce78bf2a72b"
    //   }
    // }
    console.log(res)

  }

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Notifications</DialogTitle>
      <DialogContent>
        <List>
          {isLoading ? (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Skeleton width="60%" />}
                  secondary={<Skeleton width="40%" />}
                />
              </ListItem>
              {/* Add more skeleton items as needed */}
            </>
          ) : (
            data &&
            data.allRequests &&
            data.allRequests.map((request) => (
              <ListItem key={request._id}>
                <ListItemAvatar>
                  <Avatar alt={request.sender.name} src={request.sender.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={request.sender.name}
                  secondary={`Sent you a request.`}
                />
                {/* Accept Icon */}
                <IconButton
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleAcceptRequest(request._id , true)}
                >
                  <CheckCircle color="success" />
                </IconButton>
                {/* Reject Icon */}
                <IconButton
                  sx={{ cursor: 'pointer' }}
                  onClick={(e) => handlePopoverOpen(e, 'Reject')}
                >
                  <Cancel color="error" />
                </IconButton>
              </ListItem>
            ))
          )}
        </List>
      </DialogContent>
      <Button onClick={onClose}>Close</Button>

      {/* Popover to show icon details */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
      </Popover>
    </Dialog>
  );
};

export default Notifications;
