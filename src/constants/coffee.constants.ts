import type { SlideItem } from '../interfaces/slide.interface';
import slide_1 from '../assets/BarPage/coffee/PIC1.svg';
import slide_2 from '../assets/BarPage/coffee/PIC2.svg';
import slide_3 from '../assets/BarPage/coffee/PIC3.svg';

export const COFFEE_SLIDES: SlideItem[] = [
  {
    id: 1,
    title: 'горячий кофе',
    description:
      'Уютное пространство для твоих coffee-break с приятной музыкой на фоне',
    images: [slide_1],
    singleImage: true,
  },
  {
    id: 2,
    title: 'разнообразные милкшейки',
    description:
      'Отличный вариант для любителей питьевых десертов с самыми популярными вкусами',
    images: [slide_2],
    singleImage: true,
  },
  {
    id: 3,
    title: 'фруктовые чаи',
    description: 'То, что нужно к паровым коктейлям для полноты вкуса',
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
