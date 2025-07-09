import fps1 from '../../assets/FPS/fps_1.svg';
import fps2_1 from '../../assets/FPS/Group 1.svg';
import fps2_2 from '../../assets/FPS/Group 2.svg';
import fps2_3 from '../../assets/FPS/Group 3.svg';
import fps2_4 from '../../assets/FPS/Group 4.svg';
import fps3_1 from '../../assets/FPS/Group 5.svg';
import fps3_2 from '../../assets/FPS/Group 6.svg';
import fps3_3 from '../../assets/FPS/Group 7.svg';
import fps3_4 from '../../assets/FPS/Group 8.svg';
import fps4_1 from '../../assets/FPS/Group 9.svg';
import fps4_2 from '../../assets/FPS/Group 10.svg';
import fps4_3 from '../../assets/FPS/Group 11.svg';
import fps4_4 from '../../assets/FPS/Group 12.svg';
import fps5_1 from '../../assets/FPS/Group 13.svg';
import fps5_2 from '../../assets/FPS/Group 14.svg';
import fps5_3 from '../../assets/FPS/Group 17.svg';
import fps5_4 from '../../assets/FPS/Group 8.svg';

export const SLIDE_DATA = [
  {
    id: 1,
    title: 'FPS имеет значение',
    description:
      'Компьютерный клуб построенный геймерами для геймеров. Каждая из наших игровых зон отвечает требованиям любых современных игровых проектов, позволяет добиваться высоких результатов и обходить соперников.',
    images: [fps1], // Одно изображение для этого слайда
    singleImage: true,
    titleClass: 'text-[#6EFF24] text-[24px] sm:text-[30px] md:text-[64px]',
    descClass: 'text-white text-[14px] sm:text-[16px] md:text-[20px]',
  },
  {
    id: 2,
    title: 'STANDARD PC',
    description:
      'CPU INTEL CORE I5 4.6Mhz RAM 16GB 3200MHZ CL 15 RTX 2070 8Gb GDDR6',
    images: [fps2_1, fps2_2, fps2_3, fps2_4], // 4 изображения в сетке
    singleImage: false,
    titleClass: 'text-white text-[24px] sm:text-[36px]',
    descClass: 'text-[#6EFF24] text-[20px] sm:text-[30px] md:text-[55px]',
  },
  {
    id: 3,
    title: 'COMFORT PC',
    description:
      'CPU INTEL CORE I5 OC 5.0MHZ RAM 16GB 3600 CL 16 RTX 3070 WITH 8GB GDDR6',
    images: [fps3_1, fps3_2, fps3_3, fps3_4],
    singleImage: false,
    titleClass: 'text-white text-[24px] sm:text-[36px]',
    descClass: 'text-[#6EFF24] text-[20px] sm:text-[30px] md:text-[55px]',
  },
  {
    id: 4,
    title: 'VIP PC',
    description:
      'CPU INTEL CORE I9 OC 5.0MMHZ RAM 32gb 3600 CL 16 RTX 2080TI 16GB GDDR6',
    images: [fps4_1, fps4_2, fps4_3, fps4_4],
    singleImage: false,
    titleClass: 'text-white text-[24px] sm:text-[36px]',
    descClass: 'text-[#6EFF24] text-[20px] sm:text-[30px] md:text-[55px]',
  },
  {
    id: 5,
    title: 'BOOTCAMP',
    description:
      'CPU INTEL CORE I9 OC 5.0MMHZ RAM 32gb 3600 CL 16 RX 6900XT 16GB GDDR6',
    images: [fps5_1, fps5_2, fps5_3, fps5_4],
    singleImage: false,
    titleClass: 'text-white text-[24px] sm:text-[36px]',
    descClass: 'text-[#6EFF24] text-[20px] sm:text-[30px] md:text-[55px]',
  },
];
