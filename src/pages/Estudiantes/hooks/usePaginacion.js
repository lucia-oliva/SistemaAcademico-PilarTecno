import { useState, useMemo, useCallback, useEffect } from "react";

export function usePaginacion(items, pageSize = 6) {
  const [pagina, setPagina] = useState(1);

  const totalItems = items.length;
  const totalPaginas = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => {
    setPagina((prev) => Math.min(prev, totalPaginas));
  }, [totalPaginas]);

  const itemsPaginados = useMemo(() => {
    const inicio = (pagina - 1) * pageSize;
    return items.slice(inicio, inicio + pageSize);
  }, [items, pagina, pageSize]);

  const goPrev = useCallback(() => {
    setPagina((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPagina((p) => Math.min(totalPaginas, p + 1));
  }, [totalPaginas]);

  const reset = useCallback(() => {
    setPagina(1);
  }, []);

  return {
    pagina,
    totalPaginas,
    totalItems,
    itemsPaginados,
    goPrev,
    goNext,
    reset,
    setPagina,
  };
}