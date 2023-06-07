import { memo, SVGProps } from 'react';

const Rectangle16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 136 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 19.5C0 8.73045 8.73045 0 19.5 0H116.5C127.27 0 136 8.73045 136 19.5V19.5C136 30.2696 127.27 39 116.5 39H19.5C8.73045 39 0 30.2696 0 19.5V19.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Rectangle16Icon);
export { Memo as Rectangle16Icon };
