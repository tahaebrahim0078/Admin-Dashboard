import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ title, subtitle, isDashboard = false }) => {
  const theme = useTheme();
  return (
    <div>
      <Box mb={isDashboard ? 2.5 : 4}>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body1"> Welcome to Your {subtitle}</Typography>
      </Box>
    </div>
  );
};

export default Header;
