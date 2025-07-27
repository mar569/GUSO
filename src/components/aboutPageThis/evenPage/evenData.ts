import type { Event } from '../../types/evenTypes';
import man from '../../../assets/evens/man.png';
import movie from '../../../assets/evens/movie.png';

const EVENTS_DATA: Event[] = [
  {
    id: 1,
    date: '29 августа',
    title: 'Вечер игр',
    description: 'Турнир по CS:GO с призовым фондом 10,000₽. Участие 500₽.',
    image: man,
    type: 'gaming',
  },
  {
    id: 2,
    date: '2 сентября',
    title: 'Кино в GOSU',
    description: 'Премьерный показ "Бэтмен" с Dolby Atmos. Вход 300₽.',
    image: movie,
    type: 'movie',
  },
  {
    id: 3,
    date: '5 сентября',
    title: 'Акция на кальяны',
    description:
      'При покупке 2 кальянов - 1 час в подарок для групп от 4 человек.',
    image: movie,
    type: 'hookah',
  },
  {
    id: 4,
    date: '10 сентября',
    title: 'Киберспортивный марафон',
    description: 'Трансляция турнира по Dota 2 с комментариями.',
    image: man,
    type: 'esports',
  },
  {
    id: 5,
    date: '15 сентября',
    title: 'Караоке-баттл',
    description: 'Соревнование в пении с призами. Участие бесплатное.',
    image: movie,
    type: 'entertainment',
  },
  {
    id: 6,
    date: '20 сентября',
    title: 'Вечер настольных игр',
    description:
      'Играйте в любимые настольные игры с друзьями. Вход свободный.',
    image: man,
    type: 'entertainment',
  },
  {
    id: 7,
    date: '25 сентября',
    title: 'VR-эксперименты',
    description: 'Попробуйте новейшие VR-технологии. 200₽/10 мин.',
    image: movie,
    type: 'entertainment',
  },
  {
    id: 8,
    date: '30 сентября',
    title: 'Косплей-пати',
    description: 'Конкурс костюмов с призами. Фотосессия включена.',
    image: movie,
    type: 'entertainment',
  },
  {
    id: 9,
    date: '5 октября',
    title: 'Турнир по Fortnite',
    description: 'Соло-соревнование. Призовой фонд 15,000₽.',
    image: movie,
    type: 'gaming',
  },
  {
    id: 10,
    date: '10 октября',
    title: 'Ретро-гейминг',
    description: 'Вечер классических игр на старых консолях (NES, Sega).',
    image: man,
    type: 'gaming',
  },
];

export default EVENTS_DATA;
