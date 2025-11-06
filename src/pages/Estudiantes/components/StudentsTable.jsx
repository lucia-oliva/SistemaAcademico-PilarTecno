import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";

export default function StudentsTable({
  estudiantes,
  total,
  getColorByCourse,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <TableMobile
        estudiantes={estudiantes}
        total={total}
        getColorByCourse={getColorByCourse}
      />
    );
  }

  return (
    <TableDesktop
      estudiantes={estudiantes}
      total={total}
      getColorByCourse={getColorByCourse}
    />
  );
}
