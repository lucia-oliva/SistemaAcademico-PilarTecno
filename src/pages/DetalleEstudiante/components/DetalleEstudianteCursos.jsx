import { Chip, Stack, Typography } from "@mui/material";

export default function DetalleEstudianteCursos({ estudiante }) {
  const cursos = Array.isArray(estudiante?.cursos)
    ? estudiante.cursos
    : [];

  return (
    <Stack spacing={1.5}>
      <Typography
        sx={{
          color: "text.secondary",
          mb: "0.5rem",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Cursos:
      </Typography>
      {cursos.length > 0 ? (
        <Stack
          direction="row"
          gap="0.5rem"
          flexWrap="wrap"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {cursos.map((curso) => (
            <Chip
              key={curso}
              label={curso}
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: "999px",
                px: "0.7rem",
                fontSize: "0.85rem",
              }}
            />
          ))}
        </Stack>
      ) : (
        <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
          Sin cursos registrados.
        </Typography>
      )}
    </Stack>
  );
}