import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { useRouter } from "next/router";

interface PracticeSessionModalProps {
  open: boolean;
  onClose: () => void;
  sessionType: string;
}

function renderSelect(
  label: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  options: { value: string; label: string }[]
) {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={(e) => setValue(e.target.value as string)}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const StartPracticeSessionModel: React.FC<PracticeSessionModalProps> = ({
  open,
  onClose,
  sessionType,
}) => {
  // State for form fields
  const [practiceSetId, setPracticeSetId] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [interviewDuration, setInterviewDuration] = useState("");
  const [questionMode, setQuestionMode] = useState("");
  const [interviewTone, setInterviewTone] = useState("");
  const [resume, setResume] = useState("");
  const router = useRouter();

  const interviewTypeOptions = [
    { value: "behavioral", label: "Behavioral/HR Interview" },
    { value: "technical", label: "Technical Interview" },
    { value: "conversational", label: "Conversational Interview" },
    { value: "stress", label: "Stress Interview" },
  ];

  const interviewDurationOptions = [
    { value: "short", label: "Short (2-3 Questions)" },
    { value: "medium", label: "Medium (5-6 Questions)" },
    { value: "long", label: "Long (8-10 Questions)" },
  ];

  const questionModeOptions = [
    { value: "unseen", label: "Unseen" },
    { value: "predefined", label: "Predefined" },
    { value: "mixed", label: "Mixed" },
  ];

  const interviewToneOptions = [
    { value: "friendly", label: "Friendly" },
    { value: "neutral", label: "Neutral" },
    { value: "hostile", label: "Hostile" },
  ];

  const resumeOptions = [
    { value: "resume1", label: "JohnDoe_Resume.pdf" },
    { value: "resume2", label: "JaneDoe_CV.pdf" },
  ];

  const onSubmit = () => {
    onClose();
    router.push(`/live-practice-session`);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Start New {sessionType}
        </Typography>
        <FormGroup>
          <TextField
            label="Practice Set ID:"
            variant="outlined"
            margin="normal"
            fullWidth
            value={practiceSetId}
            onChange={(e) => setPracticeSetId(e.target.value)}
          />
          <TextField
            label="Job Title"
            variant="outlined"
            margin="normal"
            fullWidth
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <TextareaAutosize
            minRows={3}
            placeholder="Job Description"
            style={{ width: "100%", padding: 8 }}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          {renderSelect("Interview Type", interviewType, setInterviewType, interviewTypeOptions)}
          {renderSelect(
            "Interview Duration",
            interviewDuration,
            setInterviewDuration,
            interviewDurationOptions
          )}
          {renderSelect("Question Mode", questionMode, setQuestionMode, questionModeOptions)}
          {renderSelect("Interview Tone", interviewTone, setInterviewTone, interviewToneOptions)}
          {renderSelect("Resume", resume, setResume, resumeOptions)}
        </FormGroup>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSubmit}>
            Start
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default StartPracticeSessionModel;
