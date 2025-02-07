import React from "react";

interface CircularButtonProps {
    type: 'outlined' | 'solid';
    onClick: () => void;
    children: React.ReactNode;
    classname?: String;
}

const CircularButton: React.FC<CircularButtonProps> = ({type, onClick, children, classname}) => {
    return <button onClick={onClick} className={`${type == 'outlined' ? 'border-white border-solid border-2 hover:border-primary hover:bg-primary' : 'bg-primary hover:shadow-custom-primary'} rounded-full px-4 py-3 text-base font-medium ${classname}`}>
        {children}
    </button>
}

export default CircularButton;