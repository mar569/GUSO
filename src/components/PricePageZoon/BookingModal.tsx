import React from 'react';
import { useForm, type FieldError } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

interface FormData {
    name: string;
    date: string;
    time: string;
    phone: string;
}

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedTime: string | null;
}

const BookingModal: React.FC<BookingModalProps> = React.memo(({ isOpen, onClose, selectedTime }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Отправленные данные:', data);
        toast.success('Ваша заявка принята, ожидайте подтверждение!',
            {
                icon: <span>✅</span>
            }
        );
        reset();
        onClose();
    };

    const getErrorMessage = (error: FieldError | undefined) => {
        return error?.message || '';
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <div className="relative mx-4 my-20 md:mx-auto max-w-md lg:max-w-3xl flex flex-col">
                        <motion.div
                            className="relative bg-black rounded-xl shadow-2xl overflow-hidden flex flex-col p-0.5"
                            style={{
                                background: 'linear-gradient(28deg, rgba(252, 176, 69, 1) 5%, rgba(25, 33, 145, 1) 39%, rgba(36, 27, 48, 1) 67%, rgba(172, 42, 176, 1) 91%, rgba(126, 43, 181, 1) 100%)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <div className="bg-black border-b rounded-t-lg text-white p-5 flex flex-col items-center w-full">
                                <h2 className="text-2xl md:text-3xl font-bold">Форма заявки</h2>
                                {selectedTime && <p className="mt-2 text-lg">Выбранное время: {selectedTime}</p>}
                            </div>
                            <div className="flex-grow overflow-y-auto">
                                <form onSubmit={handleSubmit(onSubmit)} className="bg-black shadow-md flex flex-col items-center">
                                    <div className="mb-4 mt-2 w-[90%]">
                                        <label htmlFor="name" className="block mb-1">Имя:</label>
                                        <input
                                            id="name"
                                            type="text"
                                            autoComplete="name"
                                            {...register('name', { required: 'Имя обязательно для заполнения' })}
                                            className={`border border-gray-300 rounded w-full p-2 ${errors.name ? 'border-red-500' : ''}`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm">{getErrorMessage(errors.name)}</p>
                                        )}
                                    </div>
                                    <div className="mb-4 w-[90%]">
                                        <label htmlFor="date" className="block mb-1">Дата:</label>
                                        <input
                                            id="date"
                                            type="date"
                                            autoComplete="off"
                                            {...register('date', { required: 'Дата обязательна для заполнения' })}
                                            className={`border border-gray-300 rounded w-full p-2 ${errors.date ? 'border-red-500' : ''}`}
                                        />
                                        {errors.date && (
                                            <p className="text-red-500 text-sm">{getErrorMessage(errors.date)}</p>
                                        )}
                                    </div>
                                    <div className="mb-4 w-[90%]">
                                        <label htmlFor="time" className="block mb-1">Время:</label>
                                        <input
                                            id="time"
                                            type="time"
                                            autoComplete="off"
                                            {...register('time', { required: 'Время обязательно для заполнения' })}
                                            className={`border border-gray-300 rounded w-full p-2 ${errors.time ? 'border-red-500' : ''}`}
                                        />
                                        {errors.time && (
                                            <p className="text-red-500 text-sm">{getErrorMessage(errors.time)}</p>
                                        )}
                                    </div>
                                    <div className="mb-4 w-[90%]">
                                        <label htmlFor="phone" className="block mb-1">Номер телефона:</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            {...register('phone', {
                                                required: 'Номер телефона обязателен для заполнения',
                                                pattern: { value: /^\+?\d{10,15}$/, message: 'Неверный номер телефона' }
                                            })}
                                            className={`border border-gray-300 rounded w-full p-2 ${errors.phone ? 'border-red-500' : ''}`}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm">{getErrorMessage(errors.phone)}</p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#7D34EB] cursor-pointer text-white rounded px-4 py-2 w-[90%] mt-4 mb-4"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                            <div className="bg-black rounded-b-lg p-4 border-t flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="bg-black/10 hover:bg-[#694e78] duration-500 cursor-pointer border border-[#7D34EB] text-white px-4 py-2 rounded-lg text-sm font-light"
                                    aria-label="Закрыть модальное окно"
                                >
                                    Закрыть
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
});

export default BookingModal;
