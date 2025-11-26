import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Aprendizaje de clase mundial en",
    highlightText: "Cualquier Lugar",
    description:
      "Academia SigZen se asocia con más de 275 universidades y empresas líderes para brindar aprendizaje en línea flexible, asequible y relevante para el trabajo a personas y organizaciones de todo el mundo.",
    BtnText: "Aprende Más",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Plan de estudios basado en las necesidades de la industria",
    description:
      "¡Ahorra tiempo y dinero! El plan de estudios de Belajar está diseñado para ser más fácil de entender y se adapta a las necesidades del sector.",
  },
  {
    order: 2,
    heading: "Nuestros métodos de aprendizaje",
    description:
      "Academia SigZen se asocia con más de 275 universidades y empresas líderes para brindar",
  },
  {
    order: 3,
    heading: "Certificación reconocida",
    description:
      "SigZen Acedemia entrega certificados reconocidos por la industria para mejorar tu perfil profesional.",
  },
  {
    order: 4,
    heading: `Calificación "Auto-calificación"`,
    description:
      "Practica y evalúa tu conocimiento con cuestionarios interactivos y tareas prácticas.",
  },
  {
    order: 5,
    heading: "Listo para trabajar",
    description:
      "Adquiere habilidades prácticas y experiencia del mundo real para destacar en el competitivo mercado laboral.",
  },
];

const LearningGrid = () => {

  return (
    <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                  ? "bg-richblack-800 h-[294px]"
                  : "bg-transparent"
              } ${card.order === 3 && "lg:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;