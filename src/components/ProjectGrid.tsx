import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../providers/LanguageContext";

const ProjectGrid: React.FC = () => {
    const { language } = useLanguage();
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => setProjects(data.projects.slice(0, Math.min(3, data.projects.length))))
          .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 mt-8 md:mt-12 place-items-center items-start">
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
}

export default ProjectGrid;