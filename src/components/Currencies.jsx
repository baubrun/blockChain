import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { readNum } from "../helper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MediaCard from "./MediaCard";
import { Typography } from "@mui/material";
import { showLoader, showToaster } from "../redux/layoutSlice";
// import data from "../data/coins.json";
import { useGetCurrencyQuery } from "../services/currency";
import { STATUS_ERROR } from "../constants/layout";

const Currencies = ({ snippet }) => {
  const dispatch = useDispatch();
  const viewCount = snippet ? 6 : 100;
  const { data, isFetching, isError, error } = useGetCurrencyQuery(viewCount);
  const [currencies, setCurrencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const coins = data?.data?.coins;

  useEffect(() => {
    setCurrencies(coins);
    const found = coins?.filter((i) =>
      i.name.toLowerCase().includes(searchTerm)
    );
    setCurrencies(found);
  }, [searchTerm, coins]);

  useEffect(() => {
    dispatch(showLoader(isFetching));
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      dispatch(showToaster({ message: error, status: STATUS_ERROR }));
    }
  }, [isError]);

  if (isFetching) return null;

  return (
    <>
      {!snippet && (
        <Grid container justifyContent="center" alignItems="center" my={5}>
          <Grid item>
            <TextField
              placeholder="SEARCH"
              onChange={(evt) =>
                setSearchTerm(evt?.target?.value?.toLowerCase())
              }
              variant="outlined"
              sx={{ borderColor: "primary.light" }}
              value={searchTerm}
            />
          </Grid>
        </Grid>
      )}
      {currencies?.length < 1 && (
        <Grid container sx={{ left: "50%", top: "50%" }}>
          <Grid item>
            <Typography color="primary" variant="h5">
              CURRENCY NOT FOUND.
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container spacing={2}>
        {currencies?.map((c, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <MediaCard
              description={`<p>Price: ${readNum(c.price)}</p>\
                  <p>Market Cap: ${readNum(c.marketCap)}</p>\
                  <p>Price: ${readNum(c.change)}</p>`}
              image={c.iconUrl}
              redirect={`/currencies/${c.id}`}
              title={`${c.rank}.${c.name}`}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Currencies;
