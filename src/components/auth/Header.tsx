import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Menu,
  Button,
  MenuItem,
  useTheme,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Key,
  Login,
  Person,
  Business,
  Dashboard,
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";

import DownloadButton from "./DownloadButton";

interface HeaderProps {
  background?: boolean;
  onSignUpClick?: () => void;
  onSignInClick?: () => void;
  onProfileClick?: () => void;
  onDashboardClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onSignUpClick,
  onSignInClick,
  onProfileClick,
  onDashboardClick,
  background = false,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDashboardClick = () => {
    handleMenuClose();
    if (onDashboardClick) {
      onDashboardClick();
    } else {
      navigate("/dashboard");
    }
  };

  const handleProfileClick = () => {
    handleMenuClose();
    if (onProfileClick) {
      onProfileClick();
    } else {
      navigate("/profile");
    }
  };

  const handleSignUpClick = () => {
    handleMenuClose();
    if (onSignUpClick) {
      onSignUpClick();
    } else {
      navigate("/signup");
    }
  };

  const handleSignInClick = () => {
    handleMenuClose();
    if (onSignInClick) {
      onSignInClick();
    } else {
      navigate("/signin");
    }
  };

  const iconAndTextColor = background ? "#2D3748" : "white";

  return (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: "16px 0",
        color: iconAndTextColor,
        backgroundColor: background ? "#FFFFFFD1" : "#45dac9",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {/* Branding */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Business sx={{ mr: 1, color: iconAndTextColor }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1,
                color: iconAndTextColor,
              }}
            >
              VANDELAY INDUSTRIES
            </Typography>
          </Box>

          {/* Navigation */}
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                sx={{ ml: 2, color: iconAndTextColor }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleDashboardClick}>
                  <Dashboard
                    fontSize="small"
                    sx={{ mr: 1, color: "#2D3748" }}
                  />
                  Dashboard
                </MenuItem>
                <MenuItem onClick={handleProfileClick}>
                  <Person fontSize="small" sx={{ mr: 1, color: "#2D3748" }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleSignUpClick}>
                  <AccountCircle
                    fontSize="small"
                    sx={{ mr: 1, color: "#2D3748" }}
                  />
                  Sign Up
                </MenuItem>
                <MenuItem onClick={handleSignInClick}>
                  <Key fontSize="small" sx={{ mr: 1, color: "#2D3748" }} />
                  Sign In
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "nowrap",
                justifyContent: "flex-end",
              }}
            >
              <Button
                size="small"
                color="inherit"
                sx={{ opacity: 0.9, color: iconAndTextColor, padding: 2 }}
                onClick={handleDashboardClick}
                startIcon={
                  <Dashboard
                    fontSize="small"
                    sx={{ color: iconAndTextColor }}
                  />
                }
              >
                Dashboard
              </Button>

              <Button
                color="inherit"
                size="small"
                sx={{ opacity: 0.9, color: iconAndTextColor, padding: 2 }}
                onClick={handleProfileClick}
                startIcon={
                  <Person fontSize="small" sx={{ color: iconAndTextColor }} />
                }
              >
                Profile
              </Button>

              <Button
                color="inherit"
                size="small"
                sx={{
                  opacity: 0.9,
                  fontWeight:
                    location.pathname === "/signup" ? "bold" : "normal",
                  color: iconAndTextColor,
                  padding: 2,
                }}
                onClick={handleSignUpClick}
                startIcon={
                  <AccountCircle
                    fontSize="small"
                    sx={{ color: iconAndTextColor }}
                  />
                }
              >
                Sign Up
              </Button>

              <Button
                color="inherit"
                size="small"
                sx={{
                  opacity: 0.9,
                  fontWeight:
                    location.pathname === "/signin" ? "bold" : "normal",
                  color: iconAndTextColor,
                  padding: 2,
                }}
                onClick={handleSignInClick}
                startIcon={
                  <Key fontSize="small" sx={{ color: iconAndTextColor }} />
                }
              >
                Sign In
              </Button>
            </Box>
          )}

          {isMediumOrLarger && (
            <Box sx={{ ml: 2 }}>
              <DownloadButton
                sx={{
                  backgroundColor: background ? "#2D3748" : "white",
                  color: background ? "white" : "#2D3748",
                  "&:hover": {
                    backgroundColor: background ? "#1A202C" : "#E2E8F0",
                    padding: 2,
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
