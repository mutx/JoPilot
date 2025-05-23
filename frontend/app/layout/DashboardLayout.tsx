// DashboardLayout.tsx – Renders the main application layout with responsive sidebar, topbar, and content area.

import { useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/MainContent";
import { useThemeState } from "../hooks/useThemeState";
import { useSidebarState } from "../hooks/useSidebarState";
import { TRANSITION_SPEED_FAST } from "app/theme/styleConstants";
import { NAV_ITEMS } from "app/components/Sidebar/NavItems";

export default function DashboardLayout() {
  const themeState = useThemeState();
  const { open, setOpen } = useSidebarState();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { appBarHeight, expandedSidebarWidth, collapsedSidebarWidth } = themeState.theme.layout;

  // Redirect to dashboard if at root path
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [location.pathname, navigate]);

  // Derive the current page title automatically from NAV_ITEMS
  const title =
    NAV_ITEMS.find((item) => item.route === location.pathname)?.label || "";
  
  // Update browser tab title automatically
  useEffect(() => {
    document.title = `JoPilot | ${title}`;
  }, [title]);
  
  return (
    <ThemeProvider theme={themeState.theme}>
      <Box sx={{ display: "flex", bgcolor: "background.default", color: "text.primary", minHeight: "100dvh", maxHeight: "100dvh" }}>
        
        <TopBar
          open={open}
          setOpen={setOpen}
          themeIcon={themeState.themeIcon}
          onThemeLeftClick={themeState.cycleThemeVariant}
          onThemeRightClick={(e) => { e.preventDefault(); themeState.toggleColorMode(); }}
          primaryContrast={themeState.theme.palette.primary.contrastText}
          topbarColor={themeState.theme.palette.primary.main}
          hamburgerWhite={themeState.hamburgerWhite}
          colorMode={themeState.colorMode}
          themeVariant={themeState.themeVariant}
        />
        
        <Sidebar 
          open={open}
          themeVariant={themeState.themeVariant}
          colorMode={themeState.colorMode}
        />
        
        <MainContent
          open={open}
          appBarHeight={appBarHeight}
          expandedSidebarWidth={expandedSidebarWidth}
          collapsedSidebarWidth={collapsedSidebarWidth}
        >          
          <Box sx={{
            pt: themeState.theme.spacing(2),
            px: open ? 1 : 4,
            transition: `padding ${TRANSITION_SPEED_FAST} ease`,
            height: "100%",
            maxHeight: "inherit",
          }}>
            <Outlet />
          </Box>
        </MainContent>
      </Box>
    </ThemeProvider>
  );
}
