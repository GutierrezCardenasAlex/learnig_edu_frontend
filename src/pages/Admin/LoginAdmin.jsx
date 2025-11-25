import { useState } from "react"
import { useNavigate } from "react-router-dom"

import loginAdminImg from "../../assets/Images/loginAdmin.jpg"
import Template from "../../components/core/Auth/Template"

function LoginAdmin() {
  const navigate = useNavigate()

  const [password, setPassword] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [access, setAccess] = useState(false)

  const realPassword = "12345" // 🔒 Puedes cambiarlo luego

  const handleAccess = (e) => {
    e.preventDefault()

    if (password === realPassword) {
      setAccess(true)
    } else {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)

      if (newAttempts >= 3) {
        navigate("/") // ❌ Falló 3 veces → redirige
      } else {
        alert(`Contraseña incorrecta. Intentos restantes: ${3 - newAttempts}`)
      }
    }
  }

  // ----------------------------------
  // 🔐 Pantalla previa de contraseña
  // ----------------------------------
  if (!access) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleAccess}
          className="p-6 bg-white shadow-xl rounded-xl w-80 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Acceso restringido</h2>
          <p className="text-sm text-gray-600 mb-4">
            Ingresa la contraseña para continuar
          </p>

          <input
            type="password"
            placeholder="Contraseña"
            className="border w-full p-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Acceder
          </button>

          <p className="text-xs mt-3 text-gray-500">
            Intentos restantes: {3 - attempts}
          </p>
        </form>
      </div>
    )
  }

  // ----------------------------------
  // ✔️ Si la contraseña es correcta → mostrar componente
  // ----------------------------------
  return (
    <Template
      title="Bienvenido Administrador"
      description1="Establece y gestiona la plataforma educativa."
      description2="Listo para administrar el aprendizaje."
      image={loginAdminImg}
      formType="login"
    />
  )
}

export default LoginAdmin
