import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Person,
  ArrowUpward,
  ArrowDownward,
  AttachMoney,
  ShoppingCart,
  People,
} from "@mui/icons-material";
import { blue, green, orange, red, purple, grey } from "@mui/material/colors";

interface StatItem {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
  color: string;
}

// Stat Card component
const StatCard = ({ stat }: { stat: StatItem }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: theme.shadows[1],
        flex: 1,
        minWidth: 250, 
        maxWidth: "100%", 
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {stat.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <Typography variant="h5" component="div" fontWeight="bold">
                {stat.value}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                  color: stat.positive ? "success.main" : "error.main",
                  fontSize: "0.875rem",
                }}
              >
                {stat.positive ? (
                  <ArrowUpward fontSize="inherit" />
                ) : (
                  <ArrowDownward fontSize="inherit" />
                )}
                <span>{stat.change}</span>
              </Box>
            </Box>
          </Box>
          <Avatar
            sx={{
              p: 1,
              color: stat.color,
              borderRadius: 2,
              bgcolor: alpha(stat.color, 0.1),
            }}
          >
            {stat.icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;
