import { useState } from 'react';
import Alert from './Alert';
import { BaseColaboradores } from '../baseColaboradores';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
 
    if (nombre === '' || email === '' || edad === '' || cargo === '' || telefono === '') {
      setError(true);
      setMensaje('Completa todos los campos');
      return;
    }

    const nuevoColaborador = {
      id: Math.random(),
      nombre: nombre,
      email: email,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    };

    BaseColaboradores.push(nuevoColaborador);
    
    setError(false);
    setMensaje('Colaborador agregado exitosamente');
    setNombre('');
    setEmail('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <form className="formulario" onSubmit={registrar}>
      <div className="cont-titulo">
        <h1>Agregar Colaborador</h1>
      </div>
      <div className="form1">
        <input placeholder='Nombre del Colaborador' type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
      </div>
      <div className="form1">
        <input placeholder='Email del Colaborador' type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
      </div>
      <div className="form1">
        <input placeholder='Edad del Colaborador' type="text" name="edad" className="form-control" onChange={(e) => setEdad(e.target.value)} value={edad}/>
      </div>
      <div className="form1">
        <input placeholder='Cargo del Colaborador' type="text" name="cargo" className="form-control" onChange={(e) => setCargo(e.target.value)} value={cargo}/>
      </div>
      <div className="form1">
        <input placeholder='Telefono del Colaborador' type="text" name="telefono" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
      </div>
      <button type="submit" className="boton">Registrar</button>
      <div className='ultimocontenido'>
        {error && <Alert error={true} mensaje={mensaje} />}
        {!error && mensaje && <Alert error={false} mensaje={mensaje} />}
      </div>
    </form>
  )
}
