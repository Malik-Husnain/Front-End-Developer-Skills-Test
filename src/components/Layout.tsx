import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  Link,
  List,
  alpha,
  Paper,
  Button,
  Drawer,
  Divider,
  ListItem,
  useTheme,
  InputBase,
  Typography,
  IconButton,
  Breadcrumbs,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import {
  Menu,
  Search,
  Person,
  Receipt,
  Language,
  Settings,
  Dashboard,
  TableChart,
  NavigateNext,
  Notifications,
} from "@mui/icons-material";

const drawerWidth = 260;
const miniDrawerWidth = 72;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerCollapse = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <Box
      sx={{
        width: isDrawerOpen ? drawerWidth : miniDrawerWidth,
        backgroundColor: "#f8f9fa",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        p: 2,
        transition: "width 0.3s ease",
      }}
    >
      {/* Branding */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isDrawerOpen ? "space-between" : "center",
          mb: 4,
          pl: isDrawerOpen ? 1 : 0,
        }}
      >
        {isDrawerOpen && (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "bold", letterSpacing: 1 }}
              >
                VANDELAY INDUSTRIES
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerCollapse}>
              <Menu />
            </IconButton>
          </>
        )}
        {!isDrawerOpen && (
          <IconButton onClick={handleDrawerCollapse}>
            <Menu />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Navigation Links */}
      <List component="nav" sx={{ mb: 4 }}>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", gap: 1 }}
        >
          <ListItemButton
            onClick={() => navigate("/dashboard")}
            sx={{
              borderRadius: "8px",
              mb: 1,
              backgroundColor: isActive("/dashboard")
                ? "#ffffff"
                : "transparent",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
              justifyContent: isDrawerOpen ? "flex-start" : "center",
              color: isActive("/dashboard") ? "black" : "#a0aec0",
              gap: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: isActive("/dashboard") ? "white" : "#4fd1c6",
                backgroundColor: isActive("/dashboard") ? "#4fd1c6" : "white",
                borderRadius: "8px",
                p: 1,
              }}
            >
              <Dashboard />
            </ListItemIcon>
            {isDrawerOpen && <ListItemText primary="Dashboard" />}
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", gap: 1 }}
        >
          <ListItemButton
            onClick={() => navigate("/tables")}
            sx={{
              borderRadius: "8px",
              mb: 1,
              backgroundColor: isActive("/tables") ? "#ffffff" : "transparent",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
              justifyContent: isDrawerOpen ? "flex-start" : "center",
              color: isActive("/tables") ? "black" : "#a0aec0",
              gap: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: isActive("/tables") ? "white" : "#4fd1c6",
                backgroundColor: isActive("/tables") ? "#4fd1c6" : "white",
                borderRadius: "8px",
                p: 1,
              }}
            >
              <TableChart />
            </ListItemIcon>
            {isDrawerOpen && <ListItemText primary="Tables" />}
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", gap: 1 }}
        >
          <ListItemButton
            sx={{
              borderRadius: "8px",
              mb: 1,
              backgroundColor: isActive("/billing") ? "#ffffff" : "transparent",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
              justifyContent: isDrawerOpen ? "flex-start" : "center",
              color: isActive("/billing") ? "black" : "#a0aec0",
              gap: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: isActive("/billing") ? "white" : "#4fd1c6",
                backgroundColor: isActive("/billing") ? "#4fd1c6" : "white",
                borderRadius: "8px",
                p: 1,
              }}
            >
              <Receipt />
            </ListItemIcon>
            {isDrawerOpen && <ListItemText primary="Billing" />}
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", gap: 1 }}
        >
          <ListItemButton
            sx={{
              borderRadius: "8px",
              mb: 1,
              backgroundColor: isActive("/rtl") ? "#ffffff" : "transparent",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
              justifyContent: isDrawerOpen ? "flex-start" : "center",
              color: isActive("/rtl") ? "black" : "#a0aec0",
              gap: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: isActive("/rtl") ? "white" : "#4fd1c6",
                backgroundColor: isActive("/rtl") ? "#4fd1c6" : "white",
                borderRadius: "8px",
                p: 1,
              }}
            >
              <Language />
            </ListItemIcon>
            {isDrawerOpen && <ListItemText primary="RTL" />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f8f9fa", // Layout background
        height: "100vh", // Ensure full height
      }}
    >
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: {
            xs: miniDrawerWidth,
            sm: isDrawerOpen ? drawerWidth : miniDrawerWidth,
          },
          flexShrink: { sm: 0 },
        }}
        aria-label="navigation"
      >
        {/* Always Visible MiniDrawer */}
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: {
                xs: miniDrawerWidth,
                sm: isDrawerOpen ? drawerWidth : miniDrawerWidth,
              },
              transition: "width 0.3s ease",
              backgroundColor: "transparent",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          p: 3,
          flexGrow: 1,
          width: "100%",
          maxWidth: "100%",
          overflowY: "auto",
          boxSizing: "border-box",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

const Toolbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex" }, // Hide on small screens
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            color="inherit"
            href="#"
            onClick={() => navigate("/")}
          >
            Pages
          </Link>
          <Typography color="text.primary">Route</Typography>
        </Breadcrumbs>

        <Typography variant="h6" component="h1" gutterBottom sx={{ margin: 0 }}>
          Route
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        <Paper
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 180,
            borderRadius: 2,
            backgroundColor: theme.palette.common.white,
            boxShadow: "none",
          }}
        >
          <IconButton sx={{ p: "6px" }} aria-label="search">
            <Search fontSize="small" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: "0.875rem" }}
            placeholder="Type here..."
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>

        <Button
          size="small"
          variant="text"
          onClick={() => navigate("/signin")}
          startIcon={<Person fontSize="small" />}
          sx={{ textTransform: "none", color: "#728096" }}
        >
          Sign In
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Settings
            fontSize="small"
            sx={{ color: "#738196", cursor: "pointer" }}
            onClick={() => navigate("/profile")}
          />
          <Notifications
            fontSize="small"
            sx={{ color: "#738196", cursor: "pointer" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
