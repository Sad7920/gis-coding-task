import { Zap } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

const highlights = ['Multi-slip scanning', '85% accuracy rate', '10,000+ bets tracked', 'Team Recognition Soon!']

const KeyHighlightSection = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        let scrollAmount = 1

        const scroll = () => {
            if (container && window.innerWidth < 1090) {
                container.scrollLeft += scrollAmount
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0
                }
            }
        }

        const interval = setInterval(scroll, 20)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            ref={containerRef}
            className="px-6 py-4 my-10 w-full bg-secondary overflow-hidden text-background items-center 
            flex gap-12 scrollbar-hide
            lg:justify-around lg:overflow-visible lg:max-w-full"
        >
            {highlights.map((text, index) => (
                <div
                    key={index}
                    className="flex text-lg font-normal items-center gap-4 flex-shrink-0"
                >
                    <Zap className="size-6 p-1.5 bg-background rounded-full fill-secondary text-secondary" />
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}

export default KeyHighlightSection
