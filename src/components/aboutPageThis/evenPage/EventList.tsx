import type { Event } from '../../types/evenTypes';
import { EventCard } from './EventCard';



interface EventsListProps {
    events: Event[];
    onEventClick: (event: Event) => void;
    cols?: number;
}

export const EventsList = ({ events, onEventClick, cols = 2 }: EventsListProps) => {
    const gridClass = `grid grid-cols-1 ${cols >= 2 ? 'md:grid-cols-2' : ''} gap-6`;

    return (
        <div className={gridClass}>
            {events.map(event => (
                <EventCard
                    key={event.id}
                    event={event}
                    onClick={() => onEventClick(event)}
                />
            ))}
        </div>
    );
};
