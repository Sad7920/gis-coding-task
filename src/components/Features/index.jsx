import React from 'react'
import FeatureBox from './FeatureBox'
import { featuresData } from '../../../constants'

const index = () => {
    return (
        <div className='w-full p-4 h-full py-20 '>
            <div className='max-w-6xl w-full mx-auto flex flex-col gap-12'>
                <div className='text-center w-full flex flex-col gap-2 max-w-3xl mx-auto'>
                    <h4 className='uppercase text-sm text-secondary font-semibold'>Features</h4>
                    <h1 className=' text-4xl font-semibold '>Unlock the Advantages</h1>
                    <p className='text-sm text-foreground/70'>From smarter predictions to seamless betting, our AI-powered solutions give you the edge to win more and bet with confidence.</p>
                </div>
                <div className='w-full p-2 md:p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>
                    {featuresData.map((feature) => {
                        return (<FeatureBox icon={feature.icon} header={feature.header} para={feature.para} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default index