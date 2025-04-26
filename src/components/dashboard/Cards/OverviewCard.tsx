import React from "react";

import {
  Card,
  List,
  Avatar,
  Divider,
  useTheme,
  ListItem,
  Typography,
  CardHeader,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { blue,  orange, red, purple } from "@mui/material/colors";

interface OrderItem {
  title: string;
  date: string;
  icon: string;
  color: string;
}

const orders: OrderItem[] = [
  {
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    icon: "design",
    color: blue[500],
  },
  {
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    icon: "order",
    color: red[500],
  },
  {
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    icon: "server",
    color: blue[300],
  },
  {
    title: "New card added for order #321645",
    date: "20 DEC 3:52 PM",
    icon: "card",
    color: orange[400],
  },
  {
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    icon: "unlock",
    color: purple[400],
  },
  {
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    icon: "order",
    color: red[500],
  },
];

const OverviewCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: 2, boxShadow: theme.shadows[1] }}>
      <CardHeader
        title={
          <Typography variant="h6" component="div">
            Orders overview
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle2"
            component="div"
            color="success.main"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <span>+30%</span>
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
      <List sx={{ p: 0 }}>
        {orders.map((order, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{ px: 3, py: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar
                  sx={{
                    bgcolor: order.color,
                    width: 32,
                    height: 32,
                    fontSize: "0.75rem",
                  }}
                >
                  {order.icon.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight="medium">
                    {order.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {order.date}
                  </Typography>
                }
              />
            </ListItem>
            {index < orders.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};
export default OverviewCard;
