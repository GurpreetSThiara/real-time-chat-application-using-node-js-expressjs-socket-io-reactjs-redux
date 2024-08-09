import React from 'react';
import { Avatar, Box, Typography, Button, Paper, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import moment from 'moment/moment';

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  heightL:'100%',
  //padding: theme.spacing(4),
  //border:'1px solid',
  backgroundColor: theme.palette.background.paper,
  //boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2),
}));

const EditButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Profile = ({ name = "User Name", bio = "This is the user bio.", avatarUrl = "" }) => {
    const hardCodedDate = '2023-05-01T12:34:56Z';  // Hard-coded sample date
    const formattedDate = moment(hardCodedDate).fromNow(); 
  return (
  <Stack height={'100%'} border={'1px solid'}>

<ProfileContainer>
      <AvatarContainer>
        <Avatar
          alt={name}
          src={avatarUrl || "/default-avatar.png"}
          sx={{ width: 100, height: 100 }}
        />
        <EditButton
          variant="contained"
          startIcon={<EditIcon />}
          size="small"
        >
          Edit
        </EditButton>
      </AvatarContainer>
      <Typography variant="h5" component="h1" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        {bio}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Profile created {formattedDate}
      </Typography>
      <Button variant="outlined" color="primary">
        View Details
      </Button>
    </ProfileContainer>
  </Stack>
  );
};

export default Profile;
