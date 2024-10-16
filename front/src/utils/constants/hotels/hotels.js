import hotel1 from '../../../assets/images/hotel1.webp';
import hotel2 from '../../../assets/images/hotel2.jpg';
import hotel3 from '../../../assets/images/hotel3.jpeg';
import hotel4 from '../../../assets/images/hotel4.jpg';

import card from '../../../assets/images/Card.svg';
import cat from '../../../assets/images/Cat.svg';
import condicioner from '../../../assets/images/Conditioner.svg';
import display from '../../../assets/images/Display.svg';
import dumbbell from '../../../assets/images/Dumbbell_Large.svg';
import medicine from '../../../assets/images/Medical_Kit.svg';
import wine from '../../../assets/images/Wineglass.svg';
import area from '../../../assets/images/area.svg';
import sleeping from '../../../assets/images/Sleeping.svg';
import bath from '../../../assets/images/Bath.svg';
import wifi from '../../../assets/images/wifi.svg';

import arbat1 from '../../../assets/images/arbat1.png';
import arbat2 from '../../../assets/images/arbat2.webp';
import arbat3 from '../../../assets/images/arbat3.webp';
import arbat4 from '../../../assets/images/arbat4.webp';

const hotels = [
  {
    images: [hotel1, arbat1, arbat2, arbat3, arbat4],
    name: 'Arbat House Hotel',
    review: '4.6',
    review_count: 1300,
    location: 'Москва',
    address: 'Москва, Скатертный переулок, 23',
    distance_center: '2',
    stars_count: 4,
    cost_per_day: 3000,
    cost_per_period: 9000,
    facilities: [
      {
        name: 'Можно с животными',
        image: cat,
      },
      {
        name: 'Оплата картой',
        image: card,
      },
      {
        name: 'Кондиционер в номерах',
        image: condicioner,
      },
      {
        name: 'Телевизор в номерах',
        image: display,
      },
    ],
    coordinates: [55.755814, 37.594603],
    id: '1',
    rooms: [
      {
        name: 'Стандартный двухместный номер, вид в холл отеля',
        area: '15',
        price: 9000,
        nights_count: 3,
        images: [arbat4, arbat3],
        facilities: [
          {
            name: '15 м2',
            image: area,
          },
          {
            name: '2 Спальных места',
            image: sleeping,
          },
          {
            name: 'Индивидуальная ванная комната',
            image: bath,
          },
          {
            name: 'Кондиционер в номере',
            image: condicioner,
          },
          {
            name: 'Wi-FI в номере',
            image: wifi,
          },
        ],
        id: '1',
      },
      {
        name: 'Стандартный трехместный номер, вид в город',
        area: '30',
        price: 21000,
        nights_count: 3,
        images: [arbat3, arbat2],
        facilities: [
          {
            name: '30 м2',
            image: area,
          },
          {
            name: '3 Спальных места',
            image: sleeping,
          },
          {
            name: 'Можно с животными',
            image: cat,
          },
          {
            name: 'Wi-FI в номере',
            image: wifi,
          },
        ],
        id: '2',
      },
    ],
  },
  {
    images: [hotel2],
    name: 'Lotte Hotel',
    review: '4.7',
    review_count: 1300,
    location: 'Москва',
    distance_center: '5',
    stars_count: 5,
    cost_per_day: 4500,
    cost_per_period: 13500,
    facilities: [
      {
        name: '15 м2',
        image: medicine,
      },
      {
        name: '2 Спальных места',
        image: dumbbell,
      },
      {
        name: 'Кондиционер в номере',
        image: condicioner,
      },
      {
        name: 'Wi-FI в номере',
        image: display,
      },
    ],
    coordinates: [55.751025, 37.578809],
    id: '2',
  },
  {
    images: [hotel3],
    name: 'Теремок',
    review: '4.6',
    review_count: 1300,
    location: 'Москва',
    distance_center: '2',
    stars_count: 4,
    cost_per_day: 3500,
    cost_per_period: 10500,
    facilities: [
      {
        name: '15 м2',
        image: wine,
      },
      {
        name: '2 Спальных места',
        image: condicioner,
      },
      {
        name: 'Кондиционер в номере',
        image: display,
      },
      {
        name: 'Wi-FI в номере',
        image: wifi,
      },
    ],
    coordinates: [55.771474, 37.649310],
    id: '3',
  },
  {
    images: [hotel4],
    name: 'Radisson',
    review: '5',
    review_count: 1100,
    location: 'Москва',
    distance_center: '1',
    stars_count: 5,
    cost_per_day: 20000,
    cost_per_period: 60000,
    facilities: [
      {
        name: '15 м2',
        image: condicioner,
      },
      {
        name: '2 Спальных места',
        image: wifi,
      },
      {
        name: 'Кондиционер в номере',
        image: card,
      },
      {
        name: 'Wi-FI в номере',
        image: display,
      },
    ],
    coordinates: [55.782897, 37.579442],
    id: '4',
  },
];

export default hotels;
