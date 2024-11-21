import Navbar from "../Navbar"
import { motion } from "motion/react";

export default function Loading() {
    return (
        <div className="h-screen bg-fixed bg-center bg-no-repeat bg-cover pb-6 md:pb-12 bg-main-bg flex flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col justify-center items-center font-fredoka-main">
                <p className="text-center text-mainColor mt-10 mb-5 text-3xl md:text-5xl font-medium">Loading...</p>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="h-2 bg-gradient-to-r from-thrdColor to-secColor rounded-full"
                ></motion.div>
            </div>
        </div>
    )
}