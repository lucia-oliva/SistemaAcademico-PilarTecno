import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { getEstudiantePorId } from "../../../services/getEstudiantePorIdService";

export function useDetalleEstudiante(id) {
  const [estudiante, setEstudiante] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setEstudiante(null);
      setError("No se proporcionó un identificador de estudiante.");
      setLoading(false);
      return;
    }

    let ignore = false;
    const controller = new AbortController();

    const fetchDetalle = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getEstudiantePorId(id, controller.signal);
        if (!ignore) {
          setEstudiante(data);
        }
      } catch (err) {
        if (isAxiosError(err) && err.code === "ERR_CANCELED") {
          return;
        }

        if (!ignore) {
          const status = isAxiosError(err) ? err.response?.status : undefined;
          const message =
            status === 404
              ? "No se encontró el estudiante solicitado."
              : "No se pudo cargar la información del estudiante.";

          setEstudiante(null);
          setError(message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchDetalle();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [id]);

  return { estudiante, loading, error };
}