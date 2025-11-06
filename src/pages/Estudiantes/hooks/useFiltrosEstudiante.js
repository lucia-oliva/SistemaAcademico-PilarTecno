import { useState, useEffect, useMemo, useCallback } from "react";

export function useFiltrosEstudiantes(estudiantes, fetchEstudiantes) {
  const [busqueda, setBusqueda] = useState("");
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);

  useEffect(() => {
    const curso = cursosSeleccionados[0] || "";
    fetchEstudiantes(curso);
  }, [cursosSeleccionados, fetchEstudiantes]);

  const estudiantesFiltrados = useMemo(() => {
    const termino = busqueda.toLowerCase();

    return estudiantes.filter((est) =>
      `${est.nombre} ${est.apellido} ${est.email}`
        .toLowerCase()
        .includes(termino)
    );
  }, [busqueda, estudiantes]);

  const toggleCurso = useCallback((curso) => {
    setCursosSeleccionados((prev) =>
      prev.includes(curso)
        ? prev.filter((c) => c !== curso)
        : [...prev, curso]
    );
  }, []);

  return {
    busqueda,
    setBusqueda,
    cursosSeleccionados,
    toggleCurso,
    estudiantesFiltrados,
  };
}