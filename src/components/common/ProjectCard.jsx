import { FaGithub } from 'react-icons/fa'
import { motion } from "motion/react"

export default function ProjectCard({
    image,
    title,
    desc,
    role,
    repo,
}) {
    return (
        <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="group relative h-36 w-[280px] cursor-pointer overflow-hidden rounded-lg  border-2 border-mainColor object-cover shadow-button-card sm:w-[360px] lg:h-44 mt-4 md:mt-8"
        >
            <img
                src={image}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
                alt="foto"
            />
            <div className='absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0'>
                <a
                    href={repo}
                    target={'_blank'}
                    className="cursor-pointer rounded-full border-2 border-mainColor bg-thrdColor p-1.5 text-sm text-black hover:bg-secColor hover:text-white lg:p-2 lg:text-base"
                >
                    <FaGithub />
                </a>
            </div>
            <div className='absolute bottom-0 h-10 w-full border-t-2 border-mainColor bg-thrdColor p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4'>
                <div className='h-20'>
                    <h1 className="line-clamp-1 font-bold text-mainColor group-hover:line-clamp-2">
                        {title}{' '}
                        <span className="w-full rounded-lg bg-black p-1 text-xs text-white">
                            {role}
                        </span>
                    </h1>
                    <p className="hidden h-full text-xs font-normal text-mainColor group-hover:block">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}