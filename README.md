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

1.Clonar el repositorio
```bash
git clone https://github.com/tuusuario/tuproject.git
cd tuproject
```
2.Instalar dependencias
```bash
npm install
```
3.Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto con el siguiente contenido:
```bash
VITE_API_URL=https://tu-api.vercel.app
```
4.Ejecutar el proyecto en modo desarrollo
```bash
npm run dev
```
El servidor local se iniciará en
http://localhost:5173

##Versión en producción

El proyecto se encuentra desplegado en Vercel Aqui: https://sistema-academico-pilar-tecno.vercel.app/

## Rutas principales

| Ruta | Descripción |
| ---- | ----------- |
| `/` | Portada con acceso al gestor académico |
| `/estudiantes` | Listado principal con filtros, búsqueda y paginación |
| `/estudiantes/crear` | Alta de nuevos estudiantes mediante formulario guiado |
| `/estudiantes/:id` | Detalle individual con información extendida y acciones |

## Capturas

### Vista Principal.
<img width="1258" height="596" alt="image" src="https://github.com/user-attachments/assets/6e6ea823-3167-40e9-ba9c-93fefcf9964c" />

### Desktop
<img width="1240" height="604" alt="image" src="https://github.com/user-attachments/assets/1232818d-26a5-494c-840c-f9dcd5fc97ad" />

### Mobile
<img width="521" height="587" alt="image" src="https://github.com/user-attachments/assets/766bde5e-7c53-4068-98a7-708e36e16d3f" />
