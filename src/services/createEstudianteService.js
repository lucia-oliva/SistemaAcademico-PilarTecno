import axios from "axios";
const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function createEstudianteService(estudiante) {
  const payload = {
    nombre: estudiante.nombre?.trim() || "",
    apellido: estudiante.apellido?.trim() || "",
    email: estudiante.email?.trim() || "",
    cursos: Array.isArray(estudiante.cursos)
      ? estudiante.cursos
      : [],
  };
  try {
    const { data } = await axios.post(
      `${API_BASE}/estudiantes`,
      payload
    );
    return data;
  } catch (error) {
    console.error("Error creando estudiante", error.response || error);
    throw error;
  }
}
