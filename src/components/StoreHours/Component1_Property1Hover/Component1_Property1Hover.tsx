import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Hover.module.css';

interface Props {
  className?: string;
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 116:216 */
export const Component1_Property1Hover: FC<Props> = memo(function Component1_Property1Hover(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
    </div>
  );
});
