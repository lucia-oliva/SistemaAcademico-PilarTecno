import { useReducer, useEffect } from "react";
import { EstudiantesContext } from "./EstudiantesContex.js";
import {
  estudiantesReducer,
  estudiantesInitialState,
  ESTUDIANTES_ACTIONS,
} from "../context/reducers/estudiantesReducer.js";
import { fetchStudents } from "../services/getEstudiantesService";

export function EstudiantesProvider({ children }) {
  const [state, dispatch] = useReducer(
    estudiantesReducer,
    estudiantesInitialState
  );

  const loadEstudiantes = async (curso = "") => {
    try {
      dispatch({ type: ESTUDIANTES_ACTIONS.SET_LOADING, payload: true });
      const data = await fetchStudents(curso);
      dispatch({ type: ESTUDIANTES_ACTIONS.SET, payload: data });
      dispatch({ type: ESTUDIANTES_ACTIONS.SET_ERROR, payload: null });
    } catch (err) {
      console.error(err);
      dispatch({
        type: ESTUDIANTES_ACTIONS.SET_ERROR,
        payload: "No se pudieron cargar los estudiantes",
      });
    } finally {
      dispatch({ type: ESTUDIANTES_ACTIONS.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    loadEstudiantes();
  }, []);

  const value = {
    estudiantes: state.estudiantes,
    loading: state.loading,
    error: state.error,
    fetchEstudiantes: loadEstudiantes,
    setEstudiantes: (arr) =>
      dispatch({ type: ESTUDIANTES_ACTIONS.SET, payload: arr }),
    addEstudiante: (est) =>
      dispatch({ type: ESTUDIANTES_ACTIONS.ADD, payload: est }),
    updateEstudiante: (_id, patch) =>
      dispatch({
        type: ESTUDIANTES_ACTIONS.UPDATE,
        payload: { _id, patch },
      }),
    removeEstudiante: (_id) =>
      dispatch({ type: ESTUDIANTES_ACTIONS.REMOVE, payload: _id }),
  };

  return (
    <EstudiantesContext.Provider value={value}>
      {children}
    </EstudiantesContext.Provider>
  );
}
