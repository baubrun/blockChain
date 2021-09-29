import React from "react";
import { Line } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { randomColor } from "./lineColors";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  coinHistory?.data?.history?.forEach((c) => {
    coinPrice.push(c.price);
    coinTimestamp.push(new Date(c.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: randomColor(),
        borderColor: randomColor(),
        pointStyle: "rect",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Grid container justifyContent="space-evenly" alignItems="center" my={2}>
        <Grid item>
          <Typography variant="h6">{coinName} Price Chart</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{`Change: ${
            coinHistory?.data?.change || 0
          }%`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{`Current ${coinName} Price: $${currentPrice}`}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: "60vw", margin: "auto" }}>
        <Line data={data} options={options} />
      </Box>
    </>
  );
};

export default LineChart;
