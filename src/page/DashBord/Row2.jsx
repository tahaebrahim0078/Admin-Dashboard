import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "../line/LineChart";
import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./Data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack mt={1.5} direction={"row"} flexWrap={"wrap"} gap={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,66
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 4 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <LineChart isDashBord={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",

          maxHeight: 380,
          minWidth: "280px",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            p={1.2}
            fontWeight={"bold"}
            color={theme.palette.secondary.main}
          >
            Recent Transaction
          </Typography>
        </Paper>

        {Transactions.map((bboo) => {
          return (
            <Paper
              // @ts-ignore
              key={bboo}
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{bboo.txId}</Typography>
                <Typography variant="body2">{bboo.user} </Typography>
              </Box>
              <Typography variant="body1">{bboo.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${bboo.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
