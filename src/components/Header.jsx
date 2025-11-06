import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { useNavigate } from "react-router-dom";

function Header({ onOpenMenu }) {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "#fff", borderBottom: "1px solid #e2e8f0", color: "#0f172a" }}
    >
      <Toolbar sx={{ gap: 2, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "#4f46e5", width: 30, height: 30 }}>
            <SchoolRoundedIcon fontSize="small" />
          </Avatar>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Sistema Academico
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Button onClick={() => navigate("/")} sx={{ textTransform: "none" }}>
            Inicio
          </Button>
          <Button
            onClick={() => navigate("/estudiantes")}
            sx={{ textTransform: "none" }}
          >
            Estudiantes
          </Button>
          <Button
            onClick={() => navigate("/estudiantes/crear")}
            sx={{ textTransform: "none" }}
          >
            Nuevo
          </Button>
        </Box>
        <IconButton
          edge="end"
          onClick={onOpenMenu}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
