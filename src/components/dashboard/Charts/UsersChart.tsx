import { Box, Typography } from "@mui/material";

const UsersChart = () => {
  return (
    <Box
      sx={{
        p: 2,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Users
        </Typography>
        <Typography variant="h6" component="div" fontWeight="medium">
          32,984
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Clicks
        </Typography>
        <Typography variant="h6" component="div" fontWeight="medium">
          2.42m
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Sales
        </Typography>
        <Typography variant="h6" component="div" fontWeight="medium">
          2,400$
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Items
        </Typography>
        <Typography variant="h6" component="div" fontWeight="medium">
          320
        </Typography>
      </Box>
    </Box>
  );
};

export default UsersChart;
