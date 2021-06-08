import { css } from "styled-components";

const sizes = {
  largeDesktop: 1640,
  desktop: 1366,
  smallDesktop: 1199,
  tablet: 1024,
  phone: 767,
  smallPhone: 566,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
