import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <Box className="home-root">
      <Container maxWidth="md" className="home-main">
        <Stack spacing={3} textAlign="center" alignItems="center">
          <Typography variant="poster" className="home-title">
            Sistema de Gestion Academico{" "} <br/>
            <span className="home-title-accent">PILAR TECNO</span>
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/estudiantes")}
            className="home-button"
            endIcon={<span>→</span>}
          >
            IR AL GESTOR
          </Button>
        </Stack>
      </Container>

      <Box component="footer" className="home-footer">
        <Typography variant="caption" color="text.secondary">
          © 2025 Oliva Ana Lucia. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
