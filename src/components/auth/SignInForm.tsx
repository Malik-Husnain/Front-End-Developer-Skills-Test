import React, { useState, memo } from "react";
import {
  Box,
  Link,
  Card,
  Button,
  Switch,
  useTheme,
  TextField,
  Typography,
  IconButton,
  CardContent,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface SignInFormProps {
  onSignUp?: () => void;
}

const SignInForm: React.FC<SignInFormProps> = memo(({ onSignUp }) => {

  const theme = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    console.log("Form submitted:", formData);
    // Handle signin logic here
  };

  return (
    <Card
    component="section"
    aria-labelledby="signin-title"
    sx={{ maxWidth: 450, width: "100%", p: 1 }}
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
            variant="h5"
            component="h2"
            align="center"
            sx={{ mb: 3, fontWeight: 500, color: theme.palette.primary.main }}
            id="signin-title"
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: "text.secondary" }}
          >
            Enter your email and password to sign in
          </Typography>

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
            SIGN IN
          </Button>

          {/* Sign up link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" component="span">
              Don't have an account?{" "}
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={onSignUp}
              color="primary"
              underline="hover"
              sx={{ fontWeight: 500 }}
              aria-label="Create new account"
            >
              Sign up
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default SignInForm;
