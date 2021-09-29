import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Currencies from "../components/Currencies";
import News from "../components/News";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { readNum } from "../helper";
import { useGetCurrencyQuery } from "../services/currency";
import { showLoader, showToaster } from "../redux/layoutSlice";
import { STATUS_ERROR } from "../constants/layout";

const Home = () => {
  const dispatch = useDispatch();
  const { data, error, isFetching, isError } = useGetCurrencyQuery(4);

  const stats = data?.data?.stats;

  useEffect(() => {
    dispatch(showLoader(isFetching));
  }, [isFetching]);

  useEffect(() => {
    if (isError)
      dispatch(showToaster({ message: error, status: STATUS_ERROR }));
  }, [isError]);

  if (isFetching) return null;

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
          <Typography variant="h4">Popular Currencies</Typography>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid item xs={12}>
          <Currencies snippet />
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item>
          <Typography variant="h4">News</Typography>
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item xs={12}>
          <News snippet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
