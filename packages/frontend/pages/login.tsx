import Link from "next/link";

import * as React from "react";

import {
  Stack,
  useTheme,
  Button,
  ButtonGroup,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

import { useSnackbar } from "@/store/snackbar";
import { AUTH_TOKEN, authAtom, currentUserAtom } from "@/auth_rowaha";

import { FilledInputField } from "@/components/shared";
import { LogoImage } from "@/components/shared/LogoImage";
import { BACKEND_URL, LOGIN_BILKENTEER, LOGIN_MODERATOR } from "@/routes";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { flushSync } from "react-dom";
import loginRedirectAtom from "@/store/loginredirect";

const LoginStack = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "fit-content",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "3rem",
  borderRadius: "15px",
  alignItems: "center",
  border: `1px solid ${theme.palette.primary.main}`,
}));

export default function LoginPage() {
  const router = useRouter();
  const theme = useTheme();

  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [token, setToken] = useAtom(authAtom);
  const [loginRedirect] = useAtom(loginRedirectAtom);

  const [email, setEmail] = React.useState<string>("e");
  const [password, setPassword] = React.useState<string>("e");
  const [loggingIn, setLoggingIn] = React.useState<boolean>(false);

  const snackbar = useSnackbar();

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setLoggingIn(false);
  }, []);

  const handleLogin = async (loginType: "bilkenteer" | "moderator") => {
    flushSync(() => setLoggingIn(true));
    router.replace("/dashboard");
    // const loginUrl =
    //   loginType === "bilkenteer"
    //     ? `${BACKEND_URL}${LOGIN_BILKENTEER}`
    //     : `${BACKEND_URL}${LOGIN_MODERATOR}`;
    // try {
    //   const res = await fetch(loginUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });

    //   const data = await res.json();
    //   if (data.hasOwnProperty("token")) {
    //     localStorage.setItem(AUTH_TOKEN, data["token"]["accessToken"]);
    //     setCurrentUser(() => {
    //       const user = { ...data };
    //       delete user["token"];
    //       return user;
    //     });
    //     setToken(data["token"]["accessToken"]);
    //     if (loginRedirect) {
    //       router.replace(loginRedirect);
    //     } else {
    //       router.replace("/account");
    //     }
    //     return;
    //   } else if ("errors" in data) {
    //     throw new Error(data["errors"][0]);
    //   }
    // } catch (err) {
    //   snackbar("error", (err as Error).message);
    // } finally {
    //   setLoggingIn(false);
    // }
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: theme.palette.background.default, // Set the background color
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loggingIn && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="primary" size={80} thickness={3} />
          </Box>
        )}
        <LoginStack gap={2}>
          <LogoImage />
          <FilledInputField
            disabled={loggingIn}
            placeholder="Email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            multiline={false}
            size="small"
            background="white"
            hoverbackground={theme.palette.secondary.light}
            focusedbackground={theme.palette.secondary.light}
          />
          <FilledInputField
            disabled={loggingIn}
            placeholder="Password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            multiline={false}
            size="small"
            background="white"
            hoverbackground={theme.palette.secondary.light}
            focusedbackground={theme.palette.secondary.light}
          />

          <Button
            disabled={loggingIn}
            size="small"
            variant="text"
            sx={{
              textTransform: "none",
              width: "fit-content",
            }}
          >
            Forgot your password?
          </Button>

          <ButtonGroup disabled={loggingIn} size="small" fullWidth variant="contained">
            <Button
              onClick={() => handleLogin("bilkenteer")}
              sx={{
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </ButtonGroup>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: theme.palette.background.default,
            }}
          />
          <Typography variant="h6" color="primary">
            Do you not have an account yet?
          </Typography>
          <Link href={"/register"}>
            <Button
              disabled={loggingIn}
              size="small"
              variant="outlined"
              sx={{
                textTransform: "none",
                width: "fit-content",
              }}
            >
              SignUp for New Account
            </Button>
          </Link>
        </LoginStack>
      </Box>
    </>
  );
}
