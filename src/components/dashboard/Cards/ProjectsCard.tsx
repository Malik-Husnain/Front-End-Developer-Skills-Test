import {
  Box,
  Card,
  alpha,
  Avatar,
  Divider,
  useTheme,
  Typography,
  CardHeader,
  AvatarGroup,
  LinearProgress,
} from "@mui/material";
import { blue, green, orange, red, purple, grey } from "@mui/material/colors";

const projects = [
  {
    name: "Chakra Soft UI Version",
    budget: "$14,000",
    completion: 60,
    color: purple[500],
    members: 5,
  },
  {
    name: "Add Progress Track",
    budget: "$3,000",
    completion: 10,
    color: blue[500],
    members: 2,
  },
  {
    name: "Fix Platform Errors",
    budget: "Not set",
    completion: 100,
    color: green[500],
    members: 2,
  },
  {
    name: "Launch our Mobile App",
    budget: "$32,000",
    completion: 100,
    color: orange[500],
    members: 4,
  },
  {
    name: "Add the New Pricing Page",
    budget: "$400",
    completion: 25,
    color: red[500],
    members: 5,
  },
  {
    name: "Redesign New Online Shop",
    budget: "$7,600",
    completion: 40,
    color: purple[300],
    members: 2,
  },
];

const ProjectsCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: 2, boxShadow: theme.shadows[1] }}>
      <CardHeader
        title={
          <Typography variant="h6" component="div">
            Projects
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle2"
            component="div"
            color="success.main"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <span>30 done</span>
            <Typography
              variant="body2"
              component="span"
              color="text.secondary"
              sx={{ ml: 1 }}
            >
              this month
            </Typography>
          </Typography>
        }
      />
      <Divider />
      <Box sx={{ p: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr 1fr",
            px: 3,
            py: 1.5,
            bgcolor: alpha(theme.palette.common.black, 0.02),
          }}
        >
          <Typography variant="body2" color="text.secondary">
            COMPANIES
          </Typography>
          <Typography variant="body2" color="text.secondary">
            BUDGET
          </Typography>
          <Typography variant="body2" color="text.secondary">
            COMPLETION
          </Typography>
        </Box>

        {projects.map((project, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr 1fr",
                px: 3,
                py: 2.5,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: project.color,
                    width: 32,
                    height: 32,
                    mr: 2,
                  }}
                >
                  {project.name.charAt(0)}
                </Avatar>
                <Typography variant="body2" fontWeight="medium">
                  {project.name}
                </Typography>
              </Box>
              <Typography variant="body2">{project.budget}</Typography>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    color={
                      project.completion === 100 ? "success.main" : undefined
                    }
                  >
                    {project.completion}%
                  </Typography>
                  <AvatarGroup
                    max={3}
                    sx={{
                      "& .MuiAvatar-root": {
                        width: 20,
                        height: 20,
                        fontSize: "0.75rem",
                      },
                    }}
                  >
                    {Array.from({ length: project.members }).map((_, i) => (
                      <Avatar
                        key={i}
                        alt={`Member ${i + 1}`}
                        src={`https://i.pravatar.cc/150?img=${20 + i + index}`}
                      />
                    ))}
                  </AvatarGroup>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={project.completion}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.common.black, 0.1),
                    "& .MuiLinearProgress-bar": {
                      backgroundColor:
                        project.completion === 100
                          ? "success.main"
                          : theme.palette.primary.main,
                    },
                  }}
                />
              </Box>
            </Box>
            {index < projects.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Card>
  );
};
export default ProjectsCard;
