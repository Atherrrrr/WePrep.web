import Link from "next/link";
import * as React from "react";

import { useAtom } from "jotai";

import {
  Snackbar,
  Alert,
  AppBar,
  Grid,
  Fab,
  useTheme,
  Avatar,
  Tooltip,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

import StorefrontIcon from "@mui/icons-material/Storefront";
import LoginIcon from "@mui/icons-material/Login";
import { IconMessageReport } from "@tabler/icons-react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";

import {
  snackbarAtom,
  snackbarMessage,
  snackbarSeverity,
  useSnackbar,
} from "@/store/snackbar";
import { DomainImage } from "@/components/shared";
import { useRouter } from "next/router";
import { SignupIcon } from "@/icons";
import useProfilePicture from "@/hooks/useProfilePicture";

interface LayoutProps {
  children: React.ReactNode;
}

const PageContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexGrow: 1,
  position: "relative",
  paddingTop: 10,
}));

export default function Layout(props: LayoutProps) {
  const theme = useTheme();

  // const [currentUser] = useAtom(currentUserAtom);
  const currentUser = true;
  const [profileImgSrc, refetch] = useProfilePicture();

  const [snackbarStatus, setSnackbarStatus] = useAtom(snackbarAtom);
  const [severity] = useAtom(snackbarSeverity);
  const [message] = useAtom(snackbarMessage);

  const snackbar = useSnackbar();

  const router = useRouter();

  return (
    <>
      {true && (
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            right: 25,
            bottom: 25,
          }}
          onClick={() => router.replace("/inbox")}
        >
          <Tooltip title="Report" arrow>
            <IconMessageReport color="white" />
          </Tooltip>
        </Fab>
      )}
      <Snackbar
        open={snackbarStatus}
        autoHideDuration={6000}
        onClose={() => setSnackbarStatus(false)}
      >
        <Alert
          onClose={() => setSnackbarStatus(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <AppBar
        position="static"
        color="secondary"
        sx={{ height: "fit-content", padding: "0.5rem 0.75rem" }}
      >
        <Grid container sx={{ width: "100%" }} alignItems="center">
          <Grid item xs={1} sx={{ height: 40 }}>
            <DomainImage alt="WePrep logo" src="/app-logo.png" />
          </Grid>
          {currentUser !== null ? (
            <Grid
              item
              xs={11}
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Link href={"/product/post"}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ textTransform: "none", height: "fit-content" }}
                  startIcon={<AddCircleOutlineIcon style={{ fill: "#fff" }} />}
                >
                  Start New Practice Session
                </Button>
              </Link>

              <IconButton size="small">
                <NotificationsIcon
                  style={{ fill: theme.palette.primary.main }}
                />
              </IconButton>
              <Link href={"/profile"}>
                <Avatar src={"/user-avatar.svg"} />
              </Link>
            </Grid>
          ) : (
            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "right", gap: 1 }}
            >
              <Link href={"/register"}>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<SignupIcon stroke="#fff" />}
                  sx={{ textTransform: "none" }}
                >
                  Sign Up
                </Button>
              </Link>

              <Link href="/login">
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<LoginIcon style={{ fill: "#fff" }} />}
                  sx={{ textTransform: "none" }}
                >
                  Login
                </Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </AppBar>

      <PageContainer>{props.children}</PageContainer>
    </>
  );
}
