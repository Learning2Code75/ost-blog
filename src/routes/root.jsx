import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SwipeableEdgeDrawer from "../components/SwipeableEdgeDrawer";
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
export default function Root() {
  const [openNav, setOpenNav] = useState(false);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setOpenNav(!openNav);
    if (path === "/") {
      setActive(0);
    } else if (path === "news-feed/") {
      setActive(1);
    } else if (path === "upcoming-events/") {
      setActive(2);
    } else if (path === "jobs/") {
      setActive(3);
    }
    navigate(path);
  };
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SwipeableEdgeDrawer
          handleNavClick={handleNavClick}
          openNav={openNav}
          setOpenNav={setOpenNav}
          active={active}
        />
        <div
          style={{
            marginTop: "3.4rem",
            marginBottom: "5rem",
          }}
        >
          <Outlet setActive={setActive} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
