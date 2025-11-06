import { useState, useMemo, useEffect } from "react";
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

export default function PageEstudiantes() {
  const [busqueda, setBusqueda] = useState("");
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const pageSize = 6;

  const { estudiantes, loading, error, fetchEstudiantes } = useEstudiantes();

  useEffect(() => {
    const curso = cursosSeleccionados[0] || "";
    fetchEstudiantes(curso);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursosSeleccionados]);
  useEffect(() => {
    setPagina(1);
  }, [busqueda, cursosSeleccionados]);

  const estudiantesFiltrados = useMemo(() => {
    return estudiantes.filter((est) =>
      `${est.nombre} ${est.apellido} ${est.email}`
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );
  }, [busqueda, estudiantes]);

  const totalFiltrados = estudiantesFiltrados.length;
  const totalPaginas = Math.ceil(totalFiltrados / pageSize) || 1;
  const inicio = (pagina - 1) * pageSize;
  const fin = inicio + pageSize;
  const estudiantesPaginados = estudiantesFiltrados.slice(inicio, fin)

  const handlePrev = () => setPagina((p) => Math.max(1, p - 1));
  const handleNext = () => setPagina((p) => Math.min(totalPaginas, p + 1));

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
        onToggleCurso={(curso) =>
          setCursosSeleccionados((prev) =>
            prev.includes(curso)
              ? prev.filter((c) => c !== curso)
              : [...prev, curso]
          )
        }
        getColorByCourse={getColorByCourse}
      />

      {loading && (
        <CircularProgress sx={{ display: "block", mx: "auto", my: "1.5rem" }} />
      )}

      {error && (
        <Alert severity="error" sx={{ mb: "1rem" }}>
          {error}
        </Alert>
      )}
      {!loading && (
        <StudentsTable
         estudiantes={estudiantesPaginados}
          total={estudiantes.length}
          getColorByCourse={getColorByCourse}
          pagina={pagina}
          totalPaginas={totalPaginas}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </Box>
  );
}
