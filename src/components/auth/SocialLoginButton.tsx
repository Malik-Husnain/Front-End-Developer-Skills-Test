import React from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps, Box } from "@mui/material";
import { Apple, Facebook, Google } from "@mui/icons-material";

// Custom styled button for social logins
const StyledSocialButton = styled(Button)(({ theme }) => ({
  minWidth: "60px",
  minHeight: "60px",
  borderRadius: "8px",
  backgroundColor: "white",
  border: "1px solid #E0E0E0",
  color: "#333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  "&:hover": {
    backgroundColor: "#f5f5f5",
    border: "1px solid #E0E0E0",
  },
}));

export type SocialProvider = "facebook" | "apple" | "google";

interface SocialLoginButtonProps extends Omit<ButtonProps, "variant"> {
  provider: SocialProvider;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  ...rest
}) => {
  const getProviderIcon = () => {
    switch (provider) {
      case "facebook":
        return <Facebook color="primary" />;
      case "apple":
        return <Apple />;
      case "google":
        return <Google />;
      default:
        return null;
    }
  };

  const getAriaLabel = () =>
    `Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`;

  return (
    <StyledSocialButton
      variant="outlined"
      aria-label={getAriaLabel()}
      {...rest}
    >
      {getProviderIcon()}
    </StyledSocialButton>
  );
};

export default SocialLoginButton;
