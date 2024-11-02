import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Dashbord = () => {
  return (
    <div>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Header title={"DASHBOARD"} subtitle={"Dashbord"} isDashboard={true} />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
          >
            <DownloadOutlined />
            Dawnload Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />

      <Row3 />
    </div>
  );
};

export default Dashbord;
