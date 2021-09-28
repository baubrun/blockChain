import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HTMLReactParser from "html-react-parser";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const MediaCard = (props) => {
  const { title, description, image, redirect, provider, date } = props;

  return (
    <Card sx={{ maxWidth: 345, height: 400 }} elevation={5}>
      <CardMedia
        sx={{ objectFit: "contain", paddingTop: 2 }}
        component="img"
        height="100"
        image={image}
        alt={title}
      />
      <CardContent sx={{ textAlign: "center", height: 250 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title?.length > 25 ? `${title?.substring(0, 100)}...` : title}
        </Typography>
        {HTMLReactParser(description)}
      </CardContent>
      <CardActions>
        {provider?.[1] && <Avatar src={provider?.[1]} alt={provider?.[0]} />}
        <Box mx={2}>
          <Typography>{date}</Typography>
        </Box>
        <a
          href={redirect}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
