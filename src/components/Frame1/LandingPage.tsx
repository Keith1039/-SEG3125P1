import { memo } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { Creperie } from './Creperie/Creperie.js';
import classes from './Frame1.module.css';
import { Group485Icon2 } from './Group485Icon2.js';
import { Group485Icon } from './Group485Icon.js';
import { PhoneCallIcon } from './PhoneCallIcon.js';
import { Rectangle3Icon } from './Rectangle3Icon.js';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export function LandingPage() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon} />
      </div>
      <Creperie />
      <div className={classes.phoneCall}>
        <PhoneCallIcon className={classes.icon2} />
      </div>
      <Link to="/AboutUS">
        <div className={classes.rectangle7}></div>
        <div className={classes.aboutUs}>About Us</div>
      </Link>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle14}></div>
      
      <div className={classes.image3}></div>
      <div className={classes.rectangle102}></div>
      <div className={classes.protectingWhatProtectsYouSince}>Protecting what protects you since 1896</div>
      <button>
        <div className={classes.group485}>
          <Group485Icon className={classes.icon3} />
        </div>
      </button>
      <button>
        <div className={classes.group4852}>
          <Group485Icon2 className={classes.icon4} />
        </div>
      </button>
      <Link to="/BookAppointment">
        <div className={classes.rectangle10}></div>
        <div className={classes.bookApointment}>Book Appointment</div>
        </Link>
      <Link to="/Services">
        <div className={classes.rectangle9}></div>
        <div className={classes.services}>Services</div>
      </Link>
      <Link to="/StoreHours">
        <div className={classes.storerect}></div>
        <div className={classes.storehours}>Store Hours</div>
      </Link>
      <div className={classes._1190StUmbraStreet}>1190 St Umbra Street</div>
      <div className={classes._613467290}>613-467-290</div>
      
      <Link to="/OurExperts">
        <div className={classes.rectangle15}></div>
        <div className={classes.ourExperts}>Our Experts</div>
      </Link>
    </div>
  );
}

export default LandingPage