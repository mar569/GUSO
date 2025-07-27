import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import { BookingModal } from './BookingModal';
import type { BookingForm, EventType, Event } from '../../types/evenTypes'; // Убедитесь, что Event импортируется
import { EventsList } from './EventList';
import EVENTS_DATA from './evenData';


const Events = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<EventType | 'all'>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<BookingForm>({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredEvents = EVENTS_DATA.filter(event =>
    filter === 'all' || event.type === filter
  );

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submission:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Обертка для setSelectedEvent
  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <section className="container py-20 mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:max-w-md">
          <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase mb-6">
            Наши события
          </h2>

          <div className="mb-8">
            {showAll && (
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as EventType | 'all')}
                className="mb-4 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 w-full"
              >
                <option value="all">Все события</option>
                <option value="gaming">Игровые вечера</option>
                <option value="movie">Киносеансы</option>
                <option value="hookah">Акции</option>
                <option value="esports">Киберспорт</option>
                <option value="entertainment">Развлечения</option>
              </select>
            )}

            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-3 px-6 rounded-full hover:opacity-90 transition"
            >
              <FaCalendarAlt className="mr-2" />
              {showAll ? 'Скрыть события' : 'Все события'}
            </button>
          </div>
        </div>

        <div className="flex-1">
          <EventsList
            events={displayedEvents}
            onEventClick={handleEventClick} // Используем обертку
            cols={showAll ? 2 : 1} // Изменено на 1, если не показываются все события
          />
        </div>
      </div>

      {selectedEvent && (
        <BookingModal
          event={selectedEvent}
          onClose={() => {
            setSelectedEvent(null);
            setIsSubmitted(false);
          }}
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleInputChange}
          isSubmitted={isSubmitted}
        />
      )}
    </section>
  );
};

export default Events;