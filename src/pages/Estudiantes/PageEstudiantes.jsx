import { useEffect } from "react";
import { Box } from "@mui/material";
import { CURSOS_DISPONIBLES, getColorByCourse } from "./constants";
import { useEstudiantes } from "../../context/useEstudiantes";
import { useFiltrosEstudiantes } from "./hooks/useFiltrosEstudiante";
import { usePaginacion } from "./hooks/usePaginacion";
import EditarEstudianteModal from "../../components/Modals/EditarEstudianteModal";
import { useEditarEstudianteModal } from "../../hooks/useEditarEstudianteModal";
import StudentsPageHeader from "./components/StudentsPageHeader";
import StudentsListSection from "./components/StudentsListSection";

export default function PageEstudiantes() {
  const { estudiantes, loading, error, fetchEstudiantes } = useEstudiantes();
  const {
    busqueda,
    setBusqueda,
    cursosSeleccionados,
    toggleCurso,
    estudiantesFiltrados,
  } = useFiltrosEstudiantes(estudiantes, fetchEstudiantes);

  const { pagina, totalPaginas, totalItems, itemsPaginados, goPrev, goNext, reset } =
    usePaginacion(estudiantesFiltrados, 6);
  const {
    open: isEditOpen,
    values: editValues,
    alert: editAlert,
    saving: editSaving,
    openModal: openEditModal,
    closeModal: closeEditModal,
    handleChange: handleEditChange,
    handleSubmit: handleEditSubmit,
  } = useEditarEstudianteModal();

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
      <StudentsPageHeader />
      <StudentsListSection
        busqueda={busqueda}
        onChangeBusqueda={setBusqueda}
        cursos={CURSOS_DISPONIBLES}
        cursosSeleccionados={cursosSeleccionados}
        onToggleCurso={toggleCurso}
        loading={loading}
        error={error}
        estudiantes={itemsPaginados}
        total={totalItems}
        pagina={pagina}
        totalPaginas={totalPaginas}
        onPrev={goPrev}
        onNext={goNext}
        getColorByCourse={getColorByCourse}
        onEdit={openEditModal}
      />
      <EditarEstudianteModal
        open={isEditOpen}
        values={editValues}
        alert={editAlert}
        saving={editSaving}
        onChange={handleEditChange}
        onSubmit={handleEditSubmit}
        onClose={closeEditModal}
      />
    </Box>
  );
}
    