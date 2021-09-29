import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";
import CelebrationIcon from "@mui/icons-material/Celebration";
import WineBarIcon from "@mui/icons-material/WineBar";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { showLoader, showToaster } from "../redux/layoutSlice";
import Dropdown from "../components/Dropdown";
import {
  useGetCurrencyDetailsQuery,
  useGetCurrencyHistoryQuery,
} from "../services/currency";
import LineChart from "../components/LineChart/LineChart";
import { readNum } from "../helper";
import { STATUS_ERROR } from "../constants/layout";

const CurrencyDetails = () => {
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const [timeframe, setTimeframe] = useState("7d");
  const {
    data: currency,
    isFetching,
    isError,
    error,
  } = useGetCurrencyDetailsQuery(coinId);
  const {
    data: coinHistory,
    isFetching: isFetching2,
    isError: isError2,
    error: error2,
  } = useGetCurrencyHistoryQuery({
    coinId,
    timeframe,
  });
  const currencyDetails = currency?.data?.coin;

  useEffect(() => {
    dispatch(showLoader(isFetching));
  }, [isFetching]);

  useEffect(() => {
    dispatch(showLoader(isFetching2));
  }, [isFetching2]);

  useEffect(() => {
    if (isError) {
      dispatch(showToaster({ message: error, status: STATUS_ERROR }));
    }
  }, [isError]);

  useEffect(() => {
    if (isError2) {
      dispatch(showToaster({ message: error2, status: STATUS_ERROR }));
    }
  }, [isError2]);

  const time = [
    { date: "24h" },
    { date: "7d" },
    { date: "30d" },
    { date: "1y" },
    { date: "5y" },
  ];
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${readNum(currencyDetails?.price)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    { title: "Rank", value: currencyDetails?.rank, icon: <WineBarIcon /> },
    {
      title: "24h Volume",
      value: `$ ${readNum(currencyDetails?.volume)}`,
      icon: <FlashOnOutlinedIcon />,
    },
    {
      title: "Market Cap",
      value: `$ ${readNum(currencyDetails?.marketCap)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${readNum(currencyDetails?.allTimeHigh?.price)}`,
      icon: <CelebrationIcon />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: currencyDetails?.numberOfMarkets,
      icon: <TimelineIcon />,
    },
    {
      title: "Number Of Exchanges",
      value: currencyDetails?.numberOfExchanges,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: "Approved Supply",
      value: currencyDetails?.approvedSupply ? (
        <CheckIcon />
      ) : (
        <StopCircleOutlinedIcon />
      ),
      icon: <PriorityHighIcon />,
    },
    {
      title: "Total Supply",
      value: `$ ${readNum(currencyDetails?.totalSupply)}`,
      icon: <PriorityHighIcon />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${readNum(currencyDetails?.circulatingSupply)}`,
      icon: <PriorityHighIcon />,
    },
  ];

  if (isFetching || isFetching2) return null;

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography
            variant="h2"
            color="secondary"
            sx={{ textTransform: "uppercase" }}
          >
            {`${currencyDetails?.name} (${currencyDetails?.slug}) Price`}
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            {`${currencyDetails?.name} live price in US Dollar (USD)`}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" my={5}>
        <Grid item xs={6}>
          <Dropdown
            onChange={setTimeframe}
            value={timeframe}
            items={time}
            menuVal="date"
            label="History"
          />
        </Grid>
      </Grid>
      {/* line chart */}
      <Box sx={{ width: "90vw" }}>
        <LineChart
          coinHistory={coinHistory}
          currentPrice={readNum(currencyDetails?.price)}
          coinName={currencyDetails?.name}
        />
      </Box>
      {/* stats row */}
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography color="secondary" variant="h5" mt={2}>
            {`${currencyDetails?.name} Value Statistics`}
          </Typography>
          <Typography>
            {`An overview showing the statistics of ${currencyDetails?.name}, \
          such as its base, quote currency, the rank, and trading volume.`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="secondary" variant="h5" mt={2}>
            Other Stats Info
          </Typography>
          <Typography>{`Other ${currencyDetails?.name} stats.`}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          {stats?.map((s, idx) => (
            <Grid
              container
              item
              key={idx}
              justifyContent="space-between"
              alignItems="center"
              my={2}
            >
              <Grid item>
                {s.icon} {s.title}
              </Grid>
              <Grid item xs={6}>
                {s.value}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={6}>
          {genericStats?.map((s, idx) => (
            <Grid
              container
              item
              key={idx}
              justifyContent="space-between"
              alignItems="center"
              my={2}
            >
              <Grid item>
                {s.icon} {s.title}
              </Grid>
              <Grid item xs={6}>
                {s.value}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* info row */}
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography color="secondary" variant="h5" mt={2}>
            {`What is ${currencyDetails?.name}?`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="secondary" variant="h5" mt={2}>
            {`${currencyDetails?.name} Links`}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          {HTMLReactParser(currencyDetails?.description || "")}
        </Grid>

        <Grid item xs={6}>
          {currencyDetails?.links?.map((link, idx) => (
            <Grid container item key={idx}>
              <Grid container item justifyContent="space-evenly">
                <Grid item xs={6} sx={{ marginTop: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ textTransform: "capitalize" }}
                    color="primary"
                  >
                    {link.type}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: 5 }}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="h5" color="secondary">
                      {link.name}
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CurrencyDetails;
