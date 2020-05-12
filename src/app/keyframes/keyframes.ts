import { style } from '@angular/animations';

export const swipeRight = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(30%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
];

export const swipeLeft = [
  style({ opacity: 1 }),
  style({ webkitAnimationFillMode: 'forwards', animationFillMode: 'forwards', transform: 'translateX(-50%)', opacity: 0 })
];
