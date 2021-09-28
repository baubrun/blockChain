import React, { useState } from "react";
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

import data from "../data/coinDetail.json";
import coinHistory from "../data/coinHistory.json";
import {
  useGetCurrencyDetailsQuery,
  useGetCurrencyHistoryQuery,
} from "../services/currency";
import Spinner from "../components/Spinner";
import LineChart from "../components/LineChart";
import { readNum } from "../helper";

const CurrencyDetails = () => {
  const { coinId } = useParams();
  const [timeframe, setTimeframe] = useState("7d");
  // const { data, isFetching } = useGetCurrencyDetailsQuery(coinId);
  // const { data: coinHistory } = useGetCurrencyHistoryQuery({
  // coinId,
  // timeframe,
  // });
  const currencyDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

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

  return (
    <div>cd</div>
    // <Col className="coin-detail-container">
    //   <Spinner isLoading={isFetching} size="default" />
    //   <Col className="coin-heading-container">
    //     <Title level={2} className="coin-name">
    //       {data?.data?.coin?.name} ({data?.data?.coin.slug}) Price
    //     </Title>
    //     <p>
    //       {currencyDetails?.name} live price in US Dollar (USD). View value
    //       statistics, market cap and supply.
    //     </p>
    //   </Col>
    //   <Select
    //     defaultValue="7d"
    //     className="select-timeperiod"
    //     placeholder="Select Timeperiod"
    //     onChange={(value) => setTimeframe(value)}
    //   >
    //     {time.map((date, idx) => (
    //       <Option key={idx} value={date}>
    //         {date}
    //       </Option>
    //     ))}
    //   </Select>
    //   <LineChart
    //     coinHistory={coinHistory}
    //     currentPrice={readNum(currencyDetails?.price)}
    //     coinName={currencyDetails?.name}
    //   />
    //   <Col className="stats-container">
    //     <Col className="coin-value-statistics">
    //       <Col className="coin-value-statistics-heading">
    //         <Title level={3} className="coin-details-heading">
    //           {currencyDetails?.name} Value Statistics
    //         </Title>
    //         <p>
    //           An overview showing the statistics of {currencyDetails?.name},
    //           such as the base and quote currency, the rank, and trading volume.
    //         </p>
    //       </Col>
    //       {stats.map(({ icon, title, value }, idx) => (
    //         <Col key={idx} className="coin-stats">
    //           <Col className="coin-stats-name">
    //             <Text>{icon}</Text>
    //             <Text>{title}</Text>
    //           </Col>
    //           <Text className="stats">{value}</Text>
    //         </Col>
    //       ))}
    //     </Col>
    //     <Col className="other-stats-info">
    //       <Col className="coin-value-statistics-heading">
    //         <Title level={3} className="coin-details-heading">
    //           Other Stats Info
    //         </Title>
    //         <p>
    //           An overview showing the statistics of {currencyDetails?.name},
    //           such as the base and quote currency, the rank, and trading volume.
    //         </p>
    //       </Col>
    //       {genericStats.map(({ icon, title, value }, idx) => (
    //         <Col key={idx} className="coin-stats">
    //           <Col className="coin-stats-name">
    //             <Text>{icon}</Text>
    //             <Text>{title}</Text>
    //           </Col>
    //           <Text className="stats">{value}</Text>
    //         </Col>
    //       ))}
    //     </Col>
    //   </Col>
    //   <Col className="coin-desc-link">
    //     <Row className="coin-desc">
    //       <Title level={3} className="coin-details-heading">
    //         What is {currencyDetails?.name}?
    //       </Title>
    //       {HTMLReactParser(currencyDetails?.description || "")}
    //     </Row>
    //     <Col className="coin-links">
    //       <Title level={3} className="coin-details-heading">
    //         {currencyDetails?.name} Links
    //       </Title>
    //       {currencyDetails?.links?.map((link, idx) => (
    //         <Row className="coin-link" key={idx}>
    //           <Title level={5} className="link-name">
    //             {link.type}
    //           </Title>
    //           <a href={link.url} target="_blank" rel="noreferrer">
    //             {link.name}
    //           </a>
    //         </Row>
    //       ))}
    //     </Col>
    //   </Col>
    // </Col>
  );
};

export default CurrencyDetails;
