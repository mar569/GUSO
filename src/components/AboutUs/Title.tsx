import { motion } from 'framer-motion'

const Title = () => (
    <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xl text-[#6EFF24] sm:text-4xl md:text-5xl font-bold mb-8 lg:mb-12"
    >
        About us
    </motion.h2>
)

export default Title
