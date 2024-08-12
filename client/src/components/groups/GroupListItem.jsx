import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents';
import { Avatar, Stack, Typography } from '@mui/material';


const GroupListItem = ({group}) => {
    const {name , avatar, _id , chatId} = group;
  return (
    <Link to={''}>
     <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} onClick={e=>{
       
        if(chatId === _id){
            e.preventDefault();
        }
     }}>
        <Avatar/>
        <Typography>{name}</Typography>
     </Stack>
    
    </Link>
  )
}

export default memo(GroupListItem)