import { stores } from './stores';
import imageFurnitureCover from './images/themes/furniture_cover.jpg';

export const weeks = [{
  theme: 'Furniture Week',
  dates: 'Oct. 19 - 25',
  image: imageFurnitureCover,
  stores: stores.slice(0, 5),
}, {
  theme: 'Street Food Week',
  dates: 'Oct. 26 - Nov. 1',
  image: imageFurnitureCover,
  stores: stores.slice(0, 5),
}, {
  theme: 'Wearable Week',
  dates: 'Nov. 2 - 8',
  image: imageFurnitureCover,
  stores: stores.slice(0, 5),
  voting: true,
  voted: false,
}];
