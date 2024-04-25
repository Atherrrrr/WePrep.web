import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar } from "@mui/material";
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

const videoConstraints = {
  //   width: { min: 480 },
  //   height: { min: 720 },
  //   aspectRatio: 0.6666666667,/
  facingMode: "user",
};

function VideoCall() {
  // State to manage camera and mic status
  const [cameraEnabled, setCameraEnabled] = React.useState(false);
  const [micEnabled, setMicEnabled] = React.useState(false);
  const router = useRouter();

  const onCancel = () => {
    router.push(`/dashboard`);
  };

  const onJoinSession = () => {
    router.push(`/live-practice-session/start`);
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#0C090A", color: "white", padding: 2 }}>
      <Webcam
        width={"100%"}
        height={"100%"}
        videoConstraints={videoConstraints}
        mirrored={true}
        audio={true}
      />
    </Box>
  );
}

export default VideoCall;
