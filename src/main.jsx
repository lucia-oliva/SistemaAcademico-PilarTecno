import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./theme.js";
import {EstudiantesProvider} from "./context/EstudiantesProvider.jsx"

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <EstudiantesProvider>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
    </EstudiantesProvider>
  </StrictMode>,
)
