import { motion } from 'framer-motion';

interface NavDotsProps {
    current: number;
    total: number;
    onChange: (index: number) => void;
}

function NavDots({ current, total, onChange }: NavDotsProps) {
    return (
        <div className="flex gap-2">
            {Array.from({ length: total }).map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => onChange(index)}
                    aria-label={`Перейти к слайду ${index + 1}`}
                    className={`w-3 h-3 sm:w-4 sm:h-4 cursor-pointer rounded-full ${current === index ? 'bg-[#6EFF24]' : 'bg-white/30'}`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />
            ))}
        </div>
    );
}

export default NavDots;
