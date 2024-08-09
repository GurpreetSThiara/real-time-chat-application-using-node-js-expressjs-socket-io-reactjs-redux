import { Stack, Typography } from '@mui/material';
import React from 'react';
import ChatItem from './ChatItem';

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesalert = [],
  handleDeleteChat,
}) => {

  return (
    <Stack
      width={w}
      spacing={1} // Adds spacing between chat items
    >
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <ChatItem
            key={chat._id}
            avatar={chat.avatar}
            name={chat.name}
            _id={chat._id}
            LastMessage={chat.LastMessage || 'No message'}
            isOnline={onlineUsers.includes(chat._id)}
            newMessage={newMessagesalert.includes(chat._id)}
            index={index}
            handleDeleteChat={handleDeleteChat}
          />
        ))
      ) : (
        <Typography variant="body2" color="textSecondary" align="center">
          No chats available
        </Typography>
      )}
    </Stack>
  );
};

export default ChatList;
