import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

import Header from "../components/auth/Header";
import Footer from "../components/auth/Footer";
import SignupForm from "../components/auth/SignupForm";
import WaveBackground from "../components/auth/WaveBackground";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => navigate("/signin");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header */}
        <Header onSignInClick={handleSignIn} />
        
      {/* Wave Background with Welcome Text */}
      <WaveBackground>
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="body1">
              Use these awesome forms to login or create a new account for free.
            </Typography>
          </Box>
        </Container>
      </WaveBackground>

      {/* Signup Form */}
      <Container
        maxWidth="sm"
        sx={{
          mt: -6,
          mb: 8,
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SignupForm onSignIn={handleSignIn} />
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SignupPage;
