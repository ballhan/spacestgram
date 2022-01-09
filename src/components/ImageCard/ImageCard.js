import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ImageCard = (props) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          alt={props.imageData.title}
          image={props.imageData.url}
        />

        <CardContent>
          <Typography gutterBottom variant="body1">
            {props.imageData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.imageData.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
