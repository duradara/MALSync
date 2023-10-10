import { ConfObj } from '../../../_provider/definitions';
import ImageFit from '../image-fit.vue';

export const image: ConfObj[] = [
  {
    key: 'profile',
    title: 'Profile',
    component: ImageFit,
    props: {
      src: 'https://placekitten.com/640/360',
      mode: 'cover',
      style: 'width: 640px; height: 360px; margin-bottom: 16px;',
    },
  },
  {
    key: 'profile',
    title: 'Profile',
    component: ImageFit,
    props: {
      src: 'https://placekdsadsadsadsen.com/360/640',
      mode: 'cover',
      style: 'width: 640px; height: 360px; margin-bottom: 16px;',
    },
  },
  {
    key: 'profile',
    title: 'Profile',
    component: ImageFit,
    props: {
      src: 'https://placekitten.com/340/360',
      mode: 'cover',
      style: 'width: 640px; height: 360px; margin-bottom: 16px;',
    },
  },
];
