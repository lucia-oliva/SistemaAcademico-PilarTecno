import { useState, useMemo, useEffect } from "react";
import { Box, Typography, Button, Alert, CircularProgress } from "@mui/material";
import { CURSOS_DISPONIBLES, getColorByCourse } from "./constants";
import StudentsFilters from "./components/StudentsFilters";
import StudentsTable from "./components/StudentsTable";
import { useEstudiantes } from "../../context/useEstudiantes";

export default function PageEstudiantes() {
  const [busqueda, setBusqueda] = useState("");
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);

  const {
    estudiantes,
    loading,
    error,
    fetchEstudiantes, 
  } = useEstudiantes();

 useEffect(() => {
  const curso = cursosSeleccionados[0] || "";
  fetchEstudiantes(curso);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [cursosSeleccionados]);


  const estudiantesFiltrados = useMemo(() => {
    return estudiantes.filter((est) =>
      `${est.nombre} ${est.apellido} ${est.email}`
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );
  }, [busqueda, estudiantes]);

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
        <Button variant="contained" sx={{ borderRadius: "0.5rem" }}>
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
          estudiantes={estudiantesFiltrados}
          total={estudiantes.length}
          getColorByCourse={getColorByCourse}
        />
      )}
    </Box>
  );
}
