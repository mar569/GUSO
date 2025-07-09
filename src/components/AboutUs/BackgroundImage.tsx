import { motion } from 'framer-motion'
import LazyImage from '../Fps/LazyImage/LazyImage'


const BackgroundImage = () => (
    <motion.div
        className="absolute inset-0 bg-gray-900 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        <LazyImage
            src="/FpsFon.svg"
            alt="Фон компьютерного клуба"
            className="absolute inset-0 w-full h-full object-cover"
        />
    </motion.div>
)

export default BackgroundImage
