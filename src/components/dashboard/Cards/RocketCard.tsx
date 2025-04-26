import {
  Box,
  Card,
  Button,
  useTheme,
  Typography,
  CardContent,
} from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

const RocketCard = () => {
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
          backgroundColor: "#1A202C",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: theme.palette.common.white,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2, p: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Work with the Rockets
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Wealth creation is an evolutionarily recent positive-sum game.
          </Typography>
          <Typography variant="body2">
            It is all about who takes the opportunity first.
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ p: 3 }}>
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
export default RocketCard;
