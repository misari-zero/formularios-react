import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current);

    // console.log(...datos.entries());

    const objetosDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetosDatos);
    const { todoDescripcion, todoName } = objetosDatos;
    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("está vacío");
      return;
    }

    console.log("pasó validaciones");
  };

  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          defaultValue="Descripcion #01"
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </>
  );
};

export default FormNoControlado;
