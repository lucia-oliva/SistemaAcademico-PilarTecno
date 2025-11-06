import {
  Box,
  Card,
  Avatar,
  Typography,
  Button,
  Stack,
  Grid,
  Divider,
  Chip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function StudentDetail() {
  const navigate = useNavigate();

  const student = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "juan.perez@email.com",
    cursos: ["Matemática I", "Programación", "Bases de Datos"],
    id: "12345678",
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: "1rem", md: "2rem" },
        maxWidth: "75rem",
        mx: "auto",
      }}
    >
      {/* Flecha volver */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <IconButton
          onClick={() => navigate("/estudiantes")}
          color="primary"
          sx={{
            mr: 1,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "0.75rem",
            transition: "0.2s",
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
          Volver al listado
        </Typography>
      </Box>

      <Card
        sx={{
          width: "100%",
          borderRadius: "1.2rem",
          p: { xs: "1.2rem", md: "1.6rem" },
          boxShadow: "0 12px 25px rgba(15,23,42,0.05)",
          gap: "1.25rem",
        }}
      >
        {/* HEADER: avatar + nombre + botones */}
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
              {student.nombre[0]}
              {student.apellido[0]}
            </Avatar>
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography sx={{ fontWeight: 600, fontSize: "1.15rem" }}>
                {student.nombre} {student.apellido}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
                ID: {student.id}
              </Typography>
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
            >
              Editar
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ borderRadius: "999px" }}
            >
              Eliminar
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ mb: "1rem" }} />

        {/* INFO GENERAL */}
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
              <Typography
                sx={{ color: "text.secondary", fontSize: "0.9rem" }}
              >
                Nombre:
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                {student.nombre}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{ color: "text.secondary", fontSize: "0.9rem" }}
              >
                Apellido:
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                {student.apellido}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{ color: "text.secondary", fontSize: "0.9rem" }}
              >
                Email:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  wordBreak: "break-word",
                }}
              >
                {student.email}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: "1rem" }} />

        {/* CURSOS */}
        <Box>
          <Typography
            sx={{
              color: "text.secondary",
              mb: "0.5rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Cursos:
          </Typography>
          <Stack
            direction="row"
            gap="0.5rem"
            flexWrap="wrap"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {student.cursos.map((curso) => (
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
        </Box>
      </Card>
    </Box>
  );
}
