import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import {
  Avatar,
  Fade,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// eslint-disable-next-line react/prop-types
const SidBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const Arrai1 = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/", locatop: "Home" },
    {
      text: "Manage Team",
      icon: <PeopleIcon />,
      path: "/team",
      locatop: "team",
    },

    {
      text: "Contact Information",
      icon: <ContactsIcon />,
      path: "/contacts",
      locatop: "contacts",
    },

    {
      text: "Invoices Balances",
      icon: <ReceiptIcon />,
      path: "/invoices",
      locatop: "invoices",
    },
  ];
  const Arrai2 = [
    {
      text: "Profile Form",
      icon: <PersonOutlineIcon />,
      path: "/form",
      locatop: "form",
    },
    {
      text: "Calendar",
      icon: <CalendarMonthIcon />,
      path: "/calendar",
      locatop: "calendar",
    },

    { text: "FAQ Page", icon: <LiveHelpIcon />, path: "/faq", locatop: "faq" },
  ];
  const Arrai3 = [
    { text: "Bar Chart", icon: <BarChartIcon />, path: "/bar", locatop: "bar" },
    { text: "Pie Chart", icon: <PieChartIcon />, path: "/pie", locatop: "pie" },

    {
      text: "Line Chart",
      icon: <TimelineIcon />,
      path: "/line",
      locatop: "line",
    },

    {
      text: "Geography Chart",
      icon: <MapIcon />,
      path: "/geography",
      locatop: "geography",
    },
  ];

  let location = useLocation();

  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar
          sx={{
            mx: "auto",
            width: open ? 88 : 50,
            height: open ? 88 : 50,
            my: 1,
            border: "2px solid grey",
            transition: "0.3s",
          }}
          alt="Remy Sharp"
          src="src\components\avataro.jpg"
        />
        <Typography
          align="center"
          sx={{ fontSize: open ? 17 : 0, transition: "0.3s" }}
        >
          Taha Ibrahim
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: open ? 15 : 0,
            transition: "0.3s",
            color: theme.palette.info.main,
          }}
        >
          Admin
        </Typography>

        <Divider />

        <List>
          {Arrai1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip
                title={item.locatop}
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 200 }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Arrai2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip
                title={item.locatop}
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 200 }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Arrai3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip
                title={item.locatop}
                placement="right"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 200 }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SidBar;
