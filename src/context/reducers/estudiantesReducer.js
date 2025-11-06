export const ESTUDIANTES_ACTIONS = {
  SET: "SET",                
  ADD: "ADD",                 
  UPDATE: "UPDATE",           
  REMOVE: "REMOVE",          
  SET_LOADING: "SET_LOADING", 
  SET_ERROR: "SET_ERROR",    
};

export const estudiantesInitialState = {
  estudiantes: [],
  loading: false,
  error: null,
};

export function estudiantesReducer(state, action) {
  switch (action.type) {
    case ESTUDIANTES_ACTIONS.SET: {
      return {
        ...state,
        estudiantes: Array.isArray(action.payload) ? action.payload : [],
        error: null,
      };
    }

    case ESTUDIANTES_ACTIONS.ADD: {
      return {
        ...state,
        estudiantes: [...state.estudiantes, action.payload],
      };
    }

    case ESTUDIANTES_ACTIONS.UPDATE: {
      const { _id, patch } = action.payload;
      return {
        ...state,
        estudiantes: state.estudiantes.map((est) =>
          est._id === _id ? { ...est, ...patch } : est
        ),
      };
    }

    case ESTUDIANTES_ACTIONS.REMOVE: {
      return {
        ...state,
        estudiantes: state.estudiantes.filter(
          (est) => est._id !== action.payload
        ),
      };
    }

    case ESTUDIANTES_ACTIONS.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ESTUDIANTES_ACTIONS.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
