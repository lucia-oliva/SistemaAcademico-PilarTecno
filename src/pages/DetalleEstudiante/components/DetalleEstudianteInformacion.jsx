import { Box, Grid, Typography } from "@mui/material";

const formatText = (value) =>
  value && typeof value === "string" && value.trim().length > 0
    ? value
    : "Sin información";

export default function DetalleEstudianteInformacion({ estudiante }) {
  return (
    <Box sx={{ mb: "1rem" }}>
      <Typography
        sx={{
          fontWeight: 600,
          mb: "0.75rem",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Información General
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Nombre:
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
            {formatText(estudiante?.nombre)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Apellido:
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
            {formatText(estudiante?.apellido)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Email:
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "1rem",
              wordBreak: "break-word",
            }}
          >
            {formatText(estudiante?.email)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}