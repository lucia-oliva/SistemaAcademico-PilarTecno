import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "";

/**
  @param {string} curso nombre del curso a filtrar
 */

export async function fetchStudents(curso = "") {
  const url = curso
    ? `${API_URL}/estudiantes?curso=${encodeURIComponent(curso)}`
    : `${API_URL}/estudiantes`;

  const { data } = await axios.get(url);
  return data;
}
