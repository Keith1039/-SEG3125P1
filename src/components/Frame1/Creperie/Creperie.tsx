import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Creperie.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 4:48 */
export const Creperie: FC<Props> = memo(function Creperie(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.union}>
        <UnionIcon className={classes.icon} />
      </div>
    </div>
  );
});
