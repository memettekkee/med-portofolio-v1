import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { FaBook } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function home() {

    const constraintRef = useRef(null)

    return (
        <main className="h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-main-bg">
            <Navbar />
            <motion.div
                className="flex flex-col items-center justify-center mt-4 md:mt-16 md:flex-row"
                ref={constraintRef}
            >
                <motion.div
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 1.5 }}
                    className="mb-8 md:hidden">
                    <img className="rounded-xl" src="https://media.giphy.com/media/JqmupuTVZYaQX5s094/giphy.gif" alt="Coding GIF" width="160" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-col items-center justify-start gap-3 xl:items-start text-mainColor xl:mt-16 2xl:mt-24"
                >
                    <h1 className="text-3xl font-bold md:text-6xl">Muhammad (Met)</h1>
                    <h2 className="text-xl font-bold md:pt-4 md:text-4xl">HelloWorld("print")</h2>
                    <h2 className="text-xl font-bold md:text-3xl">
                        My role ?{' '}
                        <TypeAnimation
                            sequence={[
                                'Front-End Developer',
                                5000,
                                'Back-End Developer',
                                5000,
                                'Android Developer',
                                5000,
                            ]}
                            wrapper="span"
                            speed={40}
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                            className="text-thrdColor"
                        />
                    </h2>
                    <p className="max-w-lg text-sm text-center md:max-w-2xl md:text-left md:text-base font-raleway-sec">
                        I am a <b>Junior Web Developer</b>, basically have a standart skill’s on Front-End and
                        Back-End Developer. i have some experience on <b>Android</b> and <b>Web</b> projects
                    </p>
                    <div className="flex gap-4">
                        <a
                            className="flex items-center gap-2 p-2 border-2 cursor-pointer rounded-xl border-mainColor bg-thrdColor shadow-button shadow-mainColor hover:bg-secColor hover:text-anyColor md:p-3"
                            href="https://drive.google.com/drive/folders/1h2AkPSzr1SXAYMztm-7ttfURuBiuA9n9?usp=sharing"
                            target={'_blank'}>
                            <FaBook className="text-xl" />
                            <p className="text-xs font-semibold sm:text-sm md:text-lg">
                                My CV
                            </p>
                        </a>
                        <Link
                            className="flex items-center gap-2 p-2 border-2 cursor-pointer rounded-xl border-mainColor bg-thrdColor shadow-button shadow-mainColor hover:bg-secColor hover:text-anyColor md:p-3"
                            to={"/about"}
                        >
                            <p className="text-xs font-semibold sm:text-sm md:text-lg">
                                More About Me
                            </p>
                            <IoArrowRedo className="text-xl" />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 2 }}
                    className="hidden pl-9 md:block "
                >
                    <img
                        className="mt-16 rounded-xl"
                        src="https://media.giphy.com/media/JqmupuTVZYaQX5s094/giphy.gif" alt="Coding GIF" width="360" height="240" />
                </motion.div>
            </motion.div>
        </main >
    )
}