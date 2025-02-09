import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLanguage } from "../providers/LanguageContext";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";


const Projects: React.FC = () => {
    const { language } = useLanguage();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => setProjects(data.projects))
          .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);
      
    
    return <div className="bg-canvas">
        <div className="mx-auto block w-mobile xl:w-desktop pt-6">

            {/* Header */}
            <Header page={1}/>

            

            {/* Projects */}
            <div className="w-full mb-24 md:mb-36">
                <div className="w-full flex flex-col items-center space-y-8 justify-center mb-16 mt-8">
                    <h1 className="font-bold text-3xl">{language == 'en' ? 'Projects' : 'Proyectos'}</h1>
                    <h1 className="font-medium text-center">{language == 'en' ? 'Welcome to my project portfolio! Here you\'ll find a collection of my work, showcasing a variety of software solutions and creative projects developed with dedication and passion.' : '¡Bienvenido a mi portafolio de proyectos! Aquí encontrarás una colección de mi trabajo, que muestra una variedad de soluciones de software y proyectos creativos desarrollados con dedicación y pasión.'}</h1>
                </div>
                
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 mt-8 md:mt-12 place-items-center items-start">
                    {projects.map((project, index) => (
                        <ProjectCard
                        key={index}
                        title={project['title']}
                        description={project[language == 'en' ? 'description_en' : 'description_es']}
                        image={project['img_path']}
                        tags={project['tags']}
                        href={project['href']}
                        />
                    ))}
                </div>
            </div>                      
        </div>
        <Footer/>
    </div>
};

export default Projects;