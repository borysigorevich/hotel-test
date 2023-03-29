import React from 'react';
import {BookButton, Input} from "../components";
import {Modal} from "../components/Modal";
import {calculate, CalculateResultType} from "../utils/calculate";

const Home = () => {
    const [economyRoom, setEconomyRoom] = React.useState('')
    const [premiumRoom, setPremiumRoom] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const [calculateResult, setCalculateResult] = React.useState<CalculateResultType | null>(null)

    const setEconomy = (value: string) => setEconomyRoom(value)
    const setPremium = (value: string) => setPremiumRoom(value)

    const handleCalculate = () => {
        console.log('here')
        setCalculateResult(calculate([23, 45, 155, 374, 22, 99, 100, 101, 115, 209], Number(economyRoom), Number(premiumRoom)))
        setOpenModal(true)
    }

    const handleReset = () => {
        setOpenModal(false)
        setCalculateResult(null)
        setEconomyRoom('')
        setPremiumRoom('')
    }

    return (
        <div className='h-full bg-black grid grid-rows-[8fr_2fr] gap-10 p-5'>
            <div className='bg-white rounded-[50px] relative overflow-hidden'>
                <img src="/1.jpg" alt="alt" className='absolute inset-0 object-cover flex w-full h-full'/>
            </div>

            <div className='bg-[rgb(88,101,246)] rounded-[50px] flex items-center px-[150px] justify-between'>

                <h1 className='text-white text-[30px] font-bold leading-[100%] max-w-[200px]'>Book now your ideal {' '}
                    <span className='underline'>stay</span>
                </h1>

                <Input value={premiumRoom} type='Premium' setValue={setPremium}/>

                <Input value={economyRoom} type='Economy' setValue={setEconomy}/>

                <BookButton onClick={handleCalculate} disabled={!premiumRoom || !economyRoom}/>

            </div>

            <Modal calculateResult={calculateResult} open={openModal} handleReset={handleReset}/>

        </div>
    );
};

export default Home;