import { memo, SVGProps } from 'react';

const Rectangle3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1440V40H0V0Z' fill='#100F0F'/>
  </svg>
);

const Memo = memo(Rectangle3Icon);
export { Memo as Rectangle3Icon };
