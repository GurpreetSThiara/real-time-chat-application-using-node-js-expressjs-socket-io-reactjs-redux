import React, { useRef, useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import { AttachFile, Send } from '@mui/icons-material';
import AppLayout from '../../Layout/AppLayout';
import colors from '../../../constants/colors';
import { InputBox } from '../../components/styles/StyledComponents';
import InputFile from '../../components/dialogs/InputFile';
import Message from '../../components/chats/Message';


const Chat = () => {
  const containerRef = useRef(null);
  const [isFileDialogOpen, setFileDialogOpen] = useState(false);

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

          sampleMessages.map(message => {
            return <Message key={message._id} message={message} user={{name:"hoty",_id:"ss"}}/>
          })
        }
      </Stack>
      <form style={{ height: '10%' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={handleAttachClick}>
            <AttachFile />
          </IconButton>

          <InputBox placeholder="Type a message..." />

          <IconButton>
            <Send />
          </IconButton>
        </Stack>
      </form>
      <InputFile open={isFileDialogOpen} onClose={handleCloseFileDialog} />
    </>
  );
};

export default AppLayout()(Chat);
