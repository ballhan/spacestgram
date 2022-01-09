import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ImageCard = (props) => {
  const [like, setLike] = useState(false);
  const [fillColor, setFillColor] = useState("#999999");

  const clickHeart = () => {
    if (like) {
      setLike(false);
      setFillColor("#999999");
    } else {
      setLike(true);
      setFillColor("#ED4956");
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          alt={props.imageData.title}
          image={props.imageData.url}
        />

        <CardContent>
          <div>
            <svg
              onClick={clickHeart}
              fill={fillColor}
              height="24"
              viewBox="0 0 48 48"
              width="22"
            >
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          </div>

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
