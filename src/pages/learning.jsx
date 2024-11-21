import TextSection from "../components/common/TextSection";
import Navbar from "../components/Navbar";

import { motion } from "motion/react";

import { BiShow } from 'react-icons/bi'
import { GiBookmarklet } from "react-icons/gi";
import { education } from "../utils/education";

export default function learning() {
    return (
        <div className="bg-fixed bg-center bg-no-repeat bg-cover pb-6 md:pb-12 bg-main-bg">
            <Navbar />
            <section className="xl:px-40 2xl:px-64 pt-5 md:pt-8">
                <TextSection className="mb-8" icon={<GiBookmarklet />} text="All i've learned" />
                <motion.div
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 1.5 }}
                    className="flex justify-center md:mt-6 h-36 md:h-64 mb-6 md:mb-8"
                >
                    <img className="rounded-xl" src="https://media.giphy.com/media/fhAwk4DnqNgw8/giphy.gif" alt="Coding GIF" />
                </motion.div>
                <div className="flex flex-wrap items-center justify-center gap-5">
                    {education.map((data, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ scale: 1 }}
                            initial={{ scale: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex h-40 w-full max-w-[288px] flex-col justify-between rounded-xl border-2 border-mainColor bg-white p-4 shadow-button-card transition-all hover:scale-105 xl:w-72"
                        >
                            <div>
                                <h1 className="text-xl font-bold text-mainColor">
                                    {data.title}
                                </h1>
                                <p>{data.company}</p>
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="flex h-fit items-center justify-center rounded-xl bg-anyColor p-2 text-center text-xs font-semibold text-mainColor">
                                    {data.type}
                                </p>
                                <BiShow
                                    className="cursor-pointer rounded-full border-2 border-mainColor bg-thrdColor p-2 text-4xl text-black-primary hover:bg-secColor hover:text-white"
                                    onClick={() => window.open(data.link, '_blank', 'noopener,noreferrer')}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}