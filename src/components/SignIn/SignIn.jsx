import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CopyRight from '../layout/CopyRight';
import {Divider, Zoom } from '@mui/material';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../redux/features/users/usersSlice';


export default function SignIn(props) {

  const isLogin = useSelector((state)=>state.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    if(isLogin){
      navigate('/welcome')
    }
  }, [isLogin]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:5000/login',{
      email: data.get('email'),
      password: data.get('password'),
    }).then(res=>{
      if (res.status === 200) {
        dispatch(LOGIN(res.data))
        navigate('/welcome')
      }
      else {
        console.error('Api is unreachable...')
      }

    })
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '200ms' }} >
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={1000} >
            Sign in
          </Typography>
          <Typography  fontWeight={700} color='grey' sx={{mt:1}}>
            Welcome back, you've been missed!
          </Typography>
          <Grid container>
            <Grid item xs marginBottom={1}>
              <Button
                type="submit"
                variant="conatined"
                sx = {{
                  marginTop: 5,
                  fontWeight: 700,
                  borderRadius: '25px',
                  color: 'black',
                  backgroundColor:'#edeef0'
                }}
              >
                <GoogleIcon sx={{mr:2, color:'green'}} />
                Log in with Google
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="conatined"
                sx={{
                  marginTop: 5,
                  fontWeight: 700,
                  borderRadius: '25px',
                  color: 'black',
                  backgroundColor:'#edeef0'
                }}
                >
                <AppleIcon sx={{mr:2}} />
                Log in with Apple
              </Button>
            </Grid>
          </Grid>
          <Divider flexItem sx={{mt:1,mb:2,fontWeight:1000}}>
            OR
          </Divider>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight:700 }}

            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <LinkRouter to='/signup'>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyRight sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Zoom>
  );
}
