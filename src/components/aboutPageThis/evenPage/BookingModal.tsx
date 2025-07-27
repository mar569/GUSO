import type { ChangeEvent, FormEvent } from 'react';
import type { Event, BookingForm } from '../../types/evenTypes';

import { FaTimes, FaPhoneAlt } from 'react-icons/fa';

interface BookingModalProps {
    event: Event | null;
    onClose: () => void;
    onSubmit: (e: FormEvent) => void;
    formData: BookingForm;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isSubmitted: boolean;
}

export const BookingModal = ({
    event,
    onClose,
    onSubmit,
    formData,
    onChange,
    isSubmitted
}: BookingModalProps) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-xl max-w-md w-full border border-gray-700 overflow-hidden">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
                <FaTimes size={24} />
            </button>

            <div className="p-6">
                {isSubmitted ? (
                    <div className="text-center py-6">
                        <div className="text-green-400 text-5xl mb-4">✓</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Заявка принята!</h3>
                        <p className="text-gray-300 mb-6">
                            Наш менеджер свяжется с вами в течение 15 минут
                        </p>
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                        >
                            Закрыть
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Забронировать "{event?.title}"
                        </h3>
                        <p className="text-gray-300 mb-6">{event?.date}</p>

                        <form onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-300 mb-2">Ваше имя</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={onChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Телефон</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={onChange}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                                    placeholder="+7 (___) ___-__-__"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-lg transition"
                            >
                                Отправить заявку
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
                            <FaPhoneAlt />
                            <span>Или позвоните:</span>
                            <a href="tel:+79991234567" className="text-white underline">+7 (999) 123-45-67</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
);
