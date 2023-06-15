import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const DashboardCard = ({ data, setActive }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minWidth: 275 }} key={data.id}>
      <Card
        variant="outlined"
        onClick={() => {
          //   if (data.link === "news-feed/") {
          //   } else if (data.link === "upcoming-events/") {
          //   } else if (data.link === "jobs/") {
          //   }
          navigate(data.link);
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              fontSize: "1.2rem",
            }}
          >
            {data.title}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.desc}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: ".5rem 1.5rem 0",
          }}
        >
          <Typography
            sx={{ mb: 1.5, fontSize: "1rem" }}
            color="text.secondary"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <BiRightArrowAlt />
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default DashboardCard;
