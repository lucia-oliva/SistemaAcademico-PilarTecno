import {
  Paper,
  Box,
  TextField,
  Button,
  Stack,
  Chip,
  Typography,
} from "@mui/material";

export default function StudentsFilters({
  busqueda,
  onChangeBusqueda,
  cursos,
  cursosSeleccionados,
  onToggleCurso,
  getColorByCourse,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: "1.5rem",
        p: "1rem",
        borderRadius: "1rem",
        border: "1px solid #e2e8f0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          mb: "1.5rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          Filtros de búsqueda
        </Typography>

        <TextField
          size="small"
          fullWidth
          placeholder="Buscar por nombre, email..."
          value={busqueda}
          onChange={(e) => onChangeBusqueda(e.target.value)}
        />
      </Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{ mt: "1rem" }}
        flexWrap="wrap"
        useFlexGap
      >
        {cursos.map((curso) => {
          const selected = cursosSeleccionados.includes(curso);
          return (
            <Chip
              key={curso}
              label={curso}
              onClick={() => onToggleCurso(curso)}
              color={selected ? getColorByCourse(curso) : "default"}
              variant={selected ? "filled" : "outlined"}
              sx={{ mb: "0.5rem", cursor: "pointer" }}
            />
          );
        })}
      </Stack>
    </Paper>
  );
}
