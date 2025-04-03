import React from 'react'
import FeatureBox from './FeatureBox'
import { ChartNoAxesCombined, CircuitBoard, CloudLightning, EarthLock, LayoutDashboard, ScanQrCode } from 'lucide-react'

const featuresData = [
    {
        icon: <ScanQrCode className='text-secondary' />,
        header: "AI Bet Slip Scanner",
        para: "Instantly scan and analyze any bet slip. Our AI extracts odds, stakes, and potential returns with incredible accuracy."
    },
    {
        icon: <LayoutDashboard className='text-secondary' />,
        header: "Interactive Dashboard",
        para: "Track your performance with beautiful visualizations. Monitor win rates, ROI, and betting patterns in real-time."
    },
    {
        icon: <ChartNoAxesCombined className='text-secondary' />,
        header: "Smart Analytics",
        para: "Get intelligent insights about your betting behavior. Identify winning strategies and optimize your approach."
    },
    {
        icon: <EarthLock className='text-secondary' />,
        header: "Secure & Private",
        para: "Your data is encrypted and protected. We prioritize your privacy and security above everything."
    },
    {
        icon: <CircuitBoard className='text-secondary' />,
        header: "AI-Powered Predictions",
        para: "Leverage advanced machine learning models to get accurate betting predictions and maximize your chances of winning."
    },
    {
        icon: <CloudLightning className='text-secondary' />,
        header: "Real-Time Alerts",
        para: "Stay ahead of the game with instant notifications on odds changes, match updates, and betting opportunities."
    }
]

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