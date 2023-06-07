import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 116:214 */
export const Component1_Property1Default: FC<Props> = memo(function Component1_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
    </div>
  );
});
