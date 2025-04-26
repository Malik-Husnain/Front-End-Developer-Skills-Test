import React from "react";
import {
  Box,
  Chip,
  Table,
  Paper,
  alpha,
  Avatar,
  useTheme,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  IconButton,
  Typography,
  TableContainer,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { CheckCircle } from "@mui/icons-material";
import { blue, green, red, purple, grey } from "@mui/material/colors";

// Data interfaces
interface Author {
  id: number;
  name: string;
  email: string;
  avatar: string;
  position: string;
  department: string;
  status: "Online" | "Offline";
  employmentDate: string;
}

interface Project {
  id: number;
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  budget: string;
  status: "Working" | "Canceled" | "Done";
  completion: number;
}

// Sample data
const authors: Author[] = [
  {
    id: 1,
    name: "Elaine Benes",
    email: "elaine@vandelay.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    position: "Manager",
    department: "Organization",
    status: "Online",
    employmentDate: "14/06/21",
  },
  {
    id: 2,
    name: "Sidra Holland",
    email: "sidra@vandelay.com",
    avatar: "https://i.pravatar.cc/150?img=29",
    position: "Programmer",
    department: "Developer",
    status: "Online",
    employmentDate: "14/06/21",
  },
  {
    id: 3,
    name: "Cosmo Kramer",
    email: "kramer@vandelay.com",
    avatar: "https://i.pravatar.cc/150?img=40",
    position: "Executive",
    department: "Projects",
    status: "Online",
    employmentDate: "14/06/21",
  },
  {
    id: 4,
    name: "Newman",
    email: "newman@usps.com",
    avatar: "https://i.pravatar.cc/150?img=70",
    position: "Manager",
    department: "Organization",
    status: "Online",
    employmentDate: "14/06/21",
  },
  {
    id: 5,
    name: "Frank Costanza",
    email: "frank@vandelay.com",
    avatar: "https://i.pravatar.cc/150?img=60",
    position: "Programmer",
    department: "Developer",
    status: "Offline",
    employmentDate: "14/06/21",
  },
  {
    id: 6,
    name: "Art Vandelay",
    email: "art.id@vandelay.com",
    avatar: "https://i.pravatar.cc/150?img=65",
    position: "Designer",
    department: "UI/UX Design",
    status: "Offline",
    employmentDate: "14/06/21",
  },
];

const projects: Project[] = [
  {
    id: 1,
    name: "Software Import/Export",
    icon: "📦",
    iconBg: purple[500],
    budget: "$14,000",
    status: "Working",
    completion: 60,
  },
  {
    id: 2,
    name: "Add Progress Track",
    icon: "🔼",
    iconBg: blue[500],
    budget: "$3,000",
    status: "Canceled",
    completion: 10,
  },
  {
    id: 3,
    name: "Fix Platform Errors",
    icon: "🧩",
    iconBg: green[500],
    budget: "Not set",
    status: "Done",
    completion: 100,
  },
  {
    id: 4,
    name: "Launch our Mobile App",
    icon: "📱",
    iconBg: green[500],
    budget: "$32,000",
    status: "Done",
    completion: 100,
  },
  {
    id: 5,
    name: "Add the New Pricing Page",
    icon: "💎",
    iconBg: blue[500],
    budget: "$400",
    status: "Working",
    completion: 25,
  },
];

const TablesPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Status badge styles
  const getStatusColor = (status: string) => {
    if (status === "Online" || status === "Done") return green[500];
    if (status === "Working") return blue[500];
    if (status === "Canceled") return red[500];
    return grey[400]; // Offline or other statuses
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 2,
      }}
    >
      {/* Projects Table */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" component="h2">
            Projects
          </Typography>
          <Chip
            label="30 done this month"
            size="small"
            icon={<CheckCircle style={{ fontSize: 16 }} />}
            variant="outlined"
            color="success"
            sx={{ ml: 2, borderRadius: 1 }}
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: 2, boxShadow: theme.shadows[1] }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead
              sx={{ backgroundColor: alpha(theme.palette.common.black, 0.02) }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.secondary,
                  }}
                >
                  COMPANIES
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.secondary,
                  }}
                >
                  BUDGET
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.secondary,
                  }}
                >
                  STATUS
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.text.secondary,
                  }}
                >
                  COMPLETION
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow
                  key={project.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar sx={{ bgcolor: project.iconBg, mr: 2 }}>
                        {project.icon}
                      </Avatar>
                      <Typography variant="body2" fontWeight="medium">
                        {project.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{project.budget}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color={
                            project.completion === 100
                              ? "success.main"
                              : undefined
                          }
                        >
                          {project.completion}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={project.completion}
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: alpha(
                            theme.palette.common.black,
                            0.1
                          ),
                          "& .MuiLinearProgress-bar": {
                            backgroundColor:
                              project.completion === 100
                                ? "success.main"
                                : project.status === "Canceled"
                                ? "error.main"
                                : theme.palette.primary.main,
                          },
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          pt: 2,
          color: theme.palette.text.secondary,
          fontSize: "0.875rem",
        }}
      >
        <Box>© 2023, Made with love for a better web</Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Privacy
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Blog
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            License
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TablesPage;
