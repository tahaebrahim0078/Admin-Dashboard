import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";


const data = [
  {
    id: "japan",
    color: "hsl(143, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 166,
      },
      {
        x: "helicopter",
        y: 69,
      },
      {
        x: "boat",
        y: 63,
      },
      {
        x: "train",
        y: 192,
      },
      {
        x: "subway",
        y: 145,
      },
      {
        x: "bus",
        y: 24,
      },
      {
        x: "car",
        y: 237,
      },
      {
        x: "moto",
        y: 19,
      },
      {
        x: "bicycle",
        y: 24,
      },
      {
        x: "horse",
        y: 279,
      },
      {
        x: "skateboard",
        y: 43,
      },
      {
        x: "others",
        y: 189,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(276, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 151,
      },
      {
        x: "helicopter",
        y: 232,
      },
      {
        x: "boat",
        y: 298,
      },
      {
        x: "train",
        y: 87,
      },
      {
        x: "subway",
        y: 213,
      },
      {
        x: "bus",
        y: 87,
      },
      {
        x: "car",
        y: 142,
      },
      {
        x: "moto",
        y: 277,
      },
      {
        x: "bicycle",
        y: 32,
      },
      {
        x: "horse",
        y: 166,
      },
      {
        x: "skateboard",
        y: 122,
      },
      {
        x: "others",
        y: 237,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(173, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 266,
      },
      {
        x: "helicopter",
        y: 266,
      },
      {
        x: "boat",
        y: 245,
      },
      {
        x: "train",
        y: 139,
      },
      {
        x: "subway",
        y: 57,
      },
      {
        x: "bus",
        y: 218,
      },
      {
        x: "car",
        y: 51,
      },
      {
        x: "moto",
        y: 155,
      },
      {
        x: "bicycle",
        y: 190,
      },
      {
        x: "horse",
        y: 10,
      },
      {
        x: "skateboard",
        y: 64,
      },
      {
        x: "others",
        y: 69,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(123, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 34,
      },
      {
        x: "helicopter",
        y: 258,
      },
      {
        x: "boat",
        y: 182,
      },
      {
        x: "train",
        y: 265,
      },
      {
        x: "subway",
        y: 92,
      },
      {
        x: "bus",
        y: 187,
      },
      {
        x: "car",
        y: 0,
      },
      {
        x: "moto",
        y: 280,
      },
      {
        x: "bicycle",
        y: 223,
      },
      {
        x: "horse",
        y: 268,
      },
      {
        x: "skateboard",
        y: 189,
      },
      {
        x: "others",
        y: 194,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(115, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 244,
      },
      {
        x: "helicopter",
        y: 252,
      },
      {
        x: "boat",
        y: 81,
      },
      {
        x: "train",
        y: 106,
      },
      {
        x: "subway",
        y: 76,
      },
      {
        x: "bus",
        y: 234,
      },
      {
        x: "car",
        y: 214,
      },
      {
        x: "moto",
        y: 264,
      },
      {
        x: "bicycle",
        y: 276,
      },
      {
        x: "horse",
        y: 98,
      },
      {
        x: "skateboard",
        y: 292,
      },
      {
        x: "others",
        y: 167,
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const LineChart = ({isDashBord = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height:  isDashBord ?  "280px"  : "75vh"  }}>
      

      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: "white",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashBord ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashBord ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: theme.palette.text.primary,
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: theme.palette.text.primary,
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
