import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import newsDefault from "../images/news.png";
import moment from "moment";
import { showLoader, showToaster } from "../redux/layoutSlice";
import { useGetNewsQuery } from "../services/news";
import { useGetCurrencyQuery } from "../services/currency";
import Dropdown from "./Dropdown";
import { STATUS_ERROR } from "../constants/layout";

const News = ({ snippet }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("cryptocurrency");
  const viewCount = snippet ? 4 : 100;
  const {
    data: newsData,
    isFetching,
    isError,
    error,
  } = useGetNewsQuery({
    category,
    count: viewCount,
  });
  const { data: coinData } = useGetCurrencyQuery(viewCount);

  useEffect(() => {
    dispatch(showLoader(isFetching));
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      dispatch(showToaster({ message: error, status: STATUS_ERROR }));
    }
  }, [isError]);

  return (
    <>
      {!snippet && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          my={5}
          sx={{ width: "100vw" }}
        >
          <Grid item xs={4}>
            <Dropdown
              onChange={setCategory}
              value={category}
              items={coinData?.data?.coins}
              menuVal="name"
              label="Category"
            />
          </Grid>
        </Grid>
      )}
      <Grid container spacing={2}>
        {newsData?.value?.map((n, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <MediaCard
              description={
                n.description.length > 100
                  ? `${n.description.substring(0, 100)}...`
                  : n.description
              }
              date={moment(n?.datePublished).startOf("seconds").fromNow()}
              image={n?.image?.thumbnail?.contentUrl || newsDefault}
              redirect={n?.url}
              provider={[
                n.provider[0]?.name,
                n.provider[0]?.image?.thumbnail?.contentUrl || null,
              ]}
              title={n.name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default News;
