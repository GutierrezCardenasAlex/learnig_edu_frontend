import React from "react";
import { LATAM_FLAGS } from "../../../data/latinFlags";


const LatinFlagsSection = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20 mb-16">
      <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
        Plataforma disponible para toda{" "}
        <span className="text-yellow-300">Latinoamérica</span>
      </h2>

      <p className="text-richblack-300 text-center w-[80%] lg:w-[60%] mb-12">
        Estudiantes e instructores de todos los países latinoamericanos participan en nuestros cursos
        y enriquecen nuestra comunidad educativa.
      </p>

      {/* Grid de banderas */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {LATAM_FLAGS.map((flag, i) => (
          <div
            key={i}
            className="flex flex-col items-center hover:scale-105 duration-200 cursor-default"
          >
            <img
              src={`https://flagcdn.com/w80/${flag.code}.png`}
              alt={flag.name}
              className="w-12 h-8 object-cover rounded shadow"
            />
            <p className="text-white text-sm mt-2">{flag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatinFlagsSection;
