import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 12.25 7 20 7 20C7 20 3.50061 16.1257 1.45028 12H7C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 8.12561 2.37194 9.16434 2.99963 10H0.592294C0.224176 8.9591 0 7.93952 0 7ZM7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z'
      fill='#22088B'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
