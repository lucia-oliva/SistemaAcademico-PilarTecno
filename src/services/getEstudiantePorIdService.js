import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";

export async function getEstudiantePorId(id, signal) {
  if (!id) {
    throw new Error("El identificador del estudiante es obligatorio");
  }

  const url = `${API_URL}/estudiantes/${encodeURIComponent(id)}`;
  const { data } = await axios.get(url, { signal });

  return data;
}