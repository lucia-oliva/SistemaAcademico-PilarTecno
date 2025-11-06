import { useContext } from "react";
import { EstudiantesContext } from "./EstudiantesContex";

export function useEstudiantes() {
  const ctx = useContext(EstudiantesContext);
  if (!ctx) {
    throw new Error("useEstudiantes debe usarse dentro de <EstudiantesProvider>");
  }
  return ctx;
}
