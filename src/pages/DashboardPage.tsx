import React from "react";
import {
  Box,
  Card,
  Divider,
  useTheme,
  Typography,
  CardContent,
} from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";
import { Person, People, AttachMoney, ShoppingCart } from "@mui/icons-material";

import Footer from "../components/auth/Footer";
import StatCard from "../components/dashboard/Cards/StatCard";
import BarChart from "../components/dashboard/Charts/BarChart";
import ChakraCard from "../components/dashboard/Cards/ChakraCard";
import RocketCard from "../components/dashboard/Cards/RocketCard";
import UsersChart from "../components/dashboard/Charts/UsersChart";
import SalesChart from "../components/dashboard/Charts/SalesChart";
import ProjectsCard from "../components/dashboard/Cards/ProjectsCard";
import OverviewCard from "../components/dashboard/Cards/OverviewCard";

// Dummy data
const stats = [
  {
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    positive: true,
    icon: <AttachMoney />,
    color: blue[500],
  },
  {
    title: "Today's Users",
    value: "2,300",
    change: "+3%",
    positive: true,
    icon: <People />,
    color: green[500],
  },
  {
    title: "New Clients",
    value: "+3,052",
    change: "-14%",
    positive: false,
    icon: <Person />,
    color: orange[500],
  },
  {
    title: "Total Sales",
    value: "$173,000",
    change: "+8%",
    positive: true,
    icon: <ShoppingCart />,
    color: red[500],
  },
];

const DashboardPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexGrow: 1,
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      {/* Stats Row */}
      <Box
        maxWidth={"lg"}
        sx={{
          py: 2,
          gap: 2,
          width: "100%",
          display: "flex",
          overflow: "scroll",
          alignItems: "center",
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </Box>

      {/* Info Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, // Full width on small screens, 2 columns on larger screens
          gap: 3,
          mb: 4,
        }}
      >
        {/* Chakra Card */}
        <ChakraCard />

        {/* Rockets Card */}
        <RocketCard />
      </Box>

      {/* Charts Row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, // Full width on small screens, 2 columns on larger screens
          gap: 3,
          mb: 4,
        }}
      >
        {/* Bar Chart */}
        <Card sx={{ borderRadius: 2, boxShadow: theme.shadows[1] }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Active Users
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              color="success.main"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <span>(+23)</span>
              <Typography
                variant="body2"
                component="span"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                than last week
              </Typography>
            </Typography>
            <BarChart />
          </CardContent>
          <Divider />
          <UsersChart />
        </Card>

        {/* Sales Chart */}
        <SalesChart />
      </Box>

      {/* Projects and Orders */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, // Full width on small screens, 2 columns on larger screens
          gap: 3,
        }}
      >
        {/* Projects Table */}
        <ProjectsCard />

        {/* Orders Overview */}
        <OverviewCard />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default DashboardPage;
