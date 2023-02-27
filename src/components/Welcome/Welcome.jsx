import { Avatar, Button, Grid, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/features/users/usersSlice';

const Welcome = () => {
  const isLogin = useSelector((state)=>state.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLogin) {
      navigate('/signin')
    }
  }, [isLogin]);

 return (
  <>
   {isLogin ? (
    <>
     <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
     >
      <Grid item xs={3}>
       <Paper
        elevation={3}
        sx={{ width: '98vw', height: '98vh', '.img': { opacity: 0.4 } }}
       >
        <img
         src='https://source.unsplash.com/random'
         style={{
          objectFit: 'cover',
          opacity: 0.4,
          width: '98vw',
          height: '98vh',
         }}
         alt=''
        />
        <div
         style={{
          background: 'transparent',
          position: 'absolute',
          top: 10,
          bottom: 0,
          right: 20,
         }}
        >
          <Button variant='contained' color='secondary' onClick={(e)=>{
            e.preventDefault();
            dispatch(LOGOUT())
          }} >Logout</Button>
        </div>
        <div
         style={{
          background: 'transparent',
          position: 'absolute',
          paddingLeft: '50px',
          paddingTop: '50px',
          top: '50%',
          bottom: 0,
          right: '50%',
          left: '50%',
          height: 'auto',
          width: '25%',
          transform: ' translate(-50%,-50%)',
         }}
        >
         <Avatar alt='Remy Sharp' src='https://source.unsplash.com/random' />
         <h1>I am Saad Farooq</h1>
         <p>And I'm a Full Stack Developer</p>
         <Button
          href='https://github.com/SaadFarooqM'
          variant='contained'
          color='primary'
         >
          Hire Me
         </Button>
        </div>
       </Paper>
      </Grid>
     </Grid>
    </>
   ) : <Navigate to='/signin'/>}
  </>
 );
};

export default Welcome;
