export const WHITE = '#fff';
export const BLACK = '#000';
export const REGAL_BLUE = '#034378';
export const SAN_JUAN = '#2d4e68';

export const rgba = (color, alpha) =>
    `rgba(${color
        .slice(1)
        .split('')
        .join(',')
        .concat(`,${alpha}`)})`;
