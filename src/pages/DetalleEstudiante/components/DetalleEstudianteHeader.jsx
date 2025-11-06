import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const getInitials = (nombre = "", apellido = "") => {
  const firstName = nombre.trim().charAt(0).toUpperCase();
  const lastName = apellido.trim().charAt(0).toUpperCase();

  return `${firstName}${lastName}`.trim() || "?";
};

export default function DetalleEstudianteHeader({
  estudiante,
  onEditar,
  onEliminar,
}) {
  const nombre = estudiante?.nombre ?? "";
  const apellido = estudiante?.apellido ?? "";
  const identificador = estudiante?.id ?? estudiante?._id ?? "";

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "center", sm: "center" }}
      justifyContent="space-between"
      spacing={2}
      sx={{ mb: "1rem" }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={{ xs: "center", sm: "flex-start" }}
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Avatar
          sx={{
            width: "4.5rem",
            height: "4.5rem",
            bgcolor: "primary.main",
            fontSize: "1.3rem",
          }}
        >
          {getInitials(nombre, apellido)}
        </Avatar>
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography sx={{ fontWeight: 600, fontSize: "1.15rem" }}>
            {nombre} {apellido}
          </Typography>
          {identificador && (
            <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
              ID: {identificador}
            </Typography>
          )}
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        justifyContent={{ xs: "center", sm: "flex-end" }}
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Button
          size="small"
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ borderRadius: "999px" }}
          onClick={onEditar}
        >
          Editar
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ borderRadius: "999px" }}
          onClick={onEliminar}
        >
          Eliminar
        </Button>
      </Stack>
    </Stack>
  );
}