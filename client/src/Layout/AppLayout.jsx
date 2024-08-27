/* eslint-disable react/display-name */
import React from 'react';
import { Box, Typography, Link, IconButton, Grid, Drawer } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Header from '../components/Header/Header';
import Title from '../components/shared/Title';
import colors from '../../constants/colors';
import ChatList from '../components/chats/ChatList';
import Profile from '../components/profile/Profile';
import { useChatsQuery } from '../redux/api/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMobile } from '../redux/reducers/deviceSlice';

const AppLayout = () => (WrappedComponent) => {


    const sampleChats = [{

        avatar:["https://www.w3schools.com/howto/img_avatar.png"],name:"John",_id:"1",groupChat:false, members:["1","2"],
    },
    {

        avatar:["https://www.w3schools.com/howto/img_avatar.png"],name:"tom",_id:"2",groupChat:false, members:["1","2"],}
    ]
  return (props) => {

    const dispatch = useDispatch();
    const {isMobile} = useSelector((state)=>state.device)

    const handleMobileClose = () => {
      dispatch(setIsMobile(false));
    }
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Title/>
        <Header/>
        <Grid container height={"calc(100vh - 4rem)"}>
            <Grid item xs={4} md={3} sx={{display:{xs:"none",sm:"block"}}} height={'100%'} bgcolor={colors.primaryColors.main}>
                <ChatList chats={sampleChats}/>
            </Grid>
           <Drawer open={isMobile} onClose={handleMobileClose}>
           <ChatList w="70vw" chats={sampleChats}/>
           </Drawer>
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} sx={{display:{xs:"block",sm:"block"}}}  p={3}>
                <WrappedComponent {...props} />
                ssssssssss
                </Grid>

                <Grid item md={4} lg={3} height={"100%"} sx={{display:{xs:"none",md:"block"},padding:"2rem"}}>
                    <Profile/>

                </Grid>
        </Grid>

        
       
        <footer>
          <Box
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <IconButton component="a" href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton component="a" href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </footer>
      </Box>
    );
  };
};

export default AppLayout;
