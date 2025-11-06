import { CURSOS_DISPONIBLES } from "../pages/Estudiantes/constants";

export const ESTUDIANTE_FORM_FIELDS = [
  { label: "Nombre(s)", name: "nombre", sm: 6, section: "personal" },
  { label: "Apellido(s)", name: "apellido", sm: 6, section: "personal" },
  {
    label: "Cursos",
    name: "cursos",
    select: true,
    multiple: true,
    options: CURSOS_DISPONIBLES,
    section: "academica",
  },
  {
    label: "Correo Electrónico",
    name: "email",
    type: "email",
    sm: 6,
    section: "contacto",
  },
];