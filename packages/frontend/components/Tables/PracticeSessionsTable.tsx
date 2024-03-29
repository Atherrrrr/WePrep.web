// PracticeSessionsTable.tsx
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Tooltip,
  IconButton,
  Chip,
  useTheme,
  CardMedia,
  CardContent,
  Card,
  Avatar,
  Box,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { circularProgressClasses } from "@mui/material/CircularProgress";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

interface SessionData {
  name: string;
  role: string;
  date: string;
  avgScore: number;
  status: string;
  duration: string;
}

interface PracticeSessionsTableProps {
  data: SessionData[];
}

const PracticeSessionsTable: React.FC<PracticeSessionsTableProps> = ({ data }) => {
  // Function to render action buttons
  const theme = useTheme();

  const renderActions = () => (
    <>
      <Tooltip title="Edit" placement="top" arrow>
        <IconButton onClick={() => console.log("Edit")}>
          <EditOutlinedIcon sx={{ fill: "#006FEE" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="top" arrow>
        <IconButton onClick={() => console.log("Delete")}>
          <DeleteOutlinedIcon sx={{ fill: "#EE0000" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="View" placement="top" arrow>
        <IconButton onClick={() => console.log("View")}>
          <VisibilityOutlinedIcon sx={{ fill: "#17C964" }} />
        </IconButton>
      </Tooltip>
    </>
  );

  const getColorForProgressScore = (score: number): string => {
    if (score >= 80) return "#17C964";
    if (score >= 60) return "#C5E866";
    if (score >= 40) return "#F5A524";
    return "#F31260";
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 830 }}>
          <Table stickyHeader aria-label="practice sessions table">
            <TableHead>
              <TableRow>
                {/* Apply a grey background to header cells */}
                <TableCell sx={{ bgcolor: theme.palette.info.main }}></TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Name</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Role</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Date</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }} align="center">
                  Avg Score
                </TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Status</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((session, index) => (
                <TableRow
                  hover
                  key={index}
                  sx={{ "& > *": { bgcolor: index % 2 === 0 ? theme.palette.grey[100] : "white" } }}
                >
                  {/* Apply conditional styling to table row cells */}
                  <TableCell>
                    <Box sx={{ position: "relative", width: 75, height: 75 }}>
                      <Avatar
                        variant="square"
                        src={"/thumbnail2.png"} // Ideally, you would use session.imgUrl or a relevant image URL
                        alt={session.name} // Ideally, you would use session.name
                        sx={{ width: "100%", height: "100%" }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          bgcolor: "rgba(0, 0, 0, 0.5)", // Translucent black background
                          color: "white",
                          px: 0.5, // Padding on the sides
                          py: 0.25, // Padding on the top and bottom
                          fontSize: "0.75rem", // Smaller font size for the duration text
                          borderRadius: "0 4px 0 0", // Optional: Rounded top-right corner
                        }}
                      >
                        {session.duration}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{session.name}</TableCell>
                  <TableCell>{session.role}</TableCell>
                  <TableCell>{session.date}</TableCell>
                  <TableCell align="center">
                    <CircularProgress
                      variant="determinate"
                      value={session.avgScore}
                      size={24}
                      sx={{
                        borderRadius: "50%",
                        transform: "rotate(-90deg)",
                        [`& .${circularProgressClasses.circle}`]: {
                          strokeLinecap: "round",
                          stroke: getColorForProgressScore(session.avgScore), // Dynamic color for the progress bar
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ display: "inline", ml: 1 }}
                    >{`${session.avgScore}%`}</Typography>
                  </TableCell>
                  <TableCell>
                    {session.status === "Processing" ? (
                      <Chip
                        sx={{
                          backgroundColor: "#E6F1FE",
                          color: "white",
                          border: 2,
                          borderBlockColor: "#006FEE",
                        }} // Set background color and text color
                        // size="small"
                        icon={<AutorenewOutlinedIcon sx={{ fill: "#006FEE" }} />}
                        label={session.status}
                      />
                    ) : (
                      <Chip
                        sx={{
                          backgroundColor: "#F6FFED",
                          fill: "#0E793C",
                          border: 2,
                          borderBlockColor: "#0E793C",
                        }} // Set background color and text color
                        // size="small"
                        icon={<CheckCircleOutlineOutlinedIcon sx={{ fill: "#0E793C" }} />}
                        label={session.status}
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">{renderActions()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default PracticeSessionsTable;
