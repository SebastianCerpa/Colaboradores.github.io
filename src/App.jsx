import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador"; 
import Alert from "./components/Alert";
import { BaseColaboradores } from "./baseColaboradores"; 
import "./App.css";

export default function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); // useState para almacenar la lista de colaboradores

  // Función para agregar un nuevo colaborador
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]); // Se Agrega el nuevo colaborador a la lista
    e.preventDefault();
  };

  // Función para filtrar los colaboradores
  const filtrarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
      Object.values(colaborador).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(busqueda.toLowerCase())
      )
    );
    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <>
     <Alert error={false} mensaje={false} />
     <Formulario agregarColaborador={agregarColaborador} />
     <Buscador filtrarColaboradores={filtrarColaboradores}/>
     <Listado colaboradores={colaboradores} />
    </>
  );
}
