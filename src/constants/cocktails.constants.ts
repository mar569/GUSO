import type { SlideItem } from '../interfaces/slide.interface';
import slide_1 from '../assets/BarPage/cocktails/cockt_1.svg';
import slide_2 from '../assets/BarPage/cocktails/cockt_2.svg';
import slide_3 from '../assets/BarPage/cocktails/cockt_3.svg';

export const COCKTAIL_SLIDES: SlideItem[] = [
  {
    id: 1,
    title: 'San Andreas',
    description:
      'Коктейль на основе белого рома (белый ром, апероль, фреш лимона, клубничный шраб)',
    images: [slide_1],
    singleImage: true,
  },
  {
    id: 2,
    title: 'Impostor',
    description: 'Персик не был предателем! (джин, персиковый ликёр, сиропы)',
    images: [slide_2],
    singleImage: true,
  },
  {
    id: 3,
    title: 'sabzero',
    description:
      'Освежающее комбо приведет к самому яркому Fatality (джин, цитрусовые ликер, сироп)',
    images: [slide_3],
    singleImage: true,
  },
];

export const APP_CONFIG = {
  maxWidth: '1700px',
  primaryColor: '#6EFF24',
  secondaryColor: '#FFFFFF',
  bgColor: '#1A1A1A',
};
