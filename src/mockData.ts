import type { ZoneData } from './components/types/booking';

export const mockZones: ZoneData[] = [
  {
    id: 'standard',
    name: 'Standard Zone',
    mainImage: './assets/pricezoon/DSC_1470.svg',
    prices: [
      { time: '10:00', price: '500₽' },
      { time: '11:00', price: '600₽' },
    ],
  },
  {
    id: 'comfort',
    name: 'Comfort Zone',
    mainImage: './assets/pricezoon/DSC_1470.svg',
    prices: [
      { time: '12:00', price: '700₽' },
      { time: '13:00', price: '800₽' },
    ],
  },
  {
    id: 'vip',
    name: 'VIP Zone',
    mainImage: './assets/pricezoon/DSC_1550.svg',
    prices: [
      { time: '14:00', price: '900₽' },
      { time: '15:00', price: '1000₽' },
    ],
  },
  {
    id: 'bootcamp',
    name: 'Bootcamp Zone',
    mainImage: './assets/pricezoon/DSC_1550.svg',
    prices: [
      { time: '16:00', price: '1100₽' },
      { time: '17:00', price: '1200₽' },
    ],
  },
  {
    id: 'vip-pc',
    name: 'VIP PC',
    mainImage: './assets/pricezoon/DSC_1550.svg',
    prices: [
      { time: '18:00', price: '1300₽' },
      { time: '19:00', price: '1400₽' },
    ],
  },
];
