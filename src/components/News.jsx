import React, { useState, useEffect } from "react";
import newsDataJson from "../data/news.json";
import coinData from "../data/coins.json";
// import { useGetCurrencyQuery } from "../services/currency";
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import newsDefault from "../images/news.png";

const News = ({ snippet }) => {
  const [category, setCategory] = useState("cryptocurrency");
  // const {
  // data: newsData,
  // isFetching,
  // } = useGetNewsQuery({ category, count: snippet ? 10 : 100 });
  // const {data: coinData} = useGetNewsQuery({category: "cryptocurrency", count: snippet ? 10 : 100})
  const cd = coinData;
  const newsData = newsDataJson;

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
        {newsData?.value?.map((n, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <MediaCard
              description={
                n.description.length > 100
                  ? `${n.description.substring(0, 100)}...`
                  : n.description
              }
              image={n?.image?.thumbnail?.contentUrl || newsDefault}
              redirect={n.url}
              title={n.name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
