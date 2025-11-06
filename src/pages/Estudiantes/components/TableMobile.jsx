import {
  Box,
  Paper,
  Typography,
  Stack,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TableMobile({
  estudiantes,
  total,
  pagina,
  totalPaginas,
  onPrev,
  onNext,
  getColorByCourse,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {estudiantes.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            p: "1rem",
            borderRadius: "1rem",
            border: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            No se encontraron estudiantes.
          </Typography>
        </Paper>
      ) : (
        estudiantes.map((est) => (
          <Paper
            key={est._id}
            elevation={0}
            sx={{
              p: "1rem",
              borderRadius: "1rem",
              border: "1px solid #e2e8f0",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  {est.nombre} {est.apellido}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {est.email}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.disabled"
                  display="block"
                >
                  ID: {est._id.slice(0, 6)}...
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                <IconButton size="small">
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="error">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
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
          </Paper>
        ))
      )}
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
    </Box>
  );
}
