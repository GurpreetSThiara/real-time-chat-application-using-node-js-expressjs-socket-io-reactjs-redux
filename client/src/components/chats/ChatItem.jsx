import { Stack, Typography, Avatar, Box, IconButton } from '@mui/material';
import React, { memo } from 'react';
import { Link } from '../styles/StyledComponents';
import DeleteIcon from '@mui/icons-material/Delete';
import colors from '../../../constants/colors';

const ChatItem = ({
  avatar,       // Default to empty string if no avatar is provided
  name = 'Unknown', // Default name if not provided
  _id,
  LastMessage = '', // Default to empty string if no last message is provided
  groupChat = false,
  sameSender = false,
  isOnline = false, // Default to false if online status is not provided
  newMessage = false, // Default to false if new message status is not provided
  index = 0,
  handleDeleteChat = () => {}, // Default to a no-op function if no handler is provided
}) => {
  return (
  <Box sx={{backgroundColor:"black"}}>
      <Link
      to={`/chat/${_id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
       
        
      }}

      onContextMenu={(e) => handleDeleteChat(e,_id , groupChat)}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          padding: 1,
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: index % 2 === 0 ? colors.backgroundColors.paper
           : '#ffffff',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        {/* Avatar */}
        {/* */}
        <Avatar
          src={avatar.url}
          alt={name}
          sx={{
            width: 40,
            height: 40,
          }}
        />

        {/* Details Section */}
        <Stack
          direction="column"
          spacing={0.5}
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="body1" fontWeight="bold">
            {name || 'Unknown User'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {LastMessage || 'No message'}
          </Typography>
        </Stack>

        {/* Status Indicator */}
        {isOnline && (
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#4caf50', // Online status color
            }}
          />
        )}

        {/* New Message Indicator */}
        {newMessage && (
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#f44336', // New message indicator color
            }}
          />
        )}

        {/* Delete Button */}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteChat(_id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Link>
  </Box>
  );
};

export default memo(ChatItem);
