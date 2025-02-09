import React, { useEffect, useState } from "react";
import { useLanguage } from "../providers/LanguageContext";
import LottieAnimation from "./LottieAnimation";

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const [channels,setChannels] = useState([]);

    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => setChannels(data.channels))
          .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return <footer id="footer" className="w-full bg-gradient-to-b from-[#291AFF] to-[#150E77] p-12 flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl text-center mb-4 text-center">
            {language === 'en' ? (
                <>
                    Want to 
                    <span className="text-dark"> get in touch</span>?
                </>
            ) : (
                <>
                    ¿Quieres ponerte
                    <span className="text-dark"> en contacto</span>?
                </>
            )}
        </h1>
        <h1 className="font-medium text-center mb-12 md:mb-20">
            {language == 'en' ? 'Feel free to reach out through any of the available channles.' : 'No dudes en contactarme a través de cualquiera de los canales disponibles.'}
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-24 mb-48">
            <div className="w-1/2 md:w-1/6">
                <LottieAnimation path={"/assets/lotties/footer.json"} className="w-full"/>
            </div>
            <div className="w-12/12 md:w-2/12 flex flex-col space-y-4 items-center ">
                {channels.map((channel, index) => (
                    <a href={channel['href']} className="w-full flex flex-row items-center justify-start space-x-4">
                        <div className="w-12 h-12 bg-primary hover:shadow-custom-primary rounded-full p-4">
                            <img className="w-full h-full" src={channel['image']} alt={channel['label']}/>
                        </div>
                        <h1 className="text-sm font-light  underline">{channel['label']}</h1>
                    </a>
                ))}
            </div>
           
        </div>
        

        <h1 className="text-sm font-light text-center">{language == 'en' ? '© 2025 paulfloresdev. All rights reserved.' : '© 2025 paulfloresdev. Todos los derechos reservados'}</h1>
    </footer>
}

export default Footer;