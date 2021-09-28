import React from "react";
// import { useGetCurrencyQuery } from "../services/currency";
// import Spinner from "../components/Spinner";
// import { readNum } from "../helper";
// import Currencies from "../components/Currencies";
// import News from "../components/News";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Home = () => {
  //   const { data, error, isFetching } = useGetCurrencyQuery(4);

  //   const stats = data?.data?.stats;

  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography variant="h4">BlockChain Stats</Typography>
        </Grid>
      </Grid>
      {/* <Spinner isLoading={isFetching} size="default" />
      <Typography  level={2}>
        Block Chain Stats
      </Typography>
      <Row>
        <Col span={12}>
          <Typography data-testid="total-currencies" title="Total Currencies" value={stats?.total || 0} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market cap"
            value={readNum(stats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={readNum(stats?.totalMarkets)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={readNum(stats?.totalExchanges)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Popular currencies
        </Title>
      </div>
      <Currencies snippet />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Currency News
        </Title>
      </div>
      <News snippet /> */}
    </div>
  );
};

export default Home;
