import React from 'react'
import StepsBox from './StepsBox'
import { stepsData } from '../../../constants'

const index = () => {
    return (
        <div className='w-full p-4 h-full steps-bg-dashed py-20 bg-foreground text-background'>
            <div className='max-w-7xl w-full mx-auto flex flex-col gap-12'>
                <div className='text-center w-full flex flex-col gap-2 max-w-3xl mx-auto'>
                    <h4 className='uppercase text-sm text-primary font-semibold'>How It Works</h4>
                    <h1 className=' text-4xl font-semibold '>Seamless & Smart Betting</h1>
                    <p className='text-sm text-background/70'>Experience effortless betting with our AI-driven system. From scanning bet slips to real-time analytics, our intuitive process ensures accuracy, speed, and smarter decision-making.</p>
                </div>
                <div className='w-full p-2 md:p-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4'>
                    {stepsData.map((step) => {
                        return (<StepsBox key={step.number} header={step.header} para={step.para} number={step.number} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default index