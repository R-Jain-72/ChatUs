import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp';
import { usernameValidator } from '../utils/validators';

const Login = () => {

    const [isLogin,setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin((prev) => !prev)//toggles between sign up and login

    //custom validators
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword();

    const avatar = useFileHandler("single");//single -> selects only single file(as only one pic can be your avatar)
    
    const handleLogin = (e) => {
        e.preventDefault();
    };

    const handleSignUp = (e) => {
        e.preventDefault();
    };

  return (

  <div
    style={{
        backgroundImageStyle: 
        "linear-gradient(rgba(200,200,200,0.5), rgba(120,110,220,0.5))",
    }}
  >
  <Container 
    component={"main"} 
    maxWidth="xs" 
    sx={{ 
        height: "112vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}
  >

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
        onSubmit={handleLogin}

            <TextField 
             required
             fullWidth
             label="Username"
             margin='normal' 
             variant='outlined'
             //to validate           
             value={username.value}
             onChange={username.changeHandler}
            />

            <TextField 
             required
             fullWidth
             label="Password"
             type='password'
             margin='normal' 
             variant='outlined'
             //to validate
             value={password.value}
             onChange={password.changeHandler}
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
                Sign Up Instead
            </Button>

        </form>

        </> 
        ) : ( 
            <>
        
            <Typography variant='h5'> Sign Up </Typography>
            <form style={{
                width: "100%",
                marginTop: "1rem",
            }}
            >
            onSubmit={handleSignUp}

                <Stack position={"relative"} width={"10rem"} margin={"auto"}> 
                    <Avatar 
                        sx={{
                            width: "10rem",
                            height: "10rem",
                            objectFit: "contain",
                        }}
                        src={avatar.preview} //shows the avatar
                    />

                    <IconButton 
                        sx={{
                            position: "absolute",
                            color: "white",
                            bottom: "0",
                            right: "0",
                            bgcolor: "rgba(0,0,0,0.5)",
                            ":hover": {
                                bgcolor: "rgba(0,0,0,0.7)",
                            },
                        }}
                        component="label"
                    >
                        <>
                            <CameraAltIcon />
                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                        </>
                    </IconButton>
                </Stack>

                {
                    avatar.error && (
                        <Typography 
                            m={"1rem"} 
                            width={"fit-content"}
                            display={"block"}
                            color="error" 
                            variant='caption'
                        >
                            {avatar.error}
                        </Typography>
                    )
                }

                <TextField 
                 required
                 fullWidth
                 label="Name"
                 margin='normal' 
                 variant='outlined'
                 //to validate
                 value={name.value}
                 onChange={name.changeHandler}
                />

                <TextField 
                 required
                 fullWidth
                 label="Bio"
                 margin='normal' 
                 variant='outlined'
                 //to validate
                 value={bio.value}
                 onChange={bio.changeHandler}
                />
                
                <TextField 
                 required
                 fullWidth
                 label="Username"
                 margin='normal' 
                 variant='outlined'
                 //to validate
                 value={username.value}
                 onChange={username.changeHandler}
                />

                {/* to show the error message */}
                {
                    username.error && (
                        <Typography color="error" variant='caption'>
                            {username.error}
                        </Typography>
                    )
                }
    
                <TextField 
                 required
                 fullWidth
                 label="Password"
                 type='password'
                 margin='normal' 
                 variant='outlined'
                 //to validate
                 value={password.value}
                 onChange={password.changeHandler}
                />  
                {/* this is commented so that we can keep a simple password
                 to show the error message 
                {
                    password.error && (
                        <Typography color="error" variant='caption'>
                            {password.error}
                        </Typography>
                    )
                }
                */} 
    
                <Button 
                sx={{
                    marginTop: "1rem",
                }} 
                variant="contained" 
                color="primary" 
                type="submit"
                fullWidth
                >
                    Sign Up
                </Button>
    
                <Typography variant='h6' textAlign={'center'} m={"1rem"}> OR </Typography>
    
                <Button  
                fullWidth
                variant="text" 
                //color="primary" 
                onClick={toggleLogin}
                >
                    Login Instead
                </Button>
    
            </form>
    
            </> 
        )}
    </Paper>
  
  </Container>
  </div>
);
};

export default Login;