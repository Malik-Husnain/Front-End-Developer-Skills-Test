import React from "react";
import {
  Box,
  Paper,
  Stack,
  Button,
  Avatar,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Footer from "../components/auth/Footer";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          mt: 2,
          mb: 4,
          flex: 1,
          padding: 0,
          paddingX: "0 !important",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          User Profile
        </Typography>

        <Paper
          sx={{
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              mb: 4,
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: "primary.main",
                fontSize: "2.5rem",
              }}
            >
              JD
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom>
                John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Member since January 2023
              </Typography>
              <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                Change Photo
              </Button>
            </Box>
          </Box>

          <Box component="form" noValidate>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Full Name"
                defaultValue="John Doe"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Email Address"
                defaultValue="john.doe@example.com"
                variant="outlined"
                type="email"
              />

              <TextField
                fullWidth
                label="Phone Number"
                defaultValue="+1 (555) 123-4567"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="Bio"
                defaultValue="I'm a software developer based in New York. I enjoy creating web applications using modern technologies."
                variant="outlined"
                multiline
                rows={4}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default ProfilePage;
