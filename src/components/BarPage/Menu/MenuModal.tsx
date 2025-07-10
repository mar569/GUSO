import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../../Fps/LoadingSpinner/LoadingSpinner';

const ModalHeader = lazy(() => import('./ModalHeader'));
const ModalContent = lazy(() => import('./ModalContent'));
const ModalFooter = lazy(() => import('./ModalFooter'));

const MenuModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const modalVariants = {
        hidden: {
            x: '100%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 85,
                stiffness: 130
            }
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition: {
                duration: 0.9
            }
        }
    };

    return (
        <>
            <button
                onClick={handleToggle}
                className="w-[351px] md:w-[315px] flex items-center justify-center 
                    bg-[#802ab9] hover:bg-[#9A20E0] transition-colors text-white 
                    text-[24px] md:text-[36px] px-8 py-2 rounded-full cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-purple-800 duration-500"
                style={{ fontFamily: 'Poppins', boxShadow: '4px 10px 30px rgba(88, 32, 186, 0.6)' }}
            >
                открыть
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
                        <motion.div
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={handleToggle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <div className="relative mx-4 my-8 md:mx-auto max-w-md lg:max-w-3xl h-[90vh] md:h-auto flex flex-col">
                            <motion.div
                                className="relative bg-black rounded-xl shadow-2xl overflow-hidden flex flex-col p-0.5"
                                style={{
                                    background: 'linear-gradient(28deg, rgba(252, 176, 69, 1) 5%, rgba(25, 33, 145, 1) 39%, rgba(36, 27, 48, 1) 67%, rgba(172, 42, 176, 1) 91%, rgba(126, 43, 181, 1) 100%)'
                                }}
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="bg-black rounded-xl w-full flex flex-col">
                                    <Suspense fallback={
                                        <div className="flex items-center justify-center h-full w-full">
                                            <LoadingSpinner />
                                        </div>
                                    }>
                                        <ModalHeader />
                                        <ModalContent />
                                        <ModalFooter onClose={handleToggle} />
                                    </Suspense>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MenuModal;
