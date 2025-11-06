import { useState } from "react";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import Formulario from "../components/Forms/Formulario";
import { ESTUDIANTE_FORM_FIELDS } from "../constants/estudianteFormFields";
import { createEstudianteService } from "../services/createEstudianteService";
import { useNavigate } from "react-router-dom";

export default function CrearEstudiante() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cursos: [],
    email: "",
  });
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({});
    try {
      await createEstudianteService({
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
         cursos: Array.isArray(formData.cursos) ? formData.cursos : [],
      });
      setAlert({ type: "success", message: "Estudiante creado correctamente" });
      setFormData({
        nombre: "",
        apellido: "",
        cursos: [],
        email: "",
      });
    } catch (err) {
      setAlert({
        type: "error",
        message: err.response?.data?.message || "Error al crear",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md"  sx={{ mt: 4, mb: 4,bgcolor: "#f3f4f6" }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/estudiantes">
          Estudiantes
        </Link>
        <Typography color="text.primary">Crear Nuevo</Typography>
      </Breadcrumbs>
      <Typography variant="h5" fontWeight={700}>
        Crear Nuevo Estudiante
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Rellene los siguientes campos para registrar un nuevo estudiante en el sistema.
      </Typography>

      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
      <Formulario
          fields={ESTUDIANTE_FORM_FIELDS}
          values={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
          alert={alert}
          submitLabel="Guardar Estudiante"
          onCancel={() => navigate("/estudiantes")}
        />
      </Box>
    </Container>
  );
}
