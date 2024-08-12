import React, { memo } from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { fileFormat } from '../../lib/features';
import AttachmentDisplay from '../dialogs/AttachmentDisplay';

const Message = ({ message,user }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        p: 2, 
        mb: 2, 
        maxWidth: '80%', 
        alignSelf: message.sender._id === 'user_id' ? 'flex-end' : 'flex-start',
        bgcolor: message.sender._id === 'user_id' ? 'primary.light' : 'grey.100',
        borderRadius: 2,
      }}
      component={Paper}
    >
      {/* Attachments */}
      {message.attachments?.map((attachment, index) => {
        const url = attachment.url;
        const file = fileFormat(url);

        return <Box key={index}>
            <a href='' target='_blank' download >
                <AttachmentDisplay file={file} url={url}/>
            </a>
        </Box>
      })}

      {/* Content */}
      <Typography 
        variant="body1" 
        sx={{ mb: 1, wordWrap: 'break-word' }}
      >
        {message.content}
      </Typography>

      {/* Sender */}
      <Typography 
        variant="body2" 
        sx={{ fontWeight: 'bold', mb: 1 }}
      >
        {message.sender.name}
      </Typography>

      {/* Timestamp */}
      <Typography 
        variant="caption" 
        color="textSecondary"
      >
        {new Date(message.createdAt).toLocaleString()}
      </Typography>
    </Box>
  );
};

export default memo(Message);
