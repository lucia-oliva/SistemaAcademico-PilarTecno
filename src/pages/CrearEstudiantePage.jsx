import { useState } from "react";
import { Container,Breadcrumbs, Link, Typography, Box,} from "@mui/material";
import Formulario from "../components/Forms/Formulario";
import { CURSOS_DISPONIBLES } from "./Estudiantes/constants"
import { createEstudianteService } from "../services/createEstudianteService";
import { useNavigate } from "react-router-dom";

export default function CrearEstudiante() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    curso: [],
    email: "",
  });
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);
  const fields = [
    { label: "Nombre(s)", name: "nombre", sm: 6, section: "personal" },
    { label: "Apellido(s)", name: "apellido", sm: 6, section: "personal" },
    {
      label: "Curso",
      name: "curso",
      select: true,
      multiple: true,     
      options: CURSOS_DISPONIBLES,
      section: "academica",
    },
    {
      label: "Correo Electrónico",
      name: "email",
      type: "email",
      sm: 6,
      section: "contacto",
    },
  ];

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((p) => ({
    ...p,
    [name]: Array.isArray(value) ? value : value,
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
        cursos: Array.isArray(formData.curso) ? formData.curso : [],
      });
      setAlert({ type: "success", message: "Estudiante creado correctamente" });
      setFormData({
        nombre: "",
        apellido: "",
        curso: [],
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
          fields={fields}
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
