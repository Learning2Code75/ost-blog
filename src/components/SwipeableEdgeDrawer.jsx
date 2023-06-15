import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SlMenu } from "react-icons/sl";
import { MdWork, MdSpaceDashboard } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import ToggleColorMode from "./ToggleColorMode";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const theme = useTheme();
  const { window } = props;

  const toggleDrawer = (newOpen) => () => {
    props.setOpenNav(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Box
          style={{
            position: "fixed",
            top: "0",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "3.4rem",
          }}
          sx={{
            bgcolor: "background.default",
          }}
        >
          <div>
            {/* <img
              src="https://www.osttalent.com/assets/img/logo3.jpg"
              alt="ost talent"
              width="100"
              height="50"
            /> */}
            <Typography
              style={{
                paddingLeft: "1.52rem",
                fontWeight: "bold",
              }}
            >
              OST Talent
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ToggleColorMode />
            <Button
              onClick={toggleDrawer(true)}
              style={{
                color: "#008cff",
              }}
            >
              <SlMenu
                style={{
                  fontSize: "1.4rem",
                }}
              />
            </Button>
          </div>
        </Box>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={props.openNav}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary", fontWeight: "600" }}>
            OST Placements Blog
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <List>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("/ost-blog");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MdSpaceDashboard
                    style={{
                      color: `${props.active === 0 ? "#008cff" : "#808080"}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <div
                    style={{
                      fontWeight: "600",
                      color: `${props.active === 0 ? "#008cff" : "#808080"}`,
                    }}
                  >
                    Dashboard
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("news-feed/");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BiNews
                    style={{
                      color: `${props.active === 1 ? "#008cff" : "#808080"}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <div
                    style={{
                      fontWeight: "600",
                      color: `${props.active === 1 ? "#008cff" : "#808080"}`,
                    }}
                  >
                    News Feed
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("upcoming-events/");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BsFillCalendarEventFill
                    style={{
                      color: `${props.active === 2 ? "#008cff" : "#808080"}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <div
                    style={{
                      fontWeight: "600",
                      color: `${props.active === 2 ? "#008cff" : "#808080"}`,
                    }}
                  >
                    Upcoming Event Updates
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("jobs/");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MdWork
                    style={{
                      color: `${props.active === 3 ? "#008cff" : "#808080"}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <div
                    style={{
                      fontWeight: "600",
                      color: `${props.active === 3 ? "#008cff" : "#808080"}`,
                    }}
                  >
                    Jobs
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          {/* <Skeleton variant="rectangular" height="100%" /> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
