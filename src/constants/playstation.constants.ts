import type { PlayStationItem } from '../interfaces/slide.interface';
import ps from '../assets/privatePage/SlideBg.svg';
import ps1_1 from '../assets/privatePage/ps1_1.svg';
import ps1_2 from '../assets/privatePage/ps1_2.svg';
import ps1_3 from '../assets/privatePage/ps1_3.svg';
import ps1_4 from '../assets/privatePage/ps1_4.svg';
import ps3_1 from '../assets/privatePage/ps3_1.svg';
import ps3_2 from '../assets/privatePage/ps3_2.svg';
import ps3_3 from '../assets/privatePage/ps3_3.svg';
import ps3_4 from '../assets/privatePage/ps3_4.svg';
import ps4_1 from '../assets/privatePage/ps4_1.svg';
import ps4_2 from '../assets/privatePage/ps4_2.svg';
import ps4_3 from '../assets/privatePage/ps4_3.svg';
import ps4_4 from '../assets/privatePage/ps4_4.svg';

export const SLIDES: PlayStationItem[] = [
  {
    id: 1,
    description: 'PrivatE playstation 5 room для изысканных геймеров',
    images: [ps],
    singleImage: true,
  },
  {
    id: 2,
    description:
      '4к qLED tv 78 диагонали получай качественное изображение в игре и при просмотре любимого контента',
    images: [ps1_1, ps1_2, ps1_3, ps1_4],
    singleImage: false,
  },
  {
    id: 3,
    description:
      'playstation 5 позволит насладиться любыми игровыми проектами в 4к и разделить эмоции с друзьями',
    images: [ps1_1, ps3_2, ps3_3, ps4_4],
    singleImage: false,
  },
  {
    id: 4,
    description:
      'apple tv 4k позволит показать любой контент как с твоего телефона, так и с любимого сервиса и разделить эмоции с друзьями',
    images: [ps3_1, ps3_2, ps3_3, ps3_4],
    singleImage: false,
  },
  {
    id: 5,
    description:
      'стриминговые сервисы для просмотра спортивных трансляции и фильмов в 4к. Смотри вместе с друзьями и получай удовольствие',
    images: [ps4_1, ps4_2, ps4_3, ps4_4],
    singleImage: false,
  },
];

export const APP_CONFIG = {
  maxWidth: '1700px',
  primaryColor: '#6EFF24',
  secondaryColor: '#FFFFFF',
  bgColor: '#1A1A1A',
};
