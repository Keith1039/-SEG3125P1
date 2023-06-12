import { memo } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import resets from '../_resets.module.css';
import { ArrowRightLarge } from './ArrowRightLarge/ArrowRightLarge.js';
import classes from './Desktop1.module.css';
import { Rectangle16Icon } from './Rectangle16Icon.js';

interface Props {
  className?: string;
  setexpert: Function;
  service: string
}

/* @figmaId 127:95 */
export function OurExperts (props: Props) {
  const setExpert =(name:String) => {
    props.setexpert(name);
  }
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.elonMusk}>Elon Musk</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.amandaJoinedOurTeamAfterRealiz}>
        <div className={classes.textBlock}>
          Amanda joined our team after realizing just how useful umbrellas can be in the fight
        </div>
        <div className={classes.textBlock2}>
          against Zenomorphs. Although she has retired from space faring, her modified
        </div>
        <div className={classes.textBlock3}>
          umbrellas are able to resist even the acid spit of a Zenomorph. Suffice to say, with{' '}
        </div>
        <div className={classes.textBlock4}>Amanda taking care of your umbrella, quality is never an issue.</div>
      </div>
      <div className={classes.tonyStark}>Tony Stark</div>
      <div className={classes.amandaRipley}>Amanda Ripley</div>
      <Link to={props.service =="" ? "/Services": "/StoreHours"} onClick={() => setExpert("Tony")}>
        <div className={classes.rectangle5}></div>
        <ArrowRightLarge className={classes.arrowRightLarge} />
      </Link>
      <Link to={props.service =="" ? "/Services": "/StoreHours"} onClick={() => setExpert("Elon")}>
        <div className={classes.rectangle6}></div>
        <ArrowRightLarge className={classes.arrowRightLarge3} />
      </Link>
      <Link to={props.service =="" ? "/Services": "/StoreHours"} onClick={() => setExpert("Amanda")}>
        <div className={classes.rectangle7}></div>
        <ArrowRightLarge className={classes.arrowRightLarge2} />
      </Link>
      <div className={classes.whileManyBelieveThatTonyStarkD}>
        <div className={classes.textBlock5}>
          While many believe that Tony Stark died fighting against Thanos, what actually happened
        </div>
        <div className={classes.textBlock6}>
          was that he came here to retire since he was sick of being billed for any property damage{' '}
        </div>
        <div className={classes.textBlock7}>
          done by the Avengers. He particularly enjoys modifying umbrellas but remember to tell
        </div>
        <div className={classes.textBlock8}>him that you don’t want an umbrella that fires off laser beams.</div>
      </div>
      <div className={classes.image4}></div>
      <div className={classes.image5}></div>
      <div className={classes.elonJoinedOurEngineeringTeamAf}>
        <div className={classes.textBlock9}>
          Elon joined our engineering team after realizing that being a multi-billionaire distracted{' '}
        </div>
        <div className={classes.textBlock10}>
          him from doing what he wanted to do most, make and repair umbrellas. As the CEO of
        </div>
        <div className={classes.textBlock11}>
          Tesla, he’ll be sure to get you your umbrella as fast as he gets people their new electric
        </div>
        <div className={classes.textBlock12}>cars. </div>
      </div>
      <div className={classes.image6}></div>
      <div className={classes.services}>Services</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.ourExperts2}>Our Experts</div>
      <Link to="/BookAppointment">
        <div className={classes.rectangle10}></div>
        <div className={classes.bookAppointment}>Book Appointment</div>
      </Link>
      <Link to="/">
        <div className={classes.rectangle16}>
          <Rectangle16Icon className={classes.icon} />
        </div>
        <div className={classes.home}>Home</div>
      </Link>
      
      <Link to="/StoreHours">
        <div className={classes.storerect}></div>
        <div className={classes.storehours}> Store Hours </div>
      </Link>
      <Link to="/Services">
        <div className={classes.rectangle15}></div>
        <div className={classes.services2}>Services</div>
      </Link>
      <Link to="/AboutUs">
        <div className={classes.rectangle9}></div>
        <div className={classes.aboutUs}>About Us</div>
      </Link>
    </div>
  );
}