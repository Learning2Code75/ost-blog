import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { blogs } from "../../data/blogs";
import NewsFeedCard from "./NewsFeedCard";

const NewsFeed = () => {
  const [segment, setSegment] = React.useState("");

  const handleChange = (event) => {
    setSegment(event.target.value);
  };
  return (
    <div
      style={{
        padding: "0 1rem",
      }}
    >
      <h2>News Feed</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Segment</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={segment}
            label="Segment"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"nf-segment1"}>Segment 1</MenuItem>
            <MenuItem value={"nf-segment2"}>Segment 2</MenuItem>
            <MenuItem value={"nf-segment3"}>Segment 3</MenuItem>
            <MenuItem value={"nf-segment4"}>Segment 4</MenuItem>
            <MenuItem value={"nf-segment5"}>Segment 5</MenuItem>
          </Select>
        </FormControl>
      </div>
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
          {blogs
            ?.filter((b) => b.segment === "news-feed")
            ?.filter((b) => b.subSegment === segment || segment === "")
            ?.map((blog) => (
              <Grid item xs={12} md={5}>
                <NewsFeedCard data={blog} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default NewsFeed;
