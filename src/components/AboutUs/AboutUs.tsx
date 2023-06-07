import { memo } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Group321Icon } from './Group321Icon.js';
import { Group994Icon } from './Group994Icon.js';
import { Rectangle7Icon } from './Rectangle7Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 108:10 */
export function AboutUs() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.aboutUs}>About Us</div>
      <div className={classes.image3}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.ourServices}>Our Services</div>
      <div className={classes.rectangle4}></div>
      <div className={classes._2060DianeStreet}>2060 Diane Street</div>
      
      <div className={classes.whoWeAre}>Who we are</div>
      <div className={classes.group321}>
        <Group321Icon className={classes.icon} />
      </div>
      <div className={classes.group994}>
        <Group994Icon className={classes.icon2} />
      </div>
      <div className={classes.storeLocationsNearYou}>Store Locations near you</div>
      <div className={classes._996OakLane}>996 Oak Lane</div>
      <div className={classes._1978StUmbraStreet}>1978 St Umbra Street</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        <div className={classes.textBlock}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore{' '}
        </div>
        <div className={classes.textBlock2}>et dolore magna aliqua. Ut enim ad</div>
      </div>
      <div className={classes.weProvideUmbrellaRepairModific}>
        We provide umbrella repair, modification and custom orders. We strongly believe that umbrellas are life
      </div>
      
      <Link to="/BookAppointment">
        <div className={classes.rectangle10}></div>
        <div className={classes.bookAppointment}>Book Appointment</div>
      </Link>
      <Link to="/">
        <div className={classes.rectangle7}>
          <Rectangle7Icon className={classes.icon3} />
        </div>
        <div className={classes.home}>Home</div>
      </Link>
      <Link to="/OurExperts">
        <div className={classes.rectangle15}></div>
        <div className={classes.ourExperts}>Our Experts</div>
      </Link>
      <Link to="/StoreHours">
        <div className={classes.storeRect}></div>
        <div className={classes.StoreHours}>Store Hours</div>
      </Link>
      <Link to="/Services">
        <div className={classes.rectangle9}></div>
        <div className={classes.services}>Services</div>
      </Link>
    </div>
  );
}
export default AboutUs;