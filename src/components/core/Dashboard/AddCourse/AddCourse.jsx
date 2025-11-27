import { useEffect } from "react";
import RenderSteps from "./RenderSteps"



export default function AddCourse() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="flex w-full items-start gap-x-6">

      <div className="flex flex-1 flex-col">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">
          Añadir Cursos
        </h1>

        <div className="flex-1">
          <RenderSteps />
        </div>
      </div>

      {/* Course Upload Tips */}
      <div className="sticky top-10 hidden lg:block max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 ">
        <p className="mb-8 text-lg text-richblack-5">⚡ Instruccion para cargar curso</p>

        <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
          <li>Establezca la opción Precio del curso o hágalo gratuito.</li>
          <li>El tamaño estándar para la miniatura del curso es 1024x576.</li>
          <li>La sección de video controla el video, descripción general del curso.</li>
          <li>Crear curso es donde usted crea y organiza un curso.</li>
          <li>Agregue temas en la sección Creador de cursos para crear lecciones, cuestionarios y tareas.</li>
          <li>La información de la sección Datos adicionales aparece en la página única del curso.</li>
          <li>Hacer anuncios para notificar cualquier evento importante</li>
          <li>Notas para todos los estudiantes matriculados a la vez.</li>
        </ul>
      </div>
    </div>
  )
}