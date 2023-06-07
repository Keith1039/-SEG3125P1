import { memo, SVGProps } from 'react';

const Union1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5 0C12.7196 9.93411e-08 13.7083 0.746192 13.7083 1.66667L13.7083 14.3096L18.7718 10.4882C19.6342 9.83728 21.0325 9.83728 21.8949 10.4882C22.7573 11.139 22.7573 12.1943 21.8949 12.8452L13.0615 19.5118C12.6474 19.8244 12.0857 20 11.5 20C10.9143 20 10.3526 19.8244 9.93847 19.5118L1.10514 12.8452C0.24273 12.1943 0.24273 11.139 1.10514 10.4882C1.96755 9.83728 3.36579 9.83728 4.22819 10.4882L9.29167 14.3096L9.29167 1.66667C9.29167 0.746192 10.2804 0 11.5 0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Union1Icon);
export { Memo as Union1Icon };
