import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from '../../../assets/Images/TimelineImage.png'

import Img from './../../common/Img';

import { motion } from 'framer-motion'
import { fadeIn } from '../../common/motionFrameVarients';

// ================================================================
// Nueva línea de tiempo enfocada en cursos online NO de programación
// ================================================================
const timeline = [
    {
        Logo: Logo1,
        heading: "Aprendizaje Accesible",
        Description: "Cursos en línea disponibles 24/7 para que estudies a tu ritmo sin horarios fijos.",
    },
    {
        Logo: Logo2,
        heading: "Educación Multidisciplinaria",
        Description: "Salud, administración, gastronomía, idiomas, diseño, contabilidad y más.",
    },
    {
        Logo: Logo3,
        heading: "Certificaciones Profesionales",
        Description: "Obtén certificados validados que impulsan tu perfil laboral.",
    },

    {
        Logo: Logo4,
        heading: "Apoyo Constante",
        Description: "Instructores y tutores disponibles para resolver tus dudas y acompañarte.",
    },
];

const TimelineSection = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-15 items-center'>

                {/* ============================================
                   Lista de elementos del timeline
                ============================================= */}
                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.1 }}
                    className='w-full lg:w-[45%] flex flex-col gap-5'
                >
                    {timeline.map((element, index) => (
                        <div className='flex flex-row gap-6' key={index}>

                            <div className='w-[50px] h-[50px] rounded-full bg-richblue-500 flex justify-center items-center'>
                                <img src={element.Logo} alt="timeline icon" />
                            </div>

                            <div>
                                <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                <p className='text-base text-richblack-200'>{element.Description}</p>
                            </div>

                        </div>
                    ))}
                </motion.div>

                {/* ============================================
                   Imagen lateral + estadísticas
                ============================================= */}
                <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.1 }}
                    className='relative shadow-blue-200'
                >
                    <Img 
                        src={timelineImage}
                        alt="timelineImage"
                        className='shadow-white object-cover h-fit scale-x-[-1] w-[550px]'
                    />

                    <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                                    left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-3xl'>

                        {/* Años de servicio */}
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                            <p className='text-2xl lg:text-3xl font-bold'>10+</p>
                            <p className='text-caribbeangreen-300 text-xs lg:text-sm'>
                                Años de experiencia educativa
                            </p>
                        </div>

                        {/* Cursos disponibles */}
                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-2xl lg:text-3xl font-bold'>250+</p>
                            <p className='text-caribbeangreen-300 text-xs lg:text-sm'>
                                Cursos en distintas áreas
                            </p>
                        </div>

                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default TimelineSection
