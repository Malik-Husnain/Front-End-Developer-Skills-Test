import React from "react";
import {
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Large screens

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        zIndex: 10,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          gap: 2,
          display: "flex",
          flexWrap: isLargeScreen ? "nowrap" : "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary" component="p">
            © 2023. Made with Lorem for a better web.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Link href="#" color="text.secondary" underline="hover">
            <Typography variant="body2">About Us</Typography>
          </Link>
          <Link href="#" color="text.secondary" underline="hover">
            <Typography variant="body2">Privacy</Typography>
          </Link>
          <Link href="#" color="text.secondary" underline="hover">
            <Typography variant="body2">Blog</Typography>
          </Link>
          <Link href="#" color="text.secondary" underline="hover">
            <Typography variant="body2">License</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
