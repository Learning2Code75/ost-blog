import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
const NewsFeedCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog
        variant="outlined"
        fullWidth={true}
        fullScreen={true}
        open={open}
        onClose={(e, r) => {
          if (r === "backdropClick") {
            setOpen(!open);
          } else {
            setOpen(!open);
          }
        }}
        scroll={"body"}
      >
        <div
          style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div onClick={() => setOpen(false)}>
              <RxCrossCircled
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              background: `url(${data?.imgUrl})`,
              backgroundSize: "cover",
              borderRadius: "1rem",
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.4)",
                borderRadius: ".8rem",
                padding: ".4rem .6rem",
                color: "white",
              }}
            >
              <h1>{data?.title}</h1>
              <h6
                style={{
                  fontSize: "1.1rem",
                }}
              >
                {data?.desc}
              </h6>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  color="text.secondary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: ".8rem",
                    borderRadius: "1.4rem",
                    border: "1px solid lightgrey",
                    padding: ".1rem .5rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  {data?.segment}
                </div>
                <div
                  color="text.secondary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: ".8rem",
                    borderRadius: "1.4rem",
                    border: "1px solid lightgrey",
                    padding: ".1rem .5rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  {data?.subSegment}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
            }}
          >
            {data?.blogPage?.map((bp) => {
              if (bp.type === "h2") {
                return <h2>{bp.content}</h2>;
              } else if (bp.type === "h4") {
                return <h4>{bp.content}</h4>;
              } else if (bp.type === "h5") {
                return <h5>{bp.content}</h5>;
              } else if (bp.type === "p") {
                return <p>{bp.content}</p>;
              } else if (bp.type === "li") {
                return <li style={{ marginLeft: "1rem" }}>{bp.content}</li>;
              } else if (bp.type === "a") {
                return (
                  <a
                    target="__blank"
                    style={{ color: "cyan" }}
                    href={bp.content}
                  >
                    {bp.content}
                  </a>
                );
              } else if (bp.type === "img") {
                return (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "1rem",
                        backgroundColor: "rgb(0,0,0)",
                        opacity: "75%",
                        marginTop: "1rem",
                      }}
                      src={bp?.content}
                      alt={bp?.type}
                      //   height="300"
                      //   width="300"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Dialog>
      <Box sx={{ minWidth: 275 }} key={data.id}>
        <Card
          variant="outlined"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(true)}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={data?.imgUrl}
            title="green iguana"
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "1.2rem",
              }}
            >
              {data?.title}
            </Typography>

            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data?.desc}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: ".5rem 1.5rem ",
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
                fontSize: ".8rem",
                borderRadius: "1.4rem",
                border: "1px solid lightgrey",
                padding: ".1rem .5rem",
              }}
            >
              {data?.subSegment}
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default NewsFeedCard;
