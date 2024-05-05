import React, { useState } from "react";

const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarColaboradores(e.target.value);
  };

  return (
    <div className="cont_buscador">
      <p>Buscar Colaborador</p>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;


