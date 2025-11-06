import { Alert, CircularProgress } from "@mui/material";
import StudentsFilters from "./StudentsFilters";
import StudentsTable from "./StudentsTable";

export default function StudentsListSection({
  busqueda,
  onChangeBusqueda,
  cursos,
  cursosSeleccionados,
  onToggleCurso,
  loading,
  error,
  estudiantes,
  total,
  pagina,
  totalPaginas,
  onPrev,
  onNext,
  getColorByCourse,
  onEdit,
}) {
  return (
    <>
      <StudentsFilters
        busqueda={busqueda}
        onChangeBusqueda={onChangeBusqueda}
        cursos={cursos}
        cursosSeleccionados={cursosSeleccionados}
        onToggleCurso={onToggleCurso}
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
          estudiantes={estudiantes}
          total={total}
          pagina={pagina}
          totalPaginas={totalPaginas}
          onPrev={onPrev}
          onNext={onNext}
          getColorByCourse={getColorByCourse}
          onEdit={onEdit}
        />
      )}
    </>
  );
}