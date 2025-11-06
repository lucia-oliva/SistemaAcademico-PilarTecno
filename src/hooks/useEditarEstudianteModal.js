import { useCallback, useState } from "react";
import { useEstudiantes } from "../context/useEstudiantes";
import { updateEstudianteService } from "../services/updateEstudianteService";

const INITIAL_VALUES = {
  nombre: "",
  apellido: "",
  email: "",
  cursos: [],
};

export function useEditarEstudianteModal(options = {}) {
  const { onSuccess } = options;
  const { updateEstudiante } = useEstudiantes();
  const [open, setOpen] = useState(false);
  const [estudianteId, setEstudianteId] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [alert, setAlert] = useState({});
  const [saving, setSaving] = useState(false);

  const resetState = useCallback(() => {
    setEstudianteId(null);
    setValues({ ...INITIAL_VALUES });
    setAlert({});
    setSaving(false);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    resetState();
  }, [resetState]);

  const openModal = useCallback((estudiante) => {
    if (!estudiante) return;
    setEstudianteId(estudiante._id);
    setValues({
      nombre: estudiante.nombre ?? "",
      apellido: estudiante.apellido ?? "",
      email: estudiante.email ?? "",
      cursos: Array.isArray(estudiante.cursos) ? estudiante.cursos : [],
    });
    setAlert({});
    setSaving(false);
    setOpen(true);
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    if (!estudianteId) return;

    setSaving(true);
    setAlert({});

    const payload = {
      nombre: values.nombre.trim(),
      apellido: values.apellido.trim(),
      email: values.email.trim(),
      cursos: Array.isArray(values.cursos) ? values.cursos : [],
    };

    try {
      const updated = await updateEstudianteService(estudianteId, payload);
      const patch = updated ?? payload;
      updateEstudiante(estudianteId, patch);
      onSuccess?.(patch);
      setAlert({
        type: "success",
        message: "Estudiante actualizado correctamente",
      });
    } catch (error) {
      const message = error?.response?.data?.message;
      setAlert({
        type: "error",
        message: message || "No se pudo actualizar el estudiante.",
      });
    } finally {
      setSaving(false);
    }
  }, [estudianteId, onSuccess, updateEstudiante, values]);

  return {
    open,
    values,
    alert,
    saving,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
  };
}