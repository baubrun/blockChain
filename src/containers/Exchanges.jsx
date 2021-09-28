import React from "react";
import millify from "millify";
// import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import data from "../data/exchanges.json";
// import { useGetExchangesQuery } from "../services/currency";
// import Spinner from "../components/Spinner";

// const { Text } = Typography;
// const { Panel } = Collapse;

const Exchanges = () => {
  // const { data, isFetching } = useGetExchangesQuery("");
  // const exchangesList = data?.data?.exchanges;

  return (
    <>
      <div>Exchanges</div>
      {/* <Spinner isLoading={isFetching} size="default" /> */}

      {/* <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
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
    </>
  );
};

export default Exchanges;
