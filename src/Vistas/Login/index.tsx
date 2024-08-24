import "./Login.css";

const Login = () => {
  return (
    <div className="contenedor-login">
      <div className="contenedor-form">
        <h1>Iniciar Sesion</h1>
        <form className="contenedor-inputs">
          <input type="text" placeholder="Ingresa tu usuario" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <button>Accceder</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
