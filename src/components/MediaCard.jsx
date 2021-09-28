import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";

const MediaCard = (props) => {
  const { title, description, image, id } = props;
  return (
    <Card sx={{ maxWidth: 345 }} elevation={5}>
      <CardMedia
        sx={{ objectFit: "contain", paddingTop: 2 }}
        component="img"
        height="100"
        image={image}
        alt={title}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {HTMLReactParser(description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/currencies/${id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
