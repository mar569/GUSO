import * as images from '../../../assets/playGame';

export interface Game {
  id: number;
  title: string;
  image: string;
  rating: string;
  description: string;
  releaseDate: string;
  trailerUrl?: string;
}
export const games: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    image: images.cyberpunkImage,
    rating: '8.5',
    description:
      'Открытый мир RPG, действие которого происходит в дистопическом будущем.',
    releaseDate: '10.12.2020',
    trailerUrl: 'https://www.youtube.com/watch?v=sJbexcm4Trk',
  },
  {
    id: 2,
    title: 'Dota 2',
    image: images.dota2Image,
    rating: '9.0',
    description: 'Многопользовательская игра в жанре MOBA.',
    releaseDate: '9.07.2013',
    trailerUrl: 'https://www.youtube.com/watch?v=-cSFPIwMEq4',
  },
  {
    id: 3,
    title: 'CS:GO',
    image: images.csgoImage,
    rating: '8.0',
    description: 'Командный шутер от первого лица.',
    releaseDate: '21.08.2012',
    trailerUrl: 'https://www.youtube.com/watch?v=c80dVYcL69E',
  },
  {
    id: 4,
    title: 'Valorant',
    image: images.valorantImage,
    rating: '8.5',
    description: 'Тактический шутер с уникальными персонажами.',
    releaseDate: '2.06.2020',
    trailerUrl: 'https://www.youtube.com/watch?v=e_E9W2vsRbQ',
  },
  {
    id: 5,
    title: 'PUBG',
    image: images.pubgImage,
    rating: '8.0',
    description:
      'Королевская битва, где игроки сражаются, чтобы остаться последними.',
    releaseDate: '20.12.2017',
    trailerUrl: 'https://www.youtube.com/watch?v=S0wCM-zNrfM',
  },
  {
    id: 6,
    title: 'League of Legends',
    image: images.lolImage,
    rating: '9.0',
    description: 'Пользовательская игра в жанре MOBA.',
    releaseDate: '27.10.2009',
    trailerUrl: 'https://www.youtube.com/watch?v=vzHrjOMfHPY',
  },
  {
    id: 7,
    title: 'Apex Legends',
    image: images.apexImage,
    rating: '8.5',
    description: 'Бесплатная королевская битва.',
    releaseDate: '4.02.2019',
    trailerUrl:
      'https://www.youtube.com/watch?v=3WZ5DNIzc_o&list=RD3WZ5DNIzc_o&start_radio=1',
  },
  {
    id: 8,
    title: 'Fortnite',
    image: images.fortniteImage,
    rating: '9.0',
    description: 'Королевская битва с механикой строительства.',
    releaseDate: '25.07.2017',
    trailerUrl: 'https://www.youtube.com/watch?v=d3OKTfZS5qE',
  },
  {
    id: 9,
    title: 'Genshin Impact',
    image: images.genshinImage,
    rating: '9.0',
    description: 'Открытый мир RPG.',
    releaseDate: '28.09.2020',
    trailerUrl: 'https://www.youtube.com/watch?v=HLUY1nICQRY',
  },
  {
    id: 10,
    title: 'Call of Duty: Warzone',
    image: images.codImage,
    rating: '8.5',
    description: 'Бесплатная королевская битва.',
    releaseDate: '10.03.2020',
    trailerUrl: 'https://www.youtube.com/watch?v=0E44DClsX5Q',
  },
  {
    id: 11,
    title: 'Resident Evil Village',
    image: images.residentEvilImage,
    rating: '9.0',
    description: 'Игра в жанре survival horror.',
    releaseDate: '7.05.2021',
    trailerUrl: 'https://www.youtube.com/watch?v=xKJIfuUdf3A',
  },
];
