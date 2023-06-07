import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowBottomNormal } from './ArrowBottomNormal/ArrowBottomNormal.js';
import classes from './Desktop1.module.css';
import { Rectangle16Icon } from './Rectangle16Icon.js';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 110:27 */
export function BookAppointment() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.appointmentDetails}>Appointment Details</div>
      <div className={classes.name}>Name:</div>
      <div className={classes.email}>Email:</div>
      <div className={classes.email2}>Email:</div>
      <div className={classes.serviceType}>Service Type:</div>
      <div className={classes.expert}>Expert:</div>
      <div className={classes.dateOfAppointment}>Date of Appointment:</div>
      <div className={classes.chosenTime}>Chosen Time:</div>
      <div className={classes.location}>Location:</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <button>
        <div className={classes.rectangle6}></div>
        <div className={classes.confirmAppointment}>Confirm appointment </div>
      </button>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <ArrowBottomNormal className={classes.arrowBottomNormal} />
      <ArrowBottomNormal className={classes.arrowBottomNormal2} />
      <ArrowBottomNormal className={classes.arrowBottomNormal3} />
      <div className={classes.rectangle1}></div>
      <div className={classes.bookAppointment2}>Book Appointment</div>
      <Link to="/OurExperts">
        <div className={classes.rectangle10}></div>
        <div className={classes.ourExperts2}>Our Experts</div>
      </Link>
      <Link to="/">
        <div className={classes.rectangle16}>
          <Rectangle16Icon className={classes.icon} />
        </div>
        <div className={classes.home}>Home</div>
      </Link>
      <Link to="/Services">
        <div className={classes.rectangle15}></div>
        <div className={classes.services2}>Services</div>
      </Link>
      <Link to="/AboutUs">
        <div className={classes.rectangle17}></div>
        <div className={classes.aboutUs}>About Us</div>
      </Link>
    </div>
  );
};
