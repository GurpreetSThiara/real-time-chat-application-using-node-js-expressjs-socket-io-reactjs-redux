import { Stack, Typography, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import { useChatsQuery } from '../../redux/api/chatSlice';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../../redux/reducers/deviceSlice';

const ChatList = ({
  w = "100%",
  chatId,
  onlineUsers = [],
  newMessagesalert = [],
  handleDeleteChat,
}) => {
  const dispatch = useDispatch()
  const { isLoading, data, isError, error, refetch } = useChatsQuery();
  
  const [chats, setChats] = useState([]);



  useEffect(() => {
    if (data) {
      setChats(data.chats);
    }
    if (isLoading) {
      console.log("loading");
    }
    if (!isLoading) {
      console.log("loaded");
    }
    if (error) {
      console.log("error");
    }
    refetch();
    // eslint-disable-next-line
  }, [data, isLoading, error, refetch]);

  return (
    <Stack width={w} spacing={1}>
      {isLoading ? (
        Array.from(new Array(5)).map((_, index) => (
          <Stack key={index} direction="row" spacing={2}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width="80%" />
          </Stack>
        ))
      ) : isError ? (
        <Typography variant="body2" color="error" align="center">
          Failed to load chats: {error.message}
        </Typography>
      ) : chats.length > 0 ? (
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
