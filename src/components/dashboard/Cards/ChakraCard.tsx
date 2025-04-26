import {
  Box,
  Card,
  alpha,
  Button,
  Avatar,
  useTheme,
  Typography,
  CardContent,
} from "@mui/material";
import { Bolt, ArrowRightAlt } from "@mui/icons-material";

const ChakraCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: theme.shadows[1],
      }}
    >
      <Box
        sx={{
          p: 3,
          height: 150,
          backgroundColor: theme.palette.primary.main,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: theme.palette.common.white,
            zIndex: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: theme.palette.common.white,
              width: 60,
              height: 60,
              mb: 2,
              mx: "auto",
            }}
          >
            <Bolt
              sx={{ color: theme.palette.primary.main, fontSize: "2rem" }}
            />
          </Avatar>
          <Typography variant="h5" component="div" fontWeight="bold">
            chakra
          </Typography>
        </Box>

        {/* Gradient background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at center, ${alpha(
              theme.palette.common.white,
              0.2
            )} 0, transparent 70%)`,
            opacity: 0.8,
          }}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="overline"
          component="div"
          color="text.secondary"
          gutterBottom
        >
          Built by developers
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Purity UI Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          From colors, cards, typography to complex elements, you will find the
          full documentation.
        </Typography>
        <Button
          endIcon={<ArrowRightAlt />}
          variant="text"
          color="primary"
          sx={{ textTransform: "none", fontWeight: "normal", p: 0 }}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};
export default ChakraCard;
