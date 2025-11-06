import { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { CURSOS_DISPONIBLES, getColorByCourse } from "./constants";
import StudentsFilters from "./components/StudentsFilters";
import StudentsTable from "./components/StudentsTable";
import { useEstudiantes } from "../../context/useEstudiantes";
import { Link } from "react-router-dom";
import { useFiltrosEstudiantes } from "./hooks/useFiltrosEstudiante"
import { usePaginacion } from "./hooks/usePaginacion";

export default function PageEstudiantes() {
  const { estudiantes, loading, error, fetchEstudiantes } = useEstudiantes();
  const {
    busqueda,
    setBusqueda,
    cursosSeleccionados,
    toggleCurso,
    estudiantesFiltrados,
  } = useFiltrosEstudiantes(estudiantes, fetchEstudiantes);

  const {
    pagina,
    totalPaginas,
    totalItems,
    itemsPaginados,
    goPrev,
    goNext,
    reset,
  } = usePaginacion(estudiantesFiltrados, 6);

  useEffect(() => {
    reset();
  }, [busqueda, cursosSeleccionados, reset]);

  return (
    <Box
    component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#f3f4f6",
        p: { xs: "1rem", md: "2rem", lg: "3rem" },
      }}
    >
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

      <StudentsFilters
        busqueda={busqueda}
       onChangeBusqueda={setBusqueda}
        cursos={CURSOS_DISPONIBLES}
        cursosSeleccionados={cursosSeleccionados}
        onToggleCurso={toggleCurso}
        getColorByCourse={getColorByCourse}
      />
       {loading && (
        <CircularProgress sx={{ display: "block", mx: "auto", my: "1.5rem" }} />
      )}
      {error && (
        <Alert severity="error" sx={{ mb: "1rem" }}>␊
          {error}
        </Alert>
      )}
      {!loading && (
        <StudentsTable
          estudiantes={itemsPaginados}
          total={totalItems}
          getColorByCourse={getColorByCourse}
          pagina={pagina}
          totalPaginas={totalPaginas}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </Box>
  );
}
    