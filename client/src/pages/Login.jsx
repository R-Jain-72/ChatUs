import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button } from '@mui/material';

const Login = () => {

    const [isLogin,setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin(false)

  return (
  <Container component={"main"} maxWidth="xs">

    <Paper 
        elevation={3} 
        sx={{ 
            padding: 4, 
            display: "flex", 
            flexDirection: "column", 
            alignItems:"center",
            }}
    >   

        {isLogin ? ( 
        <>
        
        <Typography variant='h5'> Login </Typography>
        <form style={{
            width: "100%",
            marginTop: "1rem",
        }}>
            <TextField 
             required
             fullWidth
             label="Username"
             margin='normal' 
             variant='outlined'
            />

            <TextField 
             required
             fullWidth
             label="Password"
             type='password'
             margin='normal' 
             variant='outlined'
            />  

            <Button 
            sx={{
                marginTop: "1rem",
            }} 
            variant="contained" 
            color="primary" 
            type="submit"
            fullWidth
            >
                Login
            </Button>

            <Typography variant='h6' textAlign={'center'} m={"1rem"}> OR </Typography>

            <Button  
            fullWidth
            variant="text" 
            //color="primary" 
            onClick={toggleLogin}
            >
                Sign
            </Button>

        </form>

        </> 
        ) : ( 
        <span>Register</span> 
        )}
    </Paper>
  
  </Container>
);
};

export default Login;