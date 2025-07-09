import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from '../../../assets/fon/bg.svg';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;

}

const ImagePlaceholder = ({ className }: { className?: string }) => (
    <div
        className={`bg-cover bg-center ${className}`}
        style={{
            height: '100%',
            width: '100%',
            backgroundImage: bg
        }}
    />
);

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
        return () => { img.onload = null; };
    }, [src]);

    if (!loaded) {
        return <ImagePlaceholder className={className} />;
    }

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            style={style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
        />
    );
}

export default LazyImage;
