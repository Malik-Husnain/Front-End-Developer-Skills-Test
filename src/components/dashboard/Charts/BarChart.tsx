
import {
  Box,
  useTheme,
} from "@mui/material";

// BarChart component (dummy visualization)
const BarChart = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: 200,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        px: 2,
      }}
    >
      {[60, 40, 25, 70, 35, 40, 60, 30, 20, 30].map((height, index) => (
        <Box
          key={index}
          sx={{
            height: `${height}%`,
            width: 10,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1,
          }}
        />
      ))}
    </Box>
  );
};
 export default BarChart;