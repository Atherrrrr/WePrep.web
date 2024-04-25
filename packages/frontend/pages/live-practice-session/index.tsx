import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar } from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { useRouter } from "next/router";

function VideoCall() {
  // State to manage camera and mic status
  const [cameraEnabled, setCameraEnabled] = React.useState(false);
  const [micEnabled, setMicEnabled] = React.useState(false);
  const router = useRouter();

  const onCancel = () => {
    router.push(`/dashboard`);
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "black", color: "white", padding: 4 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <VideoCameraFrontIcon style={{ fill: "#fff" }} />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: 1, color: "#FFF" }}>
            Live Session
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Typography variant="h2" sx={{ color: "#FFF" }}>
          Get Started
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 1, color: "#A1A1AA" }}>
          Setup your audio and video before joining
        </Typography>

        {cameraEnabled ? (
          <Box sx={{ width: 300, height: 200, backgroundColor: "gray", marginTop: 2 }} />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 2,
              backgroundColor: "#A1A1AA",
            }}
          >
            <Avatar sx={{ width: 56, height: 56 }} />
            <Typography variant="subtitle2" sx={{ marginTop: 1, color: "#FFF" }}>
              Username
            </Typography>
          </Box>
        )}

        <Box sx={{ marginTop: 2 }}>
          <IconButton onClick={() => setMicEnabled(!micEnabled)} color="inherit">
            {micEnabled ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
          <IconButton onClick={() => setCameraEnabled(!cameraEnabled)} color="inherit">
            {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
          </IconButton>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary">
            Join Session
          </Button>
          <Button variant="outlined" color="warning" sx={{ marginLeft: 2 }} onClick={onCancel}>
            Cancel Session
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCall;
