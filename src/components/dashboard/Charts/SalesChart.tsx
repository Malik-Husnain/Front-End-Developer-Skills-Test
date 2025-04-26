import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import LineChart from "./LineChart";

// BarChart component (dummy visualization)
const SalesChart = () => {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: 2, boxShadow: theme.shadows[1] }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Sales overview
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          color="success.main"
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
        >
          <span>(+5%) more</span>
          <Typography
            variant="body2"
            component="span"
            color="text.secondary"
            sx={{ ml: 1 }}
          >
            in 2021
          </Typography>
        </Typography>
        <LineChart />
      </CardContent>
    </Card>
  );
};
export default SalesChart;
