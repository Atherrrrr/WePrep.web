import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Divider,
  Card,
  Grid,
} from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import ReplayIcon from "@mui/icons-material/Replay"; // Assuming 'repeat' icon means 'Replay'
import SkipNextIcon from "@mui/icons-material/SkipNext";

const videoConstraints = {
  facingMode: "user",
};

const questionsData = [
  {
    index: 1,
    text: "Given the requirement to scrape data from a website that employs measures like rate limiting and IP blocking to prevent scraping, walk me through your approach to designing a resilient and efficient scraping solution.",
  },
  {
    index: 2,
    text: "Imagine you're tasked with processing a large dataset containing a mix of text, images, and JSON data. Describe your strategy for cleaning, transforming, and structuring this data into a format suitable for machine learning tasks.",
  },
  {
    index: 3,
    text: "Let's say you need to build a web application for our AI team to filter and moderate scraped data. Demonstrate how you would design the user interface and core functionalities to facilitate efficient data review and labeling.",
  },
  {
    index: 4,
    text: "Explain the concept of object storage and its advantages compared to traditional relational databases, particularly in the context of storing and managing large volumes of unstructured data.",
  },
  {
    index: 5,
    text: "Considering the rapidly evolving field of AI, how do you stay updated on the latest technologies and trends in data engineering and software development?",
  },
];

function VideoCall() {
  // State to manage camera and mic status
  const [currentSpeaker, setCurrentSpeaker] = useState("John Doe | WePrep Interviewer");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questionsData[0]);

  const toggleSpeaker = () => {
    if (currentSpeaker === "Faaiz Khan | You") {
      setCurrentSpeaker("John Doe | WePrep Interviewer");
    } else {
      setCurrentSpeaker("Faaiz Khan | You");
    }
  };

  const onSkip = () => {
    setCurrentQuestion(questionsData[currentQuestion.index + 1]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const router = useRouter();

  const onEndSession = () => {
    router.push(`/live-practice-session/finished`);
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
          <Divider orientation="vertical" flexItem sx={{ mx: 2, backgroundColor: "grey" }} />
          <VolumeUpIcon sx={{ color: "#FFF" }} />
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            {currentSpeaker}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <Typography variant="h6" sx={{ color: "#FFF" }}>
              Live
            </Typography>
            <Typography variant="body2" sx={{ color: "#FFF" }}>
              {formatTime(timeElapsed)}
            </Typography>
          </Box>
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: "red",
              borderRadius: "50%",
              animation: "blink 1s infinite",
              marginLeft: 2,
            }}
          />
        </Toolbar>
      </AppBar>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Webcam
            audio={true}
            mirrored={true}
            videoConstraints={videoConstraints}
            style={{ width: "100%", height: "100%", borderRadius: "5" }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ width: "100%", flex: 1, marginBottom: 2 }}>
            <img
              src="/ai-interviewer.png"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }}
            />
          </Box>
          <Box sx={{ flex: 0, flexGrow: 1 }}>
            <Card
              sx={{ backgroundColor: "#FFF", color: "#00255A", padding: 2, borderRadius: "4px" }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#006FEE" }}>
                Question {currentQuestion.index}
              </Typography>
              <Typography variant="subtitle1">{currentQuestion.text}</Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<ReplayIcon />}
                  // sx={{ marginRight: 1, backgroundColor: "#E6F1FE", color: "#006FEE" }}
                >
                  Repeat
                </Button>
                <Button
                  variant="contained"
                  startIcon={<SkipNextIcon />}
                  // sx={{ backgroundColor: "#E6F1FE", color: "#006FEE" }}
                  onClick={onSkip}
                >
                  Skip
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <AppBar
        color="transparent"
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Button
          size="large"
          variant="contained"
          startIcon={<CancelIcon sx={{ fill: "#fff" }} />}
          onClick={onEndSession}
          sx={{
            backgroundColor: "#CC525F", // Custom red color for the button
            color: "#FFF", // Text color is white
            "&:hover": {
              backgroundColor: "#E06370", // Lighter red on hover
            },
            marginBottom: 2, // Margin from the bottom of the AppBar
          }}
        >
          End Session
        </Button>
      </AppBar>
    </Box>
  );
}

export default VideoCall;
