import signupImg from "../assets/Images/signup.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Registrate, millones de personas que aprenden a codificar con Academia SigZen de forma gratuita."
      description1="Desarrolle habilidades para el futuro."
      description2="Educación para asegurar el futuro de tu carrera."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup