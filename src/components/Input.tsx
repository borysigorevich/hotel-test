import React, {ChangeEvent} from 'react';

type InputProps = {
    type: 'Premium' | 'Economy'
    value: string
    setValue: (value: string) => void
}

export const Input = ({value, setValue, type}: InputProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        const editedValue = value.replace(/\D/gi, '')
        setValue(editedValue)
    }

    return (
        <div className='relative w-[200px]'>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                className='bg-transparent border-b outline-none pb-4 text-white peer w-full'
            />
            <span
                className={`absolute transition-all left-0 -translate-y-1/2 peer-focus:text-white 
                                    ${value ? 'top-[-10px] text-white text-xs' : 'top-1/2 text-gray-300'}
                                    
                                    pointer-events-none peer-focus:top-[-10px] peer-focus:text-xs`}
            >
                        Input free <span className='font-bold'>{type}</span> rooms</span>
        </div>
    );
};