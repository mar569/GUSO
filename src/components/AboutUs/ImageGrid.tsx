import { motion } from 'framer-motion';
import LazyImage from '../Fps/LazyImage/LazyImage';

interface Slide {
    id: number;
    images: string[];
}


const ImageGrid = ({ slide }: { slide: Slide }) => {
    return (
        <motion.div
            className="grid grid-cols-2 gap-2 sm:gap-4 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {slide.images.map((imgSrc, index) => (
                <motion.div key={index} className="rounded-lg overflow-hidden">
                    <LazyImage
                        src={imgSrc}
                        alt={`Слайд ${slide.id} - Изображение ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ImageGrid;
