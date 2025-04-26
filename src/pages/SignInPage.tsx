import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WaveBackground from "../components/auth/WaveBackground";
import Header from "../components/auth/Header";
import SignInForm from "../components/auth/SignInForm";
import Footer from "../components/auth/Footer";
import DownloadButton from "../components/auth/DownloadButton";
import BoltIcon from "@mui/icons-material/Bolt";

const SignInPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header with navigation */}
      <Header onSignUpClick={handleSignUp} background />

      <Box sx={{ display: "flex", flex: 1 }}>
        <Box
          sx={{
            py: 8,
            width: { sm: "100%", md: "50%" },
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <SignInForm onSignUp={handleSignUp} />
          </Container>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100vh",

            backgroundColor: theme.palette.primary.main,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(70% 70% at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)",
              opacity: 0.8,
            },
          }}
        >
          {/* Wave-like patterns */}
          <svg
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: 0.5,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1000"
          >
            <path
              fill="rgba(255,255,255,0.1)"
              d="M0,800 C100,780 300,750 500,750 C700,750 900,780 1000,800 L1000,1000 L0,1000 Z"
            />
            <path
              fill="rgba(255,255,255,0.1)"
              d="M0,600 C100,620 300,650 500,650 C700,650 900,620 1000,600 L1000,1000 L0,1000 Z"
            />
          </svg>

          {/* Chakra Logo */}
          <Box
            sx={{ position: "relative", textAlign: "center", color: "white" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <BoltIcon
                  sx={{ fontSize: 40, color: theme.palette.primary.main }}
                />
              </Box>
            </Box>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontWeight: 700, letterSpacing: 1 }}
            >
              chakra
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SignInPage;
