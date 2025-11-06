import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function StudentsPageHeader() {
  return (
    <Box
      sx={{
        mb: "1.5rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
        alignItems: { md: "center" },
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Gestión de Estudiantes
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Administra la información de los estudiantes.
        </Typography>
      </Box>
      <Button
        component={Link}
        to="/estudiantes/crear"
        variant="contained"
        sx={{ borderRadius: "0.5rem" }}
      >
        + Crear estudiante
      </Button>
    </Box>
  );
}