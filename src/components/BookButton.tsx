import React from 'react';

type BookButtonProps = {
    onClick: () => void
    disabled: boolean
}

export const BookButton = ({onClick, disabled}: BookButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`px-8 py-6 transition 
            rounded-[20px] 
                ${disabled ? 'bg-gray-400 text-white' : 'bg-white text-[rgb(88,101,246)] hover:scale-110'}
            `}
        >
            Book a stay
        </button>
    );
};