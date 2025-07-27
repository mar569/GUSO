import type { Event } from '../../types/evenTypes';
import { FaArrowRight } from 'react-icons/fa';

interface EventCardProps {
    event: Event;
    onClick: () => void;
}

export const EventCard = ({ event, onClick }: EventCardProps) => (
    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
        <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute top-4 left-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
            {event.date}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-sm mb-4 line-clamp-2">{event.description}</p>
            <button
                onClick={onClick}
                className="ml-auto w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition"
            >
                <FaArrowRight className="text-black" />
            </button>
        </div>
    </div>
);
