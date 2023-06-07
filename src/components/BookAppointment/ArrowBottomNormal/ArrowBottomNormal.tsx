import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowBottomNormal.module.css';
import { Union1Icon } from './Union1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 126:78 */
export const ArrowBottomNormal: FC<Props> = memo(function ArrowBottomNormal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.union1}>
        <Union1Icon className={classes.icon} />
      </div>
    </div>
  );
});
