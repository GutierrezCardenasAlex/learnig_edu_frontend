import React from 'react'
import HighlightText from './HighlightText'

import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"

import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
    return (
        <div className='mt-[130px] mb-10'>
            <div className='flex flex-col gap-5 items-center'>

                {/* Título principal */}
                <h2 className='text-3xl lg:text-4xl font-semibold text-center'>
                    Tu herramienta todo-en-uno para
                    <HighlightText text={" aprender cualquier habilidad"} />
                </h2>

                {/* Subtítulo */}
                <p className='lg:text-center text-richblack-600 mx-auto text-base font-medium lg:w-[70%]'>
                    Accede a cursos en distintas áreas como salud, administración, diseño, gastronomía,
                    idiomas, educación y más. Con seguimiento de progreso, evaluación continua,
                    planificación de estudio y aprendizaje a tu ritmo.
                </p>

                {/* Imágenes representativas */}
                <div className='flex flex-col lg:flex-row items-center justify-center mt-5'>
                    
                    <img
                        src={know_your_progress}
                        alt="progreso"
                        className='object-contain lg:-mr-32'
                    />

                    <img
                        src={compare_with_others}
                        alt="comparar"
                        className='object-contain'
                    />

                    <img
                        src={plan_your_lesson}
                        alt="planificar"
                        className='object-contain lg:-ml-36'
                    />

                </div>

                {/* Botón CTA */}
                <div className='w-fit mt-6'>
                    <CTAButton active={true} linkto={"/signup"}>
                        <span>Explorar Cursos</span>
                    </CTAButton>
                </div>

            </div>
        </div>
    )
}

export default LearningLanguageSection
