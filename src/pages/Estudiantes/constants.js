export const CURSOS_DISPONIBLES = [
  "Matemática",
  "Historia",
  "Ciencias",
  "Arte",
];

export const getColorByCourse = (curso) => {
  switch (curso) {
    case "Matemática":
      return "primary"; 
    case "Historia":
      return "secondary"; 
    case "Ciencias":
      return "success"; 
    case "Arte":
      return "warning";
    default:
      return "default";
  }
};
