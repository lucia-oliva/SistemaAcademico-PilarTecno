import {
  Alert,
  Box,
  Card,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import DetalleEstudianteHeader from "./components/DetalleEstudianteHeader"
import DetalleEstudianteInformacion from "./components/DetalleEstudianteInformacion";
import DetalleEstudianteCursos from "./components/DetalleEstudianteCursos";
import { useDetalleEstudiante } from "./Hooks/useDetalleEstudiante";

export default function DetalleEstudiante() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { estudiante, loading, error } = useDetalleEstudiante(id);

  const mostrarContenido = !loading && !error && Boolean(estudiante);

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: "1rem", md: "2rem" },
        maxWidth: "75rem",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <IconButton
          onClick={() => navigate("/estudiantes")}
          color="primary"
          sx={{
            mr: 1,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "0.75rem",
            transition: "0.2s",
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
          Volver al listado
        </Typography>
      </Box>

      <Card
        sx={{
          width: "100%",
          borderRadius: "1.2rem",
          p: { xs: "1.2rem", md: "1.6rem" },
          boxShadow: "0 12px 25px rgba(15,23,42,0.05)",
          gap: "1.25rem",
        }}
      >
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: "2rem" }}>
            <CircularProgress />
          </Box>
        )}

        {!loading && error && (
          <Alert severity="error">{error}</Alert>
        )}

        {mostrarContenido && (
          <>
            <DetalleEstudianteHeader estudiante={estudiante} />
            <Divider sx={{ mb: "1rem" }} />
            <DetalleEstudianteInformacion estudiante={estudiante} />
            <Divider sx={{ mb: "1rem" }} />
            <DetalleEstudianteCursos estudiante={estudiante} />
          </>
        )}

        {!loading && !error && !estudiante && (
          <Typography sx={{ textAlign: "center" }}>
            No se encontró información para este estudiante.
          </Typography>
        )}
      </Card>
    </Box>
  );
}