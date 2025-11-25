import React from 'react'
import Instructor from '../../../assets/Images/teacher3.png'
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'
import Img from './../../common/Img';

import { motion } from 'framer-motion'
import { scaleUp } from './../../common/motionFrameVarients';

const InstructorSection = () => {
  return (
    <div>
      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center'>

        {/* Imagen del instructor */}
        <motion.div
          variants={scaleUp}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='lg:w-[50%]'
        >
          <Img
            src={Instructor}
            alt="Instructor"
            className='shadow-white rounded-3xl'
          />
        </motion.div>

        {/* Texto de invitación */}
        <div className='lg:w-[50%] flex flex-col'>
          
          <h2 className='text-3xl lg:text-4xl font-semobold w-[80%] mb-2'>
            Conviértete en
            <HighlightText text={"Instructor Profesional"} />
          </h2>

          <p className='font-medium text-[16px] w-[85%] text-richblack-300 mb-12'>
            Comparte tus conocimientos en áreas como salud, administración, gastronomía, educación, 
            diseño, idiomas, electricidad, marketing y muchas más.  
            Nuestra plataforma te brinda todas las herramientas necesarias para crear cursos,
            llegar a cientos de estudiantes y enseñar aquello que te apasiona.
          </p>

          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex flex-row gap-2 items-center'>
                Comienza a Enseñar Hoy
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>

        </div>

      </div>
    </div>
  )
}

export default InstructorSection
