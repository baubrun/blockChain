import React from "react";
import { Line } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
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
    <Grid container>
      <Grid item>
        <Typography>{coinName} Price Chart</Typography>
      </Grid>
      <Grid item>
        <Typography>Change: {coinHistory?.data?.change}%</Typography>
        <Typography>{`Current ${coinName} Price: $${currentPrice}`}</Typography>

        <Line data={data} options={options} />
      </Grid>
    </Grid>
  );
};

export default LineChart;
