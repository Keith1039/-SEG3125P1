import { memo, SVGProps } from 'react';

const Union1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 61 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M37.2831 1.2474C38.4384 0.417534 40.3116 0.417534 41.4669 1.2474L59.2169 13.9974C60.3722 14.8273 60.3722 16.1727 59.2169 17.0026L41.4669 29.7526C40.3116 30.5825 38.4384 30.5825 37.2831 29.7526C36.1278 28.9227 36.1278 27.5773 37.2831 26.7474L49.9829 17.625H3.875C2.24116 17.625 0.916667 16.6736 0.916667 15.5C0.916667 14.3264 2.24116 13.375 3.875 13.375H49.9829L37.2831 4.2526C36.1278 3.42274 36.1278 2.07726 37.2831 1.2474Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Union1Icon);
export { Memo as Union1Icon };
