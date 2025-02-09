import React from "react";

interface TechCardProps {
    label: string;
    image: string;
}

const TechCard: React.FC<TechCardProps> = ({ label, image }) => {
    return <div className="w-tech-mobile md:w-tech-desktop flex flex-col items-center justify-center space-y-4">
        <img src={image} alt={label} className="w-full h-tech-mobile md:h-tech-desktop"/>
        <h1 className="text-sm font-light">{label}</h1>
    </div>
}

export default TechCard;