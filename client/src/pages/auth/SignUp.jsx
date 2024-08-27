import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Link, IconButton, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CameraAlt, Image, FileUpload } from '@mui/icons-material';
import { useRegisterMutation } from '../../redux/api/userSlice';
import toast from 'react-hot-toast';

const SignUp = ({setIsLogin}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [register, { isLoading }] = useRegisterMutation();

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file)
      setAvatar(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file))
      // Create a URL for the selected file
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword || !bio) {
      setError('Please fill out all fields.');
      return;
    }
    
    // if (!validateEmail(email)) {
    //   setError('Please enter a valid email address.');
    //   return;
    // }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const formData = new FormData();
formData.append('username', email);
formData.append('password', password);
formData.append('bio', bio);
formData.append('name', name);
if (avatarFile) {
formData.append('avatar', avatar.file);
}

console.log(formData)

    // Handle sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Bio:', bio);
    console.log('Avatar:', avatar);

    try {
      const {data , error} = await register({
      bio:bio,password:password,name:name,avatar:avatar.file
      });

      if(data){
        console.log('User registered successfully:', data);
        toast.success(data.message)
      }

      if(error){
        console.log('User not registered:', error);
        toast.success(error.message)
      }
   
      //navigate('/dashboard');
    }catch(e){
      console.log('Error registering user:', e);
    }

    // // Clear form and error if sign-up is successful
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    // setBio('');
    // setAvatar(null);
    // setError('');
  };

  const handleLoginRedirect = () => {
    setIsLogin(true);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, sm: 3 },
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            mt: 1,
          }}
        >
          {error && (
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          )}
          <Box
            sx={{
              position: 'relative',
              mb: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={avatar || '/default-avatar.png'} // Fallback to a default avatar if none is selected
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <IconButton
              component="label"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
              <Image />
            </IconButton>
          </Box>
          <TextField
            label="Email Address"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!validateEmail(email) && email !== ''}
            helperText={!validateEmail(email) && email !== '' ? 'Invalid email address' : ''}
          />
            <TextField
            label="Name"
            margin="normal"
            required
            fullWidth
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={name !== ''}
            helperText={ name !== '' ? 'please enter name' : ''}
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            required
            fullWidth
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={password.length > 0 && password.length < 6}
            helperText={password.length > 0 && password.length < 6 ? 'Password must be at least 6 characters long' : ''}
          />
          <TextField
            label="Confirm Password"
            type="password"
            margin="normal"
            required
            fullWidth
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword.length > 0 && password !== confirmPassword}
            helperText={confirmPassword.length > 0 && password !== confirmPassword ? 'Passwords do not match' : ''}
          />
          <TextField
            label="Bio"
            margin="normal"
            required
            fullWidth
            multiline
            minRows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" align="center">
            {"Already have an account? "}
            <Link
              component="button"
              variant="body2"
              onClick={handleLoginRedirect}
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
