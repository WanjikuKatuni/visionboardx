import React from "react";
import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/vb.jpg";
import ImageEl from "../components/utils/ImageEl";

function AuthScreen() {
  return (
    <Container  maxWidth="xs" sx={{ mt: 10 }}>
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
        <TextField label="Email" />
        <TextField label="Password" />
      {/* buttons */}
      <Button size="large" variant="contained">Login</Button>
      </Stack>
      <Typography mt={3} textAlign="center" color="#C0C0C0">Do not have an account?</Typography>
    </Container>
  );
}

export default AuthScreen;
