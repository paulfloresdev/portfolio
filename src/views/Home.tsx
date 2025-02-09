import React from "react";
import CircularButton from "../components/CircularButton";
import Header from "../components/Header";
import LottieAnimation from "../components/LottieAnimation";
import { useLanguage } from "../providers/LanguageContext";
import ProjectGrid from "../components/ProjectGrid";
import TechGrid from "../components/TechGrid";
import Footer from "../components/Footer";


const Home: React.FC = () => {
    const { language } = useLanguage();

    return <div className="bg-canvas">
        <div className="mx-auto block w-mobile xl:w-desktop pt-6">

            {/* Header */}
            <Header page={0} />

            {/* Hero */}
            <div className="w-full flex flex-col md:flex-row md:space-y-0 md:justify-between mb-32">
                <LottieAnimation path={"/assets/lotties/hero.json"} className="w-5/6 md:w-full mx-auto md:hidden transform scale-x-[-1]" />
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
                    <CircularButton type="solid" href="#footer" className="block md:hidden w-7/12">{language === 'en' ? 'Contact me' : 'Contáctame'}</CircularButton>
                    <div className="h-3 md:hidden"></div>
                    <CircularButton type="outlined" href="#projects">{language === 'en' ? 'Tell me more' : 'Cuéntame más'}</CircularButton>
                </div>
                <LottieAnimation path={"/assets/lotties/hero.json"} className="hidden md:block w-1/2 transform scale-x-[-1]" />
            </div>

            {/* Projects */}
            <div id="projects" className="w-full mb-24 md:mb-48">
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 items-center justify-center">
                    <div className="w-1/3 h-1 bg-primary md:hidden"></div>
                    <h1 className="w-auto text-lg font-medium">{language == 'en' ? 'Here are a few of my projects.' : 'Aquí están algunos de mis proyectos.'}</h1>
                    <div className="flex-grow h-1 bg-primary hidden md:block"></div>
                </div>
                {/* Grid */}
                <ProjectGrid />
                <div className="w-full flex justify-center mt-8">
                    <CircularButton type="outlined" href="/projects" className='w-2/3 md:w-5/12'>{language === 'en' ? 'See more' : 'Ver más'}</CircularButton>
                </div>
            </div>

            {/* Technologies */}
            <div id="techs" className="w-full flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 mb-28 md:mb-48">
                <LottieAnimation path={"/assets/lotties/techs.json"} className="w-2/3 md:w-1/3" />
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="font-bold text-3xl text-center">
                        {language === 'en' ? (
                            <>
                                Technologies and languages I use to turn
                                <span className="text-primary"> ideas </span>
                                into impactful
                                <span className="text-primary"> solutions.</span>
                            </>
                        ) : (
                            <>
                                Tecnologías y lenguajes que utilizo para convertir
                                <span className="text-primary"> ideas </span>
                                en
                                <span className="text-primary"> soluciones impactantes.</span>
                            </>
                        )}
                    </h1>
                    {/* Grid */}
                    <TechGrid />
                </div>
            </div>

        </div>
        <Footer />
    </div>
};

export default Home;