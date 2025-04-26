import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: theme.palette.primary.main,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  padding: "8px 16px",
  borderRadius: 20,
  textTransform: "none",
}));

interface DownloadButtonProps extends Omit<ButtonProps, "variant" | "color"> {
  label?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label = "Free Download",
  ...rest
}) => {
  return (
    <StyledButton {...rest}>
      {label}
    </StyledButton>
  );
};

export default DownloadButton;
