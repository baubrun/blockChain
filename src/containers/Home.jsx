import React from "react";
import data from "../data/coins.json";

// import { useGetCurrencyQuery } from "../services/currency";
// import Spinner from "../components/Spinner";
import { readNum } from "../helper";
import Currencies from "../components/Currencies";
import News from "../components/News";
// import News from "../components/News";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Home = () => {
  //   const { data, error, isFetching } = useGetCurrencyQuery(4);

  const stats = data?.data?.stats;

  return (
    <div>
      <Grid container mb={5}>
        <Grid item>
          <Typography variant="h4">BlockChain Fun Facts</Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 12 }}>
        <Grid item xs={6}>
          <Box>
            <Typography color="GrayText">Total Currencies</Typography>
            <Typography variant="h6">{readNum(stats?.total)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography color="GrayText">Total Market Cap</Typography>
            <Typography variant="h6">
              {readNum(stats?.totalMarketCap)}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box>
            <Typography color="GrayText">Total Markets</Typography>
            <Typography variant="h6">{readNum(stats?.totalMarkets)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography color="GrayText">Total Exchanges</Typography>
            <Typography variant="h6">
              {readNum(stats?.totalExchanges)}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid item>
          <Typography variant="h4">Poular Currencies</Typography>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid item>
          <Currencies snippet />
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item>
          <Typography variant="h4">News</Typography>
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item>
          <News />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
