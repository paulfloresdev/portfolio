import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, tags, href}) => {
    return <a href={href} className="h-auto flex flex-col items-start justify-center space-y-2 w-img-sm md:w-img-md lg:w-img-lg xl:w-img-xl mb-2 md:mb-10">
        <div className="mb-2 w-full h-img-sm md:h-img-md lg:h-img-lg xl:h-img-xl p-2 hover:p-0 hover:border-0 border-solid border-2 border-white rounded-xl">
            <img src={image} alt="" className="w-full h-full bg-buttonHover rounded-md object-fit"/>
        </div>
        <h1 className="font-medium">{title}</h1>
        <h1 className="text-secondary font-light">{description}</h1>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <h1 key={index} className="text-secondary text-sm font-light bg-button hover:bg-buttonHover px-2 py-1 rounded-lg">{tag}</h1>
            ))}
        </div>

    </a>
}

export default ProjectCard;


