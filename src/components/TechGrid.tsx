import React, { useEffect, useState } from "react";
import TechCard from "./TechCard";

const TechGrid: React.FC = () => {
    const [techs,setTechs] = useState([]);

    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => setTechs(data.techs))
          .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 md:gap-y-12 gap-x-16 mt-8 md:mt-12 place-items-center items-start">
        {techs.map((tech, index) => (
            <TechCard key={index} label={tech['label']} image={tech['image']}/>
        ))}
    </div>
}

export default TechGrid;