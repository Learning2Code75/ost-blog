import { Grid } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";

const Home = ({ setActive }) => {
  const dashboardList = [
    {
      id: "1",
      title: "News Feed",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "news-feed/",
    },
    {
      id: "2",
      title: "Upcoming Event Updates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "upcoming-events/",
    },
    {
      id: "3",
      title: "Jobs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "jobs/",
    },
  ];

  return (
    <div>
      <Grid
        container
        gap={2}
        style={{
          padding: "1rem .5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dashboardList.map((card) => (
          <Grid item xs={12} md={5}>
            <DashboardCard data={card} setActive={setActive} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
