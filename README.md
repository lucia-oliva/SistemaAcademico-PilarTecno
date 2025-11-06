# Sistema Académico Pilar Tecno

Sistema Académico Pilar Tecno es una aplicación web desarrollada con React + Vite y Material UI, pensada para gestionar los estudiantes de manera moderna, accesible y fácil de mantener.
Permite listar, filtrar, crear, editar y eliminar estudiantes desde una interfaz responsiva basada en componentes reutilizables.

## Características principales

- **Listado dinámico de estudiantes** con filtros por curso, búsqueda en vivo y paginación adaptable a diferentes resoluciones.
- **Vista de detalle** con información ampliada de cada estudiante, cursos inscriptos y acciones rápidas.
- **Edición en modales** con estados de carga y mensajes de confirmación para garantizar una experiencia fluida.
- **Eliminación segura** mediante diálogos de confirmación y manejo de errores controlado.
- **Diseño 100% responsivo** (tabla enriquecida en desktop y tarjetas interactivas en mobile).

## Tecnologías utilizadas

| Tipo | Tecnología |
| ---- | ---------- |
| Framework | React 19 + Vite |
| UI Library | Material UI 7 + Emotion |
| Ruteo | React Router DOM v7 |
| Estado Global | React Context + useReducer |
| Solicitudes HTTP | Axios |
| Fuentes | @fontsource/roboto |

## Estructura principal

```
src/
├── App.jsx
├── components/
│   ├── Layout.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Forms/
│   │   └── Formulario.jsx
│   ├── Modals/
│   │   ├── ConfirmDeleteModal.jsx
│   │   └── EditarEstudianteModal.jsx
│   └── UI/
│       └── Alertas.jsx
├── constants/
│   └── estudianteFormFields.js
├── context/
│   ├── EstudiantesContex.js
│   ├── EstudiantesProvider.jsx
│   ├── useEstudiantes.js
│   └── reducers/
│       └── estudiantesReducer.js
├── hooks/
│   ├── useEditarEstudianteModal.js
│   └── useEliminarEstudianteModal.js
├── pages/
│   ├── Home.jsx
│   ├── CrearEstudiantePage.jsx
│   ├── DetalleEstudiante/
│   │   ├── DetalleEstudiantePage.jsx
│   │   ├── components/
│   │   └── Hooks/
│   └── Estudiantes/
│       ├── PageEstudiantes.jsx
│       ├── components/
│       ├── constants.js
│       └── hooks/
├── services/
│   ├── createEstudianteService.js
│   ├── deleteEstudianteService.js
│   ├── getEstudiantesService.js
│   ├── getEstudiantePorIdService.js
│   └── updateEstudianteService.js
├── styles/
│   └── App.css
├── theme.js
└── main.jsx
```

## Configuración del proyecto

//esperar a subir a vercel

## Rutas principales

| Ruta | Descripción |
| ---- | ----------- |
| `/` | Portada con acceso al gestor académico |
| `/estudiantes` | Listado principal con filtros, búsqueda y paginación |
| `/estudiantes/crear` | Alta de nuevos estudiantes mediante formulario guiado |
| `/estudiantes/:id` | Detalle individual con información extendida y acciones |

## Capturas