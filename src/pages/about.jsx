import TextSection from "../components/common/TextSection";
import Navbar from "../components/Navbar";

import { motion } from "motion/react";
import { GiJourney } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { BsBoxArrowInRight } from "react-icons/bs";

import { stack } from "../utils/stack";
import { journey } from "../utils/journey";
import Photo from "/assets/images/author-photo.png"

export default function about() {

    const fadeInAnimationVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.05 * index,
            },
        }),
    }

    return (
        <div className="bg-fixed bg-center bg-no-repeat bg-cover pb-2 md:pb-5 bg-main-bg">
            <Navbar />
            <section className="p-5 mb-10 text-mainColor md:p-8">
                <TextSection icon="?" text="About Me" />
                <div className="flex flex-col items-center justify-center mx-auto mt-8 mb-16 md:gap-10 lg:flex-row">
                    <div className="relative items-baseline justify-center object-cover border-4 aspect-auto h-60 w-60 rounded-3xl border-mainColor bg-gif2-bg shadow-image-card shadow-mainColor md:h-96 md:w-1/2 xl:w-96">
                        <img className="object-cover w-full h-full opacity-90" src={Photo} />
                    </div>
                    <p className="mt-5 text-base text-justify text-mainColor2 md:mt-0 lg:w-1/2 xl:text-lg font-raleway-sec">
                        I have practical experience working across the full development cycle, including frontend, backend, API integration, and database management. 
                        I’m familiar with modern development patterns such as component-based architecture, RESTful services, and scalable backend structures. 
                        I also work comfortably in environments that involve <b>DevOps practices</b>—such as CI/CD, deployment workflows, and application monitoring—along with experience in <b>cloud-based development</b> for real projects.
                        <br/><br/>
                        I adapt my tools and frameworks based on the project’s <b>technical requirements</b> and <b>business logic</b>, 
                        ensuring that the solutions I build remain maintainable, efficient, and aligned with the team’s objectives.
                    </p>
                </div>
                <TextSection className="mb-10" icon={<GiJourney />} text="My Journey" />
                <div className="mb-16 xl:px-40 2xl:px-48">
                    <div className="flex flex-wrap justify-center gap-5">
                        {journey.map((data, index) => {
                            const JourneyIcon = data.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileInView={{ scale: 1 }}
                                    initial={{ scale: 0 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex h-auto w-full max-w-[432px] flex-col justify-between gap-4 rounded-xl border-2 border-mainColor bg-white p-4 shadow-button-card transition-all hover:scale-105 xl:w-[432px]"
                                >
                                    <div className="text-mainColor">
                                        <h1 className="flex items-center gap-3 text-xl font-bold md:gap-5 md:text-2xl mb-2 md:mb-4">
                                            <JourneyIcon className="text-5xl md:text-6xl " />
                                            {data.title}
                                        </h1>
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group text-base font-semibold md:text-xl underline underline-offset-4 flex items-center gap-x-1"
                                        >
                                            <span>{data.group}</span>
                                            <BsBoxArrowInRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </a>
                                        <p className="mt-2 font-raleway-sec md:mt-3">{data.desc}</p>
                                    </div>
                                    <h3 className="text-base font-semibold md:text-xl">{data.date}</h3>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
                <TextSection className="mb-10" icon={<FaCode />} text="Stack i’ve used" />
                <div className="flex flex-wrap justify-center gap-5 mt-5 justify-items-center xl:gap-10 xl:px-40">
                    {stack.map((data, index) => {
                        const StackIcon = data.icons
                        return (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="animate"
                                variants={fadeInAnimationVariants}
                                viewport={{ once: true }}
                                custom={index}
                                className="flex flex-col items-center justify-center w-24 h-24 duration-150 bg-white border-2 gap-y-2 rounded-2xl hover:scale-105 hover:border-mainColor hover:shadow-button-card md:h-36 md:w-36 md:p-4"
                            >
                                <StackIcon className="text-4xl text-mainColor md:text-6xl" />
                                <p className="text-base font-bold text-center text-mainColor md:text-xl">{data.name}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}