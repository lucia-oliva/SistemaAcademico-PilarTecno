import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from "./components/Layout";
import PageEstudiantes from './pages/Estudiantes/PageEstudiantes';


function App() {
  return (
   <BrowserRouter> 
      <Routes>
         <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/estudiantes" element={<PageEstudiantes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
