export type EventType =
  | 'gaming'
  | 'movie'
  | 'hookah'
  | 'esports'
  | 'entertainment';

export interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  type: EventType;
}

export interface BookingForm {
  name: string;
  phone: string;
}
