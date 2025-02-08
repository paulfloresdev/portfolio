import React, { useEffect, useState } from "react";
import CircularButton from "../components/CircularButton";
import Header from "../components/Header";
import LottieAnimation from "../components/LottieAnimation";
import { useLanguage } from "../providers/LanguageContext";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
    const { language } = useLanguage();
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          /*.then((data) => setProjects(data.projects))*/
          .then((data) => setProjects(data.projects.slice(0, Math.min(3, data.projects.length))))
          .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);
      
    
    return <div className="bg-canvas">
        <div className="mx-auto block w-mobile xl:w-desktop pt-6">

            {/* Header */}
            <Header page={0}/>

            {/* Hero */}
            <div className="w-full flex flex-col md:flex-row md:space-y-0 md:justify-between">
                <LottieAnimation path={"/assets/lotties/hero.json"} className="w-5/6 md:w-full mx-auto md:hidden transform scale-x-[-1]"/>
                <div className="w-full md:w-1/2 md:mr-8 flex flex-col items-center justify-center space-y-1">
                    <h1 className="font-medium">
                        {language == 'en' ? 'Hi, I\'m Paul Flores.' : 'Hola, soy Paul Flores.'}
                    </h1>
                    <h1 className="font-bold text-3xl text-center">
                        {language === 'en' ? (
                            <>
                                Looking for a developer skilled in 
                                <span className="text-primary"> web, mobile, backend and UI/UX</span>? 
                                I'm your go-to expert.
                            </>
                        ) : (
                            <>
                                Buscando un desarrollador experto en  
                                <span className="text-primary"> web, móvil, backend y UI/UX</span>? 
                                Soy tu mejor opción.
                            </>
                        )}
                    </h1>
                    <div className="h-3"></div>
                    <CircularButton type="solid" onClick={() =>{}} className="block md:hidden w-7/12">{language === 'en' ? 'Contact me' : 'Contáctame'}</CircularButton>
                    <div className="h-3 md:hidden"></div>
                    <CircularButton type="outlined" onClick={() =>{}}>{language === 'en' ? 'Tell me more' : 'Cuéntame más'}</CircularButton>
                </div>
                <LottieAnimation path={"/assets/lotties/hero.json"} className="hidden md:block w-1/2 transform scale-x-[-1]"/>     
            </div>

            <div className="h-32"></div>

            {/* Projects */}
            <div className="w-full">
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 items-center justify-center">
                    <div className="w-1/3 h-1 bg-primary md:hidden"></div>
                    <h1 className="w-auto text-lg font-medium">{language == 'en' ? 'Here are a few of my projects.' : 'Aquí están algunos de mis proyectos.'}</h1>
                    <div className="flex-grow h-1 bg-primary hidden md:block"></div>
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
                <div className="w-full flex justify-center mt-8">
                    <CircularButton type="outlined" onClick={() => navigate('/projects')} className='w-2/3 md:w-5/12'>{language === 'en' ? 'See more' : 'Ver más'}</CircularButton>
                </div>
                


            </div>                
            



            <div className="h-48"></div>
        </div>
    </div>
};

export default Home;