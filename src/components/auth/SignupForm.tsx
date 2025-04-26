import {
  Box,
  Card,
  Link,
  Stack,
  Button,
  Switch,
  Divider,
  TextField,
  Typography,
  IconButton,
  CardContent,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import SocialLoginButton from "./SocialLoginButton";

interface SignupFormProps {
  onSignIn?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = memo(({ onSignIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Card
      sx={{ maxWidth: 450, width: "100%", p: 1 }}
      component="section"
      aria-labelledby="signup-title"
    >
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2 }}
          noValidate
          autoComplete="off"
        >
          <Typography
            variant="h6"
            component="h2"
            align="center"
            sx={{ mb: 3, fontWeight: 500 }}
            id="signup-title"
          >
            Register with
          </Typography>

          {/* Social login buttons */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            <SocialLoginButton
              provider="facebook"
              aria-label="Sign up with Facebook"
            />
            <SocialLoginButton
              provider="apple"
              aria-label="Sign up with Apple"
            />
            <SocialLoginButton
              provider="google"
              aria-label="Sign up with Google"
            />
          </Stack>

          <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="text.secondary">
              or
            </Typography>
          </Divider>

          {/* Name field */}
          <Typography
            variant="subtitle2"
            component="label"
            htmlFor="name"
            sx={{ mb: 1 }}
          >
            Name
          </Typography>
          <TextField
            fullWidth
            id="name"
            name="name"
            placeholder="Your full name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            size="small"
            sx={{ mb: 3 }}
            inputProps={{
              "aria-label": "Full name",
            }}
          />

          {/* Email field */}
          <Typography
            variant="subtitle2"
            component="label"
            htmlFor="email"
            sx={{ mb: 1 }}
          >
            Email
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            size="small"
            sx={{ mb: 3 }}
            inputProps={{
              "aria-label": "Email address",
            }}
          />

          {/* Password field */}
          <Typography
            variant="subtitle2"
            component="label"
            htmlFor="password"
            sx={{ mb: 1 }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            id="password"
            name="password"
            placeholder="Your password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            size="small"
            sx={{ mb: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={handleTogglePassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember me switch */}
          <FormControlLabel
            control={
              <Switch
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                name="rememberMe"
                size="small"
                color="primary"
                inputProps={{ "aria-label": "Remember me" }}
              />
            }
            label={<Typography variant="body2">Remember me</Typography>}
            sx={{ mb: 2 }}
          />

          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mb: 2,
              py: 1.5,
              color: "white",
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "none",
            }}
          >
            SIGN UP
          </Button>

          {/* Sign in link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" component="span">
              Already have an account?{" "}
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={onSignIn}
              color="primary"
              underline="hover"
              sx={{ fontWeight: 500 }}
              aria-label="Sign in to existing account"
            >
              Sign in
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default SignupForm;
