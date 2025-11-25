import React, { useState, useEffect } from "react";
import { HomePageExplore } from "../../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

// Tabs de categorías para cursos online
const categoryTabs = [
  "Gratis",
  "Principiantes",
  "Más populares",
  "Rutas de habilidades",
  "Rutas profesionales",
];

const ExploreMore = () => {
  const [activeCategory, setActiveCategory] = useState(categoryTabs[0]);
  const [courses, setCourses] = useState([]);
  const [currentCourseCard, setCurrentCourseCard] = useState("");

  // ------------------------------------------------------------
  // Cargar cursos iniciales (por defecto categoría 0)
  // ------------------------------------------------------------
  useEffect(() => {
    const firstCategory = HomePageExplore[0];
    setCourses(firstCategory.courses);
    setCurrentCourseCard(firstCategory.courses[0].heading);
  }, []);

  // ------------------------------------------------------------
  // Cambiar de categoría
  // ------------------------------------------------------------
  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);

    const filtered = HomePageExplore.find((cat) => cat.tag === categoryName);

    if (!filtered || filtered.courses.length === 0) {
      setCourses([]);
      setCurrentCourseCard("");
      return;
    }

    setCourses(filtered.courses);
    setCurrentCourseCard(filtered.courses[0].heading);
  };

  return (
    <div className="w-full">

      {/* --------------------------------------------------------
          Título principal
      -------------------------------------------------------- */}
      <header className="text-center my-10">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Explora nuestros
          <HighlightText text={"Cursos Online"} />
        </h2>
        <p className="text-richblack-300 text-base lg:text-lg font-semibold mt-1">
          Encuentra cursos para comenzar, mejorar o especializarte.
        </p>
      </header>

      {/* --------------------------------------------------------
          Categorías (TABS)
      -------------------------------------------------------- */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {categoryTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(tab)}
            className={`text-[16px] px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer 
              flex items-center gap-2 
              ${activeCategory === tab
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "text-richblack-200 hover:bg-richblack-900 hover:text-richblack-5"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Separación para layout */}
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* --------------------------------------------------------
          CARDS DE CURSOS
      -------------------------------------------------------- */}
      <div className="
        lg:absolute 
        flex flex-wrap justify-center lg:justify-between 
        gap-10 lg:gap-0 
        w-full 
        lg:bottom-0 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[50%]
        mb-7 lg:mb-0 px-3
      ">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              cardData={course}
              currentCard={currentCourseCard}
              setCurrentCard={setCurrentCourseCard}
            />
          ))
        ) : (
          <p className="text-white text-lg">No hay cursos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ExploreMore;
