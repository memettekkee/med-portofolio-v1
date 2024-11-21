import Navbar from "../components/Navbar";
import { contactInfo } from "../utils/contactInfo";
import { motion } from "motion/react";
import TextSection from "../components/common/TextSection";

export default function contact() {
    return (
        <div className="h-screen bg-fixed bg-center bg-no-repeat bg-cover pb-2 md:pb-5 bg-main-bg">
            <Navbar />
            <div className="xl:px-64">
                <TextSection icon="📲" text="Find Me On." classNames="mb-10" />
                <div className="flex flex-row flex-wrap justify-center pt-5 md:gap-10 gap-5 md:pt-10">
                    {contactInfo.map((data, index) => {
                        const Icon = data.icon
                        return (
                            <motion.a
                                whileInView={{ scale: 1 }}
                                initial={{ scale: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                className="flex h-16 w-52 cursor-pointer items-center gap-5 rounded-xl border-2 border-black-primary bg-white p-3 text-black-primary shadow-button-card transition-all duration-200 hover:scale-105 hover:shadow-image-card"
                                key={index}
                                href={data.href}
                                target={'_blank'}
                            >
                                <Icon />
                                <p className="font-semibold">{data.name}</p>
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}