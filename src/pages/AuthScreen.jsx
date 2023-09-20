import React, { useState } from "react";
import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/vb.jpg";
import ImageEl from "../components/utils/ImageEl";

// intiial form state
const initForm = {
    email: "",
    password: "",
}

function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState(initForm)

  const authText = isLogin
    ? "Do not have an account?"
    : "Already have an account?";

    
    const handleChange = event => setForm((oldForm)=> ({
        ...oldForm, [event.target.name]: event.target.value,
    }))

    const handleAuth = async () => {

    }


  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Stack mb={6} spacing={4} alignItems="center" textAlign="center">
        {/* logo */}
        <ImageEl src={logo} alt="visionboard-logo" />
        <Typography color="#C0C0C0">
          Visualize your goals and dreams for increased motivation and
          productivity. <br /> Access your vision board Anytime, Anywhere
        </Typography>
      </Stack>
      {/* textfield */}
      <Stack spacing={2}>
        <TextField onChange={handleChange} value={form.email} name="email" label="Email" />
        <TextField onChange={handleChange} value={form.password} name="password" label="Password" />
        {/* buttons */}
        <Button disabled={!form.email.trim() || !form.password.trim()} onClick={handleAuth} size="large" variant="contained">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </Stack>
      <Typography
    //   change from oldstate to newstate
        onClick={() => setIsLogin((o) => !o)}
        sx={{cursor: "pointer"}}
        mt={3}
        textAlign="center"
        color="#C0C0C0"
      >
        {authText}
      </Typography>
    </Container>
  );
}

export default AuthScreen;
