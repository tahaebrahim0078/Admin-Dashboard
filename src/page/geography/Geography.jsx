import React from "react";
import GeographyChart from "./GeographyChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Geography = () => {
  return (
    <Box>
      <Header  title={"GEOGRAPHY CHART"} subtitle={"Geography chart"} />

      <GeographyChart />
    </Box>
  );
};

export default Geography;
