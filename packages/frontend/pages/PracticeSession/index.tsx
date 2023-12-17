import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
// import VideoView from "@/components/PracticeSession/VideoView";
import { Box } from "@mui/material";

export default function PracticeSession() {
  return (
    <Stack spacing={1} style={{ alignContent: "center" }}>
      {/* For variant="text", adjust the height via font-size */}
      <Box sx={{ alignContent: "center" }}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />

        {/* <VideoView /> */}
      </Box>
    </Stack>
  );
}
