import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconButton, Skeleton, Stack } from '@mui/material';
import { AttachFile, Send } from '@mui/icons-material';
import AppLayout from '../../Layout/AppLayout';
import colors from '../../constants/colors';
import { InputBox } from '../../components/styles/StyledComponents';
import InputFile from '../../components/dialogs/InputFile';
import Message from '../../components/chats/Message';
import { getSocket } from '../../socket';
import { NEW_MESSAGE } from '../../constants/events';
import { useChatDetailsQuery, useGetOldMessagesQuery } from '../../redux/api/chatSlice';
import { useSocketEvents } from '../../hooks/useSocketEvents';
import {useErrors} from '../../hooks/useErrors'


const Chat = ({chatId}) => {
  const containerRef = useRef(null);

  const socket = getSocket();

  const [message , setMessage] = useState("")
  const [isFileDialogOpen, setFileDialogOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [page, setPages] = useState(1);

  const chatDetails = useChatDetailsQuery({chatId,skip:!chatId});

  const oldMessagesChunk = useGetOldMessagesQuery({chatId,page:1})
  const members = chatDetails?.data?.chat?.members;



  const handleAttachClick = () => {
    setFileDialogOpen(true);
  };

  const handleCloseFileDialog = () => {
    setFileDialogOpen(false);
  };

  const sampleMessages = [{
    attachments: [
      {
        public_id: "asdsad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "L*uda ka Message hai",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "user_iddd",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  }];
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("handle claedddddddddddddddddddddddddddddddd")
      if(!message.trim() ) return;

      socket.emit(NEW_MESSAGE , {chatId,members , message});
      setMessage("")
  }

  const newMessagesHandler = useCallback((data) => {

    setMessages((prev) =>[...prev, data.message])

  })

  const eventObj = {[NEW_MESSAGE]: newMessagesHandler};

  useSocketEvents(socket , eventObj);

  const errors = [{isError:chatDetails.isError , error:chatDetails.error},
    {isError:oldMessagesChunk.isError , error:oldMessagesChunk.error}
  ]
  
  useErrors(errors)

  





  if(chatDetails.isLoading){
    return <Skeleton/>
  }

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing="border-box"
        padding="1rem"
        spacing="1rem"
        bgcolor={colors.backgroundColors.paper}
        height="90%"
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        {
           !oldMessagesChunk.isLoading && 
           oldMessagesChunk?.data?.messages.map(message => {
            return <Message key={message._id} message={message} user={{name:"hoty",_id:"ss"}}/>
          })

        }
        {
          messages.map(message => {
            return <Message key={message._id} message={message} user={{name:"hoty",_id:"ss"}}/>
          })
        }
      </Stack>
      <form style={{ height: '10%' }} onSubmit={handleSubmit}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={handleAttachClick}>
            <AttachFile />
          </IconButton>

          <InputBox placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />

          <IconButton  type='submit'>
            <Send />
          </IconButton>
        </Stack>
      </form>
      <InputFile open={isFileDialogOpen} onClose={handleCloseFileDialog} />
    </>
  );
};

export default AppLayout()(Chat);
