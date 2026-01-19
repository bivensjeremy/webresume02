'use client'

import Lottie from "lottie-react"
import Animation from './Scan.json'

export const ResumeLottie = () => {
    return (
        <div className="flex justify-start items-start">
            <Lottie animationData={Animation} loop className="h-72" />
        </div>
    )
}