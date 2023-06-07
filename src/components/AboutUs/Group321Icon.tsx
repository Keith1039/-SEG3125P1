import { memo, SVGProps } from 'react';

const Group321Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 231 202' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M115.5 185.167C115.5 185.167 38.5 152.089 38.5 84.1666C38.5 66.3087 46.6112 49.1823 61.0515 36.5549C75.4918 23.9274 95.0783 16.8333 115.5 16.8333C135.922 16.8333 155.506 23.9274 169.946 36.5549C184.386 49.1823 192.5 66.3087 192.5 84.1666C192.5 152.089 115.5 185.167 115.5 185.167Z'
      stroke='#44475C'
      strokeWidth={2}
      strokeLinejoin='round'
    />
    <path
      d='M115.5 109.418C131.447 109.418 144.375 98.1129 144.375 84.1677C144.375 70.2225 131.447 58.9177 115.5 58.9177C99.5528 58.9177 86.625 70.2225 86.625 84.1677C86.625 98.1129 99.5528 109.418 115.5 109.418Z'
      stroke='#44475C'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);

const Memo = memo(Group321Icon);
export { Memo as Group321Icon };
