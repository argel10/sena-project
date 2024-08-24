import "./Registrarse.css";

const Registrarse = () => {
  return (
    <div className="contenedor-login">
      <div className="contenedor-form">
        <h1>Crear una cuenta</h1>
        <form className="contenedor-inputs">
          <input type="text" placeholder="Ingresa tu nombre" />
          <input type="text" placeholder="Ingresa tu apellido" />
          <input type="number" placeholder="Ingresa tu telefono" />
          <input type="text" placeholder="Ingresa tu usuario" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <button>Accceder</button>
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
