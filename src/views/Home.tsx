import React from "react";
import CircularButton from "../components/CircularButton";
import Header from "../components/Header";
import LottieAnimation from "../components/LottieAnimation";
import { useLanguage } from "../providers/LanguageContext";


const Home: React.FC = () => {
    const { language } = useLanguage();

    
    return <>
        <div className="mx-auto block w-mobile xl:w-desktop pt-6">
          {/* Header */}
          <Header page={0}/>
          {/* Hero */}
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between">
            <LottieAnimation path={"/assets/lotties/hero.json"} className="w-full md:hidden transform scale-x-[-1]"/>
            <div className="w-full md:w-1/2 md:mr-8 flex flex-col items-center justify-center space-y-4">
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
                <div className="h-4"></div>
                <CircularButton type="outlined" onClick={() =>{}}>{language === 'en' ? 'Tell me more' : 'Cuéntame más'}</CircularButton>
            </div>
            <LottieAnimation path={"/assets/lotties/hero.json"} className="hidden md:block w-1/2 transform scale-x-[-1]"/>
           
          </div>
        </div>
    </>
};

export default Home;