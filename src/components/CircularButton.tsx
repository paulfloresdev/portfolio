import React from "react";

interface CircularButtonProps {
    type: 'outlined' | 'solid';
    href: string;
    children: React.ReactNode;
    className?: String;
}

const CircularButton: React.FC<CircularButtonProps> = ({type, href, children, className}) => {
    return <a href={href} className={`${type == 'outlined' ? 'border-white border-solid border-2 hover:border-primary hover:bg-primary' : 'bg-primary hover:shadow-custom-primary'} rounded-full px-4 py-3 text-base font-medium ${className}`}>
        <h1 className="text-center">{children}</h1>
        
    </a>
}

export default CircularButton;