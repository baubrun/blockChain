import React from "react";
// import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import data from "../data/exchanges.json";
// import { useGetExchangesQuery } from "../services/currency";
// import Spinner from "../components/Spinner";

const Exchanges = () => {
  // const { data, isFetching } = useGetExchangesQuery("");
  // const exchangesList = data?.data?.exchanges;

  return (
    <Grid>
      {/* <Spinner isLoading={isFetching} size="default" /> */}

      <Grid container>
        <Grid item xs={3}>
          <Typography>Exchanges</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>24h Trade Volume</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Markets</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Change</Typography>
        </Grid>
      </Grid>
      {/* <Row>
        {exchangesList?.map((exchange, idx) => (
          <Col key={idx} span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row> */}
    </Grid>
  );
};

export default Exchanges;
