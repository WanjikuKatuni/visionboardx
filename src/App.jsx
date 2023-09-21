import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import useStore from "./store";
import AppLoader from "./components/Layouts/AppLoader";
import PublicOnlyRoute from "./components/utils/PublicOnlyRoute";
import VisionsScreen from "./pages/VisionsScreen";
import PrivateOnlyRoute from "./components/utils/PrivateOnlyRoute";
import ToastbarManager from "./components/Layouts/ToastbarManager";

function App() {
  // useStore Hook
  const { loader, setLoginStatus } = useStore();

  console.log(loader);
  // whenever the auth state changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoginStatus(!!user);
    });

    return () => unsub();
  }, []);

  if (loader) return <AppLoader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastbarManager />
      <BrowserRouter>
        <Routes>
          {/* returns to auth screen if not logged in or authenticated */}
          <Route
            path="/"
            element={<PublicOnlyRoute Component={AuthScreen} />}
          />

          {/* goes to vision board screen after authentication */}
          <Route
            path="/visionboards"
            element={<PrivateOnlyRoute Component={VisionsScreen} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
