import type { SlideItem } from '../interfaces/slide.interface';
import fps1 from '../assets/FPS/fps_1.svg';
import fps2_1 from '../assets/fps/Group 1.svg';
import fps2_2 from '../assets/fps/Group 2.svg';
import fps2_4 from '../assets/fps/Group 4.svg';
import fps3_2 from '../assets/fps/Group 6.svg';
import fps3_3 from '../assets/fps/Group 7.svg';
import fps3_4 from '../assets/fps/Group 8.svg';
import fps4_1 from '../assets/fps/Group 9.svg';
import fps4_2 from '../assets/fps/Group 10.svg';
import fps4_3 from '../assets/fps/Group 11.svg';
import fps4_4 from '../assets/fps/Group 12.svg';
import fps5_2 from '../assets/fps/Group 14.svg';
import fps5_3 from '../assets/fps/Group 17.svg';
import fps5_4 from '../assets/fps/Group 8.svg';

export const SLIDES: SlideItem[] = [
  {
    id: 1,
    title: 'FPS имеет значение',
    description:
      'Компьютерный клуб построенный геймерами для геймеров. Каждая из наших игровых зон отвечает требованиям любых современных игровых проектов, позволяет добиваться высоких результатов и обходить соперников.',
    images: [fps1],
    singleImage: true,
  },
  {
    id: 2,
    title: 'STANDARD PC',
    description:
      'CPU INTEL CORE I5 4.6MHZ RAM 16GB 3200MHZ CL 15 RTX 2070 8Gb GDDR6',
    images: [fps2_1, fps2_2, fps4_3, fps2_4],
    singleImage: false,
  },
  {
    id: 3,
    title: 'COMFORT PC',
    description:
      'CPU INTEL CORE I5 OC 5.0MHZ RAM 16GB 3600 CL 16 RTX 3070 WITH 8GB GDDR6',
    images: [fps4_1, fps3_2, fps3_3, fps3_4],
    singleImage: false,
  },
  {
    id: 4,
    title: 'VIP PC',
    description:
      'CPU INTEL CORE I9 OC 5.0MMHZ RAM 32gb 3600 CL 16 RTX 2080TI 16GB GDDR6',
    images: [fps4_1, fps4_2, fps4_3, fps4_4],
    singleImage: false,
  },
  {
    id: 5,
    title: 'BOOTCAMP',
    description:
      'CPU INTEL CORE I9 OC 5.0MMHZ RAM 32gb 3600 CL 16 RX 6900XT 16GB GDDR6',
    images: [fps4_1, fps5_2, fps5_3, fps5_4],
    singleImage: false,
  },
];

export const APP_CONFIG = {
  maxWidth: '1700px',
  primaryColor: '#6EFF24',
  secondaryColor: '#FFFFFF',
  bgColor: '#1A1A1A',
};
