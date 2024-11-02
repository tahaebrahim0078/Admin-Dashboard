import { Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./Data";

const Row1 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      flexWrap={"wrap"}
      gap={1}
    >
      <Card
              icon={<EmailIcon
                  sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
              title={"12,361"}
              suptitle={"Emails Sent"}
              percent={"+14%"}
              data={data1} scheme={"nivo"}      />

      <Card
              icon={<PointOfSaleIcon
                  sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
              title={"431,225"}
              suptitle={"Sales obtained"}
              percent={"+21%"}
              data={data2} scheme={"category10"}      />

      <Card
              icon={<PersonAddIcon
                  sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
              title={"32,441"}
              suptitle={"New Clients"}
              percent={"+5%"}
              data={data3} scheme={"accent"}      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        suptitle={"Traffic Received"}
        percent={"+43%"}
        data={data4}
        scheme={"dark2"} 
      />
    </Stack>
  );
};

export default Row1;
