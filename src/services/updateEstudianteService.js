import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function updateEstudianteService(id, estudiante) {
  if (!id) throw new Error("El identificador del estudiante es obligatorio");

  const payload = {
    nombre: estudiante.nombre?.trim() || "",
    apellido: estudiante.apellido?.trim() || "",
    email: estudiante.email?.trim() || "",
    cursos: Array.isArray(estudiante.cursos) ? estudiante.cursos : [],
  };

  try {
    const { data } = await axios.put(`${API_BASE}/estudiantes/${id}`, payload);
    return data;
  } catch (error) {
    console.error("Error actualizando estudiante", error.response || error);
    throw error;
  }
}