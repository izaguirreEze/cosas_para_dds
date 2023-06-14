import React from 'react';

const ListadoClientes = ({ lista }) => {
  
    return (
      <div className="container mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>IDCliente</th>
              <th>NombreYApellido</th>
              <th>DNI</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((cliente) => (
               <tr key={cliente.IdCliente}>
                <td>{cliente.IdCliente}</td>
                <td>{cliente.ApellidoYNombre}</td>
                <td>{cliente.DNI}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ListadoClientes;