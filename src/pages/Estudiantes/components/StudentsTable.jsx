import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";
export default function StudentsTable({
  estudiantes,
  total,
  pagina,
  totalPaginas,
  onPrev,
  onNext,
  getColorByCourse,
  onEdit,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const props = {
    estudiantes,
    total,
    pagina,
    totalPaginas,
    onPrev,
    onNext,
    getColorByCourse,
    onEdit,
  };

  return isMobile ? <TableMobile {...props} /> : <TableDesktop {...props} />;
}