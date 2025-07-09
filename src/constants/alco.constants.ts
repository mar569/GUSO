import type { SlideItem } from '../interfaces/slide.interface';
import slide_1 from '../assets/BarPage/alco/PIC_1.svg';
import slide_2 from '../assets/BarPage/alco/PIC_2.svg';
import slide_3 from '../assets/BarPage/alco/PIC_3.svg';
export const Bar_SLIDES: SlideItem[] = [
  {
    id: 1,
    title: 'коктейли и вино',
    description:
      'Авторскими напитки, популярные коктейли и немного изысканности',
    images: [slide_1],
    singleImage: true,
  },
  {
    id: 2,
    title: 'паровые коктейли',
    description: 'Собственный lounge bar с широким спектром вкусов',
    images: [slide_2],
    singleImage: true,
  },
  {
    id: 3,
    title: 'ночной движ',
    description: 'Неоновая атмосфера для твоих неформальных встреч',
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
