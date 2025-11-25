import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'

import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'
import Course_Slider from '../components/core/Catalog/Course_Slider'

import { getCatalogPageData } from '../services/operations/pageAndComponentData'
import { MdOutlineRateReview } from 'react-icons/md'
import { FaArrowRight } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from './../components/common/motionFrameVarients'

// Background images
import backgroundImg1 from '../assets/Images/random bg img/coding bg1.jpg'
import backgroundImg2 from '../assets/Images/random bg img/coding bg2.jpg'
import backgroundImg3 from '../assets/Images/random bg img/coding bg3.jpg'
import backgroundImg4 from '../assets/Images/random bg img/coding bg4.jpg'
import backgroundImg5 from '../assets/Images/random bg img/coding bg5.jpg'
import backgroundImg6 from '../assets/Images/random bg img/coding bg6.jpeg'
import backgroundImg7 from '../assets/Images/random bg img/coding bg7.jpg'
import backgroundImg8 from '../assets/Images/random bg img/coding bg8.jpeg'
import backgroundImg9 from '../assets/Images/random bg img/coding bg9.jpg'
import backgroundImg10 from '../assets/Images/random bg img/coding bg10.jpg'
import backgroundImg11 from '../assets/Images/random bg img/coding bg11.jpg'
import LatinFlagsSection from '../components/common/LatinFlagsSection'

const randomImages = [
    backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5,
    backgroundImg6, backgroundImg7, backgroundImg8, backgroundImg9, backgroundImg10,
    backgroundImg11,
]

const categoryID = "6506c9dff191d7ffdb4a3fe2"  // categoría por defecto

const Home = () => {

    // :::::::::::::::::::::::::::::::::::::::::::::::::::::
    // 1. Imagen aleatoria de fondo
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::
    const [backgroundImg, setBackgroundImg] = useState(null)

    useEffect(() => {
        setBackgroundImg(randomImages[Math.floor(Math.random() * randomImages.length)])
    }, [])


    // :::::::::::::::::::::::::::::::::::::::::::::::::::::
    // 2. Datos del catálogo (cursos)
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::
    const [catalogData, setCatalogData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCatalog = async () => {
            try {
                const res = await getCatalogPageData(categoryID, dispatch)
                setCatalogData(res)
            } catch (error) {
                console.error("Error cargando catálogos: ", error)
            }
        }
        fetchCatalog()
    }, [])


    return (
        <React.Fragment>

            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            {/* HERO SECTION - Background Random Image */}
            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg"></div>
            </div>


            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            {/* SECTION 1 - Hero principal */}
            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            <section className="relative h-[450px] md:h-[550px] flex flex-col justify-center mx-auto w-11/12 max-w-maxContent items-center text-white">

                <Link to={"/signup"}>
                    <div className="z-0 group p-1 mx-auto rounded-full bg-richblack-800 text-richblack-200 hover:scale-95 duration-200">
                        <div className="flex items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900">
                            <p>Conviértete en Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <motion.h1
                    variants={fadeIn('left', 0.1)}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl lg:text-4xl font-semibold mt-7 text-center"
                >
                    Impulsa tu futuro con  
                    <HighlightText text="Cursos Online Profesionales" />
                </motion.h1>

                <motion.p
                    variants={fadeIn('right', 0.1)}
                    initial="hidden"
                    whileInView="show"
                    className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300"
                >
                    Aprende desde cero hasta avanzado con clases, proyectos reales, certificaciones
                    y una plataforma moderna hecha para estudiantes latinoamericanos.
                </motion.p>

                <div className="flex gap-7 mt-8">
                    <CTAButton active linkto="/signup">Empezar Ahora</CTAButton>
                    <CTAButton active={false} linkto="/login">Ver Demostración</CTAButton>
                </div>
            </section>


            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            {/* CODE BLOCKS */}
            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            <section className="relative mx-auto w-11/12 max-w-maxContent text-white">

                {/* Code Block 1 */}
                <CodeBlocks
                    position="lg:flex-row"
                    heading={
                        <div className="text-3xl lg:text-4xl font-semibold">
                            Aprende desde cero con  
                            <HighlightText text="Métodos Modernos" />
                        </div>
                    }
                    subheading="Cursos impartidos por expertos con proyectos reales, evaluaciones, mentoría y comunidad activa."
                    ctabtn1={{ btnText: "Probar Ahora", linkto: "/signup", active: true }}
                    ctabtn2={{ btnText: "Más Información", linkto: "/login", active: false }}
                    codeblock={`<!DOCTYPE html>
<html>
<title>Plataforma de Cursos Online</title>
<body>
<p>Clases en video HD.</p>
<p>Certificaciones oficiales.</p>
<p>Proyectos reales incluidos.</p>
<p>Soporte de instructores.</p>
<p>Avanza a tu ritmo.</p>
</body>
</html>`}
                    codeColor="text-yellow-25"
                    backgroundGradient="code-block1-grad"
                />

                {/* Code Block 2 */}
                <CodeBlocks
    position="lg:flex-row-reverse"
    heading={
        <div className="text-3xl lg:text-4xl font-semibold">
            Comienza a  
            <HighlightText text="Aprender en Segundos" />
        </div>
    }
    subheading="Explora cursos, revisa tu progreso y accede a contenido interactivo desde el primer día."
    ctabtn1={{ btnText: "Empezar Ahora", linkto: "/signup", active: true }}
    ctabtn2={{ btnText: "Más Información", linkto: "/signup", active: false }}
    codeblock={`<!-- Vista previa de tu primera lección -->

<curso titulo="Introducción al Aprendizaje en Línea">
    <modulo numero="1" nombre="Primeros Pasos" />
    <descripcion>
        ¡Bienvenido a tu primera clase! Aquí aprenderás cómo usar la plataforma,
        acceder a materiales, realizar actividades y completar evaluaciones.
    </descripcion>
    <progreso valor="0%" />
</curso>`}
    codeColor="text-white"
    backgroundGradient="code-block2-grad"
/>


                {/* Course sliders */}
                <div className="mt-14">
                    <h2 className="text-white text-2xl mb-6">Cursos Recomendados 🏆</h2>
                    <Course_Slider Courses={catalogData?.selectedCategory?.courses} />
                </div>

                <div className="mt-10">
                    <h2 className="text-white text-2xl mb-6">Más Inscritos Hoy 🔥</h2>
                    <Course_Slider Courses={catalogData?.mostSellingCourses} />
                </div>

                <ExploreMore />
            </section>


            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            {/* SECTION 2 - Otros módulos */}
            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            <section className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[310px] flex flex-col items-center justify-end p-10">
                    <div className="flex gap-7">
                        <CTAButton active linkto="/signup">
                            <div className="flex items-center gap-3">
                                Ver Catálogo Completo <FaArrowRight />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto="/signup">Más Información</CTAButton>
                    </div>
                </div>

                <div className="w-11/12 mx-auto max-w-maxContent mt-[95px]">

                    <div className="flex flex-col lg:flex-row gap-10 mb-10">
                        <h2 className="text-3xl lg:text-4xl font-semibold lg:w-[45%]">
                            Obtén las habilidades para un  
                            <HighlightText text="Trabajo de Alto Valor" />
                        </h2>

                        <div className="lg:w-[40%] flex flex-col gap-10">
                            <p>Hoy en día el mercado laboral exige habilidades digitales reales.</p>
                            <CTAButton active linkto="/signup">Más Información</CTAButton>
                        </div>
                    </div>

                    <TimelineSection />
                    <LearningLanguageSection />
                </div>
            </section>


            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            {/* SECTION 3 - Instructores y Reviews */}
            {/* ::::::::::::::::::::::::::::::::::::::::: */}
            <section className="text-white bg-richblack-900 px-3">
                <InstructorSection />

                <h1 className="text-center text-3xl lg:text-4xl font-semibold mt-8 flex items-center justify-center gap-3">
                    Opiniones de Estudiantes <MdOutlineRateReview className="text-yellow-25" />
                </h1>
                <ReviewSlider />
                <LatinFlagsSection />
            </section>

            <Footer />

        </React.Fragment>
    )
}

export default Home



// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
// import { useDispatch } from 'react-redux';

// import HighlightText from '../components/core/HomePage/HighlightText'
// import CTAButton from "../components/core/HomePage/Button"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import TimelineSection from '../components/core/HomePage/TimelineSection'
// import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
// import InstructorSection from '../components/core/HomePage/InstructorSection'
// import Footer from '../components/common/Footer'
// import ExploreMore from '../components/core/HomePage/ExploreMore'
// import ReviewSlider from '../components/common/ReviewSlider'
// import Course_Slider from '../components/core/Catalog/Course_Slider'

// import { getCatalogPageData } from '../services/operations/pageAndComponentData'

// import { MdOutlineRateReview } from 'react-icons/md'
// import { FaArrowRight } from "react-icons/fa"

// import { motion } from 'framer-motion'
// import { fadeIn, } from './../components/common/motionFrameVarients';

// // background random images
// import backgroundImg1 from '../assets/Images/random bg img/coding bg1.jpg'
// import backgroundImg2 from '../assets/Images/random bg img/coding bg2.jpg'
// import backgroundImg3 from '../assets/Images/random bg img/coding bg3.jpg'
// import backgroundImg4 from '../assets/Images/random bg img/coding bg4.jpg'
// import backgroundImg5 from '../assets/Images/random bg img/coding bg5.jpg'
// import backgroundImg6 from '../assets/Images/random bg img/coding bg6.jpeg'
// import backgroundImg7 from '../assets/Images/random bg img/coding bg7.jpg'
// import backgroundImg8 from '../assets/Images/random bg img/coding bg8.jpeg'
// import backgroundImg9 from '../assets/Images/random bg img/coding bg9.jpg'
// import backgroundImg10 from '../assets/Images/random bg img/coding bg10.jpg'
// import backgroundImg111 from '../assets/Images/random bg img/coding bg11.jpg'


// const randomImges = [
//     backgroundImg1,
//     backgroundImg2,
//     backgroundImg3,
//     backgroundImg4,
//     backgroundImg5,
//     backgroundImg6,
//     backgroundImg7,
//     backgroundImg8,
//     backgroundImg9,
//     backgroundImg10,
//     backgroundImg111,
// ];

// // hardcoded



// const Home = () => {

//     // get background random images
//     const [backgroundImg, setBackgroundImg] = useState(null);

//     useEffect(() => {
//         const bg = randomImges[Math.floor(Math.random() * randomImges.length)]
//         setBackgroundImg(bg);
//     }, [])

//     // console.log('bg ==== ', backgroundImg)

//     // get courses data
//     const [CatalogPageData, setCatalogPageData] = useState(null);
//     const categoryID = "6506c9dff191d7ffdb4a3fe2" // hard coded
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchCatalogPageData = async () => {

//             const result = await getCatalogPageData(categoryID, dispatch);
//             setCatalogPageData(result);
//             // console.log("page data ==== ",CatalogPageData);
//         }
//         if (categoryID) {
//             fetchCatalogPageData();
//         }
//     }, [categoryID])


//     // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)


//     return (
//         <React.Fragment>
//             {/* background random image */}
//             <div>
//                 <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
//                     <img src={backgroundImg} alt="Background"
//                         className="w-full h-full object-cover "
//                     />

//                     <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
//                 </div>
//             </div>

//             <div className=' '>
//                 {/*Section1  */}
//                 <div className='relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white '>

//                     <Link to={"/signup"}>
//                         <div className='z-0 group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
//                                         transition-all duration-200 hover:scale-95 w-fit'>
//                             <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
//                               transition-all duration-200 group-hover:bg-richblack-900'>
//                                 <p>Conviertete en Instructor</p>
//                                 <FaArrowRight />
//                             </div>
//                         </div>

//                     </Link>

//                     <motion.div
//                         variants={fadeIn('left', 0.1)}
//                         initial='hidden'
//                         whileInView={'show'}
//                         viewport={{ once: false, amount: 0.1 }}
//                         className='text-center text-3xl lg:text-4xl font-semibold mt-7  '
//                     >
//                         Empodera tu futuro con
//                         <HighlightText text={"Habilidades de Aprendizaje"} />
//                     </motion.div>

//                     <motion.div
//                         variants={fadeIn('right', 0.1)}
//                         initial='hidden'
//                         whileInView={'show'}
//                         viewport={{ once: false, amount: 0.1 }}
//                         className=' mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300'
//                     >
//                         Con nuestros cursos de aprendizaje en línea, puede aprender a su propio ritmo, desde cualquier parte del mundo, y obtener acceso a una gran cantidad de recursos, incluidos proyectos prácticos, cuestionarios y comentarios personalizados de los instructores.
//                     </motion.div>


//                     <div className='flex flex-row gap-7 mt-8'>
//                         <CTAButton active={true} linkto={"/signup"}>
//                             Mas Informacion
//                         </CTAButton>

//                         <CTAButton active={false} linkto={"/login"}>
//                             Reservar Demostracion
//                         </CTAButton>
//                     </div>
//                 </div>

//                 {/* animated code */}
//                 <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
//                     {/* Code block 1 */}
//                     <div className=''>
//                         <CodeBlocks
//                             position={"lg:flex-row"}
//                             heading={
//                                 <div className='text-3xl lg:text-4xl font-semibold'>
//                                     Desbloquea tu
//                                     <HighlightText text={"potencial de Aprendizaje"} />
//                                     con nuestros cursos online
                                   
//                                 </div>
//                             }
//                             subheading={
//                                 "Nuestros cursos están diseñados e impartidos por expertos de la industria que tienen años de experiencia en codificación y les apasiona compartir sus conocimientos con usted."
//                             }
//                             ctabtn1={
//                                 {
//                                     btnText: "try it yourself",
//                                     linkto: "/signup",
//                                     active: true,
//                                 }
//                             }
//                             ctabtn2={
//                                 {
//                                     btnText: "learn more",
//                                     linkto: "/login",
//                                     active: false,
//                                 }
//                             }

//                             codeblock={`<!DOCTYPE html>
// <html>
// <title>Seguridad de Nuestro Sistema</title>
// <body>
// <p>Los datos viajan protegidos mediante HTTPS.</p>
// <p>Las contraseñas se guardan con hash seguro.</p>
// <p>Los tokens de sesión se generan de forma aleatoria.</p>
// <p>Solo usuarios autorizados pueden entrar.</p>
// <p>Se revisa todo dato antes de procesarlo.</p>
// <p>Se bloquean scripts externos no confiables.</p>
// <p>El contenido no puede ser alterado.</p>
// <p>La información sensible se mantiene oculta.</p>
// <p>Cada acción queda registrada.</p>
// <p>Se previenen ataques XSS y CSRF.</p>
// <p>El sistema mantiene todo cifrado y protegido.</p>
// </body>
// </html>
// `}
//                             codeColor={"text-yellow-25"}
//                             backgroundGradient={"code-block1-grad"}
//                         />
//                     </div>


//                     {/* Code block 2 */}
//                     <div>
//                         <CodeBlocks
//                             position={"lg:flex-row-reverse"}
//                             heading={
//                                 <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
//                                     Start
//                                     <HighlightText text={"coding in seconds"} />
//                                 </div>
//                             }
//                             subheading={
//                                 "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
//                             }
//                             ctabtn1={{
//                                 btnText: "Continue Lesson",
//                                 link: "/signup",
//                                 active: true,
//                             }}
//                             ctabtn2={{
//                                 btnText: "Learn More",
//                                 link: "/signup",
//                                 active: false,
//                             }}
//                             codeColor={"text-white"}
//                             codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
//                             backgroundGradient={"code-block2-grad"}
//                         />
//                     </div>

//                     {/* course slider */}
//                     <div className='mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
//                         <h2 className='text-white mb-6 text-2xl '>
//                             Popular Picks for You 🏆
//                         </h2>
//                         <Course_Slider Courses={CatalogPageData?.selectedCategory?.courses} />
//                     </div>
//                     <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
//                         <h2 className='text-white mb-6 text-2xl '>
//                             Top Enrollments Today 🔥
//                         </h2>
//                         <Course_Slider Courses={CatalogPageData?.mostSellingCourses} />
//                     </div>


//                     <ExploreMore />
//                 </div>

//                 {/*Section 2  */}
//                 <div className='bg-pure-greys-5 text-richblack-700 '>
//                     <div className='homepage_bg h-[310px]'>
//                         <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
//                             <div className='h-[150px]'></div>
//                             <div className='flex flex-row gap-7 text-white '>
//                                 <CTAButton active={true} linkto={"/signup"}>
//                                     <div className='flex items-center gap-3' >
//                                         Explore Full Catalog
//                                         <FaArrowRight />
//                                     </div>
//                                 </CTAButton>
//                                 <CTAButton active={false} linkto={"/signup"}>
//                                     <div>
//                                         Learn more
//                                     </div>
//                                 </CTAButton>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
//                         <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]'>
//                             <div className='text-3xl lg:text-4xl font-semibold w-full lg:w-[45%]'>
//                                 Get the Skills you need for a
//                                 <HighlightText text={"Job that is in demand"} />
//                             </div>

//                             <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>
//                                 <div className='text-[16px]'>
//                                     The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
//                                 </div>
//                                 <CTAButton active={true} linkto={"/signup"}>
//                                     <div>
//                                         Learn more
//                                     </div>
//                                 </CTAButton>
//                             </div>
//                         </div>


//                         {/* leadership */}
//                         <TimelineSection />

//                         <LearningLanguageSection />

//                     </div>

//                 </div>


//                 {/*Section 3 */}
//                 <div className='mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
//                     <InstructorSection />

//                     {/* Reviws from Other Learner */}
//                     <h1 className="text-center text-3xl lg:text-4xl font-semibold mt-8 flex justify-center items-center gap-x-3">
//                         Reviews from other learners <MdOutlineRateReview className='text-yellow-25' />
//                     </h1>
//                     <ReviewSlider />
//                 </div>

//                 {/*Footer */}
//                 <Footer />
//             </div >
//         </React.Fragment>
//     )
// }

// export default Home
