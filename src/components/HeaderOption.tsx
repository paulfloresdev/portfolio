import React from "react";

interface HeaderOptionProps {
    label: string;
    href: string;
    focus: boolean;
    classname?: string;
}

const HeaderOption: React.FC<HeaderOptionProps> = ({label, href, focus, classname}) => {
    return <a href={href} className={`flex flex-col space-y-2 items-center justify-center ${classname}`}>
        <h1 className={`${focus ? 'text-white' : 'text-secondary'} text-base hover:text-white font-medium`}>{label}</h1>
        <div className={`${focus ? 'bg-primary' : 'bg-canvas'} w-full h-1`}></div>
    </a>
}

export default HeaderOption;


