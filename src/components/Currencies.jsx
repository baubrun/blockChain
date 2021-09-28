import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/coins.json";
// import { useGetCurrencyQuery } from "../services/currency";
import { readNum } from "../helper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MediaCard from "./MediaCard";

const Currencies = ({ snippet }) => {
  const viewCount = snippet ? 4 : 100;
  // const { data } = useGetCurrencyQuery(viewCount);
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

  return (
    <div style={{ position: "relative" }}>
      {/* {!snippet && (
        <div className="search">
          <Input
            placeholder="SEARCH"
            onChange={(evt) => setSearchTerm(evt.target.value.toLowerCase())}
          />
        </div>
      )} */}
      <Grid container spacing={2}>
        {currencies?.map((c, idx) => (
          <Grid item key={idx} xs={12} md={6} lg={3}>
            <MediaCard
              id={c.id}
              description={`<p>Price: ${readNum(c.price)}</p>\
                  <p>Market Cap: ${readNum(c.marketCap)}</p>\
                  <p>Price: ${readNum(c.change)}</p>`}
              image={c.iconUrl}
              title={`${c.rank}.${c.name}`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Currencies;
