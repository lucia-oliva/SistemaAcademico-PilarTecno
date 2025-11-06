import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

function SideBar({ open, onClose }) {
  const navigate = useNavigate();

  const handleGo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <Box
        sx={{
          width: 240,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              bgcolor: "#4f46e5",
              width: { xs: 50, sm: 64 },
              height: { xs: 50, sm: 64 },
              mx: "auto",
              mb: 1,
            }}
          >
            <SchoolRoundedIcon
              sx={{ fontSize: { xs: 22, sm: 28 } }}
            />
          </Avatar>
          <Typography
            sx={{ p: 0.5, fontSize: { xs: "0.95rem", sm: "1.1rem" } }}
            fontWeight={600}
          >
            Menú
          </Typography>
        </Box>
        <List>
          <ListItemButton onClick={() => handleGo("/")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>

          <ListItemButton onClick={() => handleGo("/estudiantes")}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Estudiantes" />
          </ListItemButton>

          <ListItemButton onClick={() => handleGo("/estudiantes/crear")}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Nuevo estudiante" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;

