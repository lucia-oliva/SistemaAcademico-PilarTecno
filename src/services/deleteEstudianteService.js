import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function deleteEstudianteService(id) {
  if (!id) {
    throw new Error("El identificador del estudiante es obligatorio");
  }

  try {
    const { data } = await axios.delete(`${API_BASE}/estudiantes/${id}`);
    return data;
  } catch (error) {
    console.error("Error eliminando estudiante", error.response || error);
    throw error;
  }
}