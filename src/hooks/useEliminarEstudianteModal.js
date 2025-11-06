import { useCallback, useState } from "react";
import { useEstudiantes } from "../context/useEstudiantes";
import { deleteEstudianteService } from "../services/deleteEstudianteService";

export function useEliminarEstudianteModal(options = {}) {
  const { onSuccess } = options;
  const { removeEstudiante } = useEstudiantes();

  const [open, setOpen] = useState(false);
  const [estudiante, setEstudiante] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openModal = useCallback((est) => {
    if (!est) return;
    setEstudiante(est);
    setError("");
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (loading) return;
    setOpen(false);
    setEstudiante(null);
    setError("");
  }, [loading]);

  const handleConfirm = useCallback(async () => {
    if (!estudiante?._id || loading) return;

    setLoading(true);
    setError("");

    const target = estudiante;

    try {
      await deleteEstudianteService(target._id);
      removeEstudiante(target._id);
      setOpen(false);
      setEstudiante(null);
      setLoading(false);
      setError("");
      onSuccess?.(target);
    } catch (err) {
      const message = err?.response?.data?.message;
      setError(message || "No se pudo eliminar el estudiante.");
      setLoading(false);
    }
  }, [estudiante, loading, onSuccess, removeEstudiante]);

  return {
    open,
    estudiante,
    loading,
    error,
    openModal,
    closeModal,
    handleConfirm,
  };
}