import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        Nos apasiona revolucionar la forma en que aprendemos. Nuestra 
        Plataforma de innovación <HighlightText text={"combina Tecnologia"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            expertos
        </span>
        , y comunidad para crear una 
        
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            experiencia educativa
        inigualable.
        </span> 
    </div>
  )
}

export default Quote