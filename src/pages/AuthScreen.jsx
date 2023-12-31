import React, { useState } from "react";
import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/vb.jpg";
import ImageEl from "../components/utils/ImageEl";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import useStore from "../store";

// intiial form state
const initForm = {
  email: "",
  password: "",
};

function AuthScreen() {
  const [loading, setLoading] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState(initForm);

  const {setToaster} = useStore()

  const authText = isLogin
    ? "Do not have an account?"
    : "Already have an account?";

  const handleChange = (event) =>
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));

  const handleAuth = async () => {
    try {
      setLoading(true);
      if (isLogin) {
        await signInWithEmailAndPassword(auth, form.email, form.password);
      } else {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
      }
    } catch (error) {
      const errMsg = error.code.split("auth/")[1].split("-").join(" ");
      setToaster(errMsg);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Stack mb={6} spacing={4} alignItems="center" textAlign="center">
        {/* logo */}
        <ImageEl src={logo} alt="visionboard-logo" />
        <Typography color="#C0C0C0">
          Visualize your goals and dreams for increased motivation and
          productivity. <br /> Access your vision board Anytime, Anywhere
        </Typography>
        <Typography color="red" variant="h5">Click Do not have an account to get started</Typography>
      </Stack>
      {/* textfield */}
      <Stack spacing={2}>
        <TextField
          onChange={handleChange}
          value={form.email}
          name="email"
          label="Email"
        />
        <TextField
          onChange={handleChange}
          value={form.password}
          name="password"
          label="Password"
        />
        {/* buttons */}
        <Button
          disabled={loading || !form.email.trim() || !form.password.trim()}
          onClick={handleAuth}
          size="large"
          variant="contained"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </Stack>
      <Typography
        //   change from oldstate to newstate
        onClick={() => setIsLogin((o) => !o)}
        sx={{ cursor: "pointer" }}
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
