import { motion } from 'framer-motion';
import LazyImage from '../Fps/LazyImage/LazyImage';

interface Slide {
    id: number;
    images: string[];
}

const SingleImage = ({ slide }: { slide: Slide }) => {
    return (
        <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <LazyImage
                src={slide.images[0]} // Используем первое изображение
                alt={`Слайд ${slide.id}`}
                className="w-full h-full object-contain"
            />
        </motion.div>
    );
};

export default SingleImage;
