import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { BaseColaboradores } from '../baseColaboradores'; 

export default function Listado() {
  const [colaborador, setColaborador] = useState(BaseColaboradores)

  return (
    <>
    <div className='tabla'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre del Colaborador</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
       {colaborador.map(colaborador => (
        <tr key={colaborador.id}>
          <td>{colaborador.nombre}</td>
          <td>{colaborador.email}</td>
          <td>{colaborador.edad}</td>
          <td>{colaborador.cargo}</td>
          <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </>
  )
}
