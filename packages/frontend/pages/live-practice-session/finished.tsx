import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import { ExitToApp, ExitToAppOutlined, RestartAltRounded } from "@mui/icons-material";

const videoConstraints = {
  //   width: { min: 480 },
  //   height: { min: 720 },
  //   aspectRatio: 0.6666666667,/
  facingMode: "user",
};

function VideoCall() {
  const router = useRouter();

  const onExit = () => {
    router.push(`/dashboard`);
  };

  const onRestart = () => {
    router.push(`/live-practice-session`);
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#0C090A", color: "white", padding: 2 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <VideoCameraFrontIcon style={{ fill: "#fff" }} />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: 1, color: "#FFF" }}>
            Mock Interview
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={15}
      >
        <Typography variant="h1" sx={{ color: "#FFF" }}>
          👋
        </Typography>
        <Typography variant="h2" sx={{ color: "#FFF" }}>
          Your Practice Session Ended Successfully!
        </Typography>
        <Typography variant="body1" sx={{ color: "#A1A1AA", mb: 1 }}>
          Your Feedback and Analysis will be ready in the next 3-5 minutes
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ color: "#A1A1AA", mt: 1 }}>
            Want to try again?
          </Typography>
          <Button
            size="large"
            variant="outlined"
            startIcon={<ExitToAppOutlined sx={{ fill: "#FFF" }} />}
            onClick={onExit}
            sx={{
              borderColor: "#FFF",
              color: "#FFF",
              "&:hover": {
                borderColor: "#58585C",
                color: "#58585C",
              },
              marginTop: 3,
              width: 330,
            }}
          >
            Exit
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "#2A93D5",
              "&:hover": {
                backgroundColor: "#00255A",
              },
            }}
            startIcon={<RestartAltRounded style={{ fill: "#FFF" }} />}
            onClick={onRestart}
          >
            Restart Session
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCall;
