import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const SignUp = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
   
    setForm({
      ...form,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(form));
    localStorage.setItem("isAuth",JSON.stringify(form))
    setIsSubmit(true);

    await fetch(`https://mama-earth.herokuapp.com/register`, {
      method: `POST`,
      body: JSON.stringify(form),
      headers: {
        "Content-Type": `application/json`,
        Accept: `application/json`,
      },
    }).then((res) => {
      res.json();
    });
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(form);
    }
  }, [error]);

  const validate = (values) => {
    console.log(values);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = "First Name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password < 4) {
      errors.password = "Password must be at least 4 characters";
    } else if (values.password > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div >
      {Object.keys(error).length === 0 && isSubmit ? (
        window.location.href='/'
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
               
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                     
                      name="first_name"
                 
                      fullWidth
                      id="first_name"
                      label="First Name"
                   
                    />
                  </Grid>
                  <p style={{ color: "red",fontSize:"10px", marginLeft: "25px" }}>
                    {error.first_name}
                  </p>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                     
                      fullWidth
                      id="last_name"
                      label="Last Name"
                      name="last_name"
                      
                    />
                  </Grid>
                  <p style={{ color: "red", fontSize:"10px", marginLeft: "25px" }}>
                    {error.last_name}
                  </p>

                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                    
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                     
                    />
                  </Grid>
                  <p style={{ color: "red",fontSize:"10px", marginLeft: "25px" }}>
                    {error.email}
                  </p>

                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                  
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    
                    />
                  </Grid>

                  <p style={{ color: "red",fontSize:"10px", marginLeft: "25px" }}>
                    {error.password}
                  </p>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                 
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <div>
                
                  <Button
               
                    fullWidth
                    variant="contained"
                    onClick={() =>
                      (window.location.href =
                        "http://mama-earth.herokuapp.com/auth/google/callback")
                    }
                  >  <img
                  style={{ width: "30px", cursor: "pointer" ,padding:"0 10px 0 0"}}
                  onClick={() =>
                    (window.location.href =
                      "http://mama-earth.herokuapp.com/auth/google/callback")
                  }
                  src="https://www.bing.com/rp/ihQ1qsvPtWPKNJ6riT-6zWhux6w.png"
                  alt="Google"
                />
                    Google
                  </Button>
                </div>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
}