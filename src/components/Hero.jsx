import { Star } from "lucide-react"
import Image from "next/image"
import Button from "./Button"
import MockupCarousel from "./MockupCarousel"
import profilePic1 from '../../public/profile-pic1.jpeg'
import profilePic2 from '../../public/profile-pic2.jpg'
import profilePic3 from '../../public/profile-pic3.jpg'
import apple from "../../public/apple-logo.png"



const Hero = () => {
    return (
        <section className="h-screen w-full hero-bg-gradient relative -z-20">
            <div className="absolute h-screen inset-0 bg-gradient-to-b from-transparent via-background -z-10 to-background pointer-events-none" />
            <div className="max-w-6xl mx-auto w-full h-full px-4 flex flex-col xl:flex-row">
                {/* LEFT PART */}
                <div className="xl:w-[50%] max-w-2xl mx-auto max-h-full xl:text-start text-center my-auto gap-5 flex flex-col">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-200 leading-tight">
                        Level Up Your Betting Game With{" "}
                        <span className="font-bold text-gradient bg-gradient-to-br from-secondary to-primary">
                            Zort
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        Leverage AI to monitor, analyze, and enhance your sports betting performance. Instantly scan bet slips, access real-time analytics, and gain smart insights to make informed decisions effortlessly.
                    </p>
                    <div className="grid gap-5">
                        <Button
                            text={<h1 className="flex gap-3 items-end">
                                <Image src={apple} className="w-4 -translate-y-0.5" />
                                <p>Download on App Store</p>
                            </h1>}
                            className="h-10 sm:h-12 text-sm font-semibold sm:text-md mx-auto xl:mx-0"
                        />
                        <div className="flex items-center gap-4 mx-auto xl:mx-0 h-fit translate-x-8 xl:translate-x-0">
                            <div className="flex">
                                <Image src={profilePic3} className="size-10 border-background object-cover border-3  rounded-full" />
                                <Image src={profilePic2} className="size-10 border-background object-cover border-3 -translate-x-4 rounded-full" />
                                <Image src={profilePic1} className="size-10 border-background object-cover border-3 -translate-x-8 rounded-full" />
                                <span className="py-2.5 border-3 border-background px-1 text-xs font-semibold text-center align-center bg-primary -translate-x-12 rounded-full">10K+</span>
                            </div>
                            <div className="flex flex-col -translate-x-12 gap-1">
                                <span className="flex w-fit gap-1 mt-1 text-sm items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill="orange" color="orange" size={16} />
                                    ))}
                                    <p className="font-medium">4.9/5</p>
                                </span>
                                <h1 className="text-xs">10K+ Winning Bettors Worldwide</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT PART */}
                <div className="w-full xl:w-[50%] h-full hidden xl:flex">
                    <MockupCarousel />
                </div>
            </div>
        </section>
    )
}

export default Hero
