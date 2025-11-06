import {
  Paper,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function TableDesktop({ estudiantes,total, getColorByCourse,pagina,totalPaginas,onPrev,onNext}) {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "1rem",
        border: "1px solid #e2e8f0",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <Table sx={{ minWidth: "40rem" }} aria-label="tabla de estudiantes">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Estudiante</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Cursos</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {estudiantes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ py: "2rem" }}>
                  <Typography variant="body2" color="text.secondary">
                    No se encontraron estudiantes.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              estudiantes.map((est) => (
                <TableRow key={est._id} hover>
                  <TableCell>
                    <Typography sx={{ fontWeight: 500 }}>
                      {est.nombre} {est.apellido}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ID: {est._id.slice(0, 6)}...
                    </Typography>
                  </TableCell>

                  <TableCell>{est.email}</TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {est.cursos.map((c) => (
                        <Chip
                          key={c}
                          label={c}
                          size="small"
                          color={getColorByCourse(c)}
                          sx={{ fontWeight: 500 }}
                        />
                      ))}
                    </Stack>
                  </TableCell>

                  <TableCell align="right">
                    <IconButton
                      size="small"
                      aria-label="ver"
                      component={Link}
                      to={`/estudiantes/${est._id}`}
                    >
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="editar">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error" aria-label="eliminar">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Box>
       <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "0.75rem 1rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
         <Typography variant="caption" color="text.secondary">
          Página {pagina} de {totalPaginas} — Mostrando {estudiantes.length} de{" "}
          {total}
        </Typography>
       <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Button
            size="small"
            variant="outlined"
            onClick={onPrev}
            disabled={pagina === 1}
          >
            Anterior
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={onNext}
            disabled={pagina === totalPaginas}
          >
            Siguiente
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
