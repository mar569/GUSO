import type { HookahItem } from '../interfaces/slide.interface';
import ds1 from '../assets/hookah/DCH_1.svg';
import ds2 from '../assets/hookah/DCH_2.svg';
import ds3 from '../assets/hookah/DCH_3.svg';
import ds4 from '../assets/hookah/DCH_4.svg';
import ds5 from '../assets/hookah/DCH_5.svg';

export const HookahSLIDES: HookahItem[] = [
  {
    id: 1,
    description: 'при покупке парового коктейля час игры в подарок',
    images: [ds1],
    singleImage: true,
  },
  {
    id: 2,
    description: 'приведи друга и удвойте ваш баланс при пополнении',
    images: [ds2],
    singleImage: true,
  },
  {
    id: 3,
    description: 'бонус +30% от пополнения имениннику и его друзьям',
    images: [ds3],
    singleImage: true,
  },
  {
    id: 4,
    description: 'бонус +30% от пополнения при регистрации нового аккаунта',
    images: [ds4],
    singleImage: true,
  },
  {
    id: 5,
    description: 'подробности акции уточняйте у администратора',
    images: [ds5],
    singleImage: true,
  },
];

export const APP_CONFIG = {
  maxWidth: '1700px',
  primaryColor: '#6EFF24',
  secondaryColor: '#FFFFFF',
  bgColor: '#1A1A1A',
};
