import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Grid,
  Chip,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EstudianteDetalle() {
 //pruebaaa 
  const student = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "juan.perez@email.com",
    cursos: ["Matemática I", "Programación", "Bases de Datos"],
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "60rem",
        mx: "auto",
        p: { xs: "1rem", sm: "2rem" },
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
   
      <Card
        elevation={3}
        sx={{
          borderRadius: "1rem",
          overflow: "hidden",
          p: "1.5rem",
        }}
      >
        <Grid container spacing={3}>
         
          <Grid item xs={12} sm={4} md={3}>
            <Stack alignItems="center" spacing={2}>
              <Avatar
                alt={`${student.nombre} ${student.apellido}`}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                sx={{ width: "8rem", height: "8rem" }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, textAlign: "center" }}
              >
                {student.nombre} {student.apellido}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                ID: 12345678
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mt: "0.5rem" }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  startIcon={<EditIcon />}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Eliminar
                </Button>
              </Stack>
            </Stack>
          </Grid>

    
          <Grid item xs={12} sm={8} md={9}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: "0.75rem",
                p: "1.5rem",
              }}
            >
              <CardHeader
                title="Información General"
                sx={{
                  p: 0,
                  mb: "1rem",
                  "& .MuiCardHeader-title": { fontWeight: 600, fontSize: "1.2rem" },
                }}
              />
              <CardContent sx={{ p: 0 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                    >
                      Nombre:
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                      {student.nombre}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                    >
                      Apellido:
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                      {student.apellido}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                    >
                      Email:
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                      {student.email}
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ my: "1.5rem" }} />

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: "0.5rem" }}
                >
                  Cursos:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap="0.5rem">
                  {student.cursos.map((curso) => (
                    <Chip
                      key={curso}
                      label={curso}
                      color="primary"
                      variant="outlined"
                      sx={{ fontSize: "0.85rem" }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
