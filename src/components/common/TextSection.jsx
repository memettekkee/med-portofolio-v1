import { motion } from 'framer-motion'

export default function TextSection({ text, icon, className }) {
    return (
        <div className={`relative font-semibold xl:text-xl ${className}`}>
            <p className='relative flex mx-auto text-2xl w-fit text-mainColor md:text-4xl'>
                {text}&nbsp;
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-[48px] origin-bottom'
                >
                    {icon}
                </motion.div>
            </p>
        </div>
    )
}