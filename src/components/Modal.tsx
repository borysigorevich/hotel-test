import React from 'react';
import {CalculateResultType} from "../utils/calculate";

type ModalProps = {
    open: boolean
    calculateResult: CalculateResultType | null
    handleReset: () => void
}

export const Modal = ({open, calculateResult, handleReset}: ModalProps) => {
    console.log('here', open, calculateResult)
    React.useEffect(() => {
        if(open) document.body.style.overflow = 'hidden'
    }, [open])

    return (
        <div className={`absolute inset-0 grid place-content-center
            transition-all ${open ? 'backdrop-blur-[5px]' : 'backdrop-blur-[0] pointer-events-none'}
        `}>
            <div className={`w-[500px] h-[400px] bg-white rounded-[40px] transition-all relative flex flex-col items-center justify-center
                ${open ? 'scale-110' : 'scale-0'}
            `}>

                <div className='w-[350px] h-[100px] bg-[rgb(240,240,250)] mx-auto rounded-[30px] mb-5 p-5 flex items-center flex-col'>
                    <p className='text-[20px] font-bold'>Premium rooms</p>
                    <div className='flex gap-10'>
                        <p className='text-md font-bold'>Usage: {calculateResult?.usagePremium}</p>
                        <p className='text-md font-bold'>Total price: {calculateResult?.premiumCost}$</p>
                    </div>
                </div>

                <div className='w-[350px] h-[100px] bg-[rgb(240,240,250)] mx-auto rounded-[30px] mb-5 p-5 flex items-center flex-col'>
                    <p className='text-[20px] font-bold'>Economy rooms</p>
                    <div className='flex gap-10'>
                        <p className='text-md font-bold'>Usage: {calculateResult?.usageEconomy}</p>
                        <p className='text-md font-bold'>Total price: {calculateResult?.economyCost}$</p>
                    </div>
                </div>

                <button
                    onClick={handleReset}
                    className='bg-[rgb(76,133,232)] px-5 py-3 rounded-xl bottom-10
                    text-white
                '>
                    Book again</button>
            </div>
        </div>
    );
};

//240 240 250