import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlineChevronRight.module.css';
import { IconOutlineChevronRightIcon } from './IconOutlineChevronRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 116:109 */
export const IconOutlineChevronRight: FC<Props> = memo(function IconOutlineChevronRight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        {props.swap?.icon || <IconOutlineChevronRightIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
