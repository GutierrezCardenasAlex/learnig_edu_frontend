import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Bienvenido de nuevo a SigZen"
      description1="Desarrolle habilidades para el futuro"
      description2="Educación para asegurar el futuro de tu carrera."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login