import { memo } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import resets from '../_resets.module.css';
import { ArrowRightLarge } from './ArrowRightLarge/ArrowRightLarge.js';
import classes from './Desktop1.module.css';
import { Rectangle16Icon } from './Rectangle16Icon.js';

interface Props {
  className?: string;
  expert: string;
  setservice: Function
}

/*props.name*/
/* @figmaId 121:36 */
export function Services(props: Props) {
  const setService = (service: String) => {
    props.setservice(service)
  }
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.repair}>Repair</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.modifications}>Modifications</div>
      <div className={classes.customOrder}>Custom Order</div>
      <div className={classes.image1}></div>
      <div className={classes.image3}></div>
      <div className={classes.image4}></div>
      <div className={classes.priceRange6080}>Price range: 60$ - 80$</div>
      <div className={classes.priceRange20100}>Price range: 20$ - 100$</div>
      <div className={classes.priceRangeDepends}>Price range: *Depends*</div>
      <Link to={props.expert =="" ? "/OurExperts": "/BookAppointment"} onClick={() => setService("Modifications")}>
        <div className={classes.rectangle5}></div>
        <ArrowRightLarge />
      </Link>
      <Link to={props.expert =="" ? "/OurExperts": "/BookAppointment"} onClick={() => setService("Repair")}>
        <div className={classes.rectangle6}></div>
        <ArrowRightLarge className={classes.arrowRightLarge} />
      </Link>
      <Link to={props.expert =="" ? "/OurExperts": "/BookAppointment"} onClick={() => setService("Custom Order")}>
        <div className={classes.rectangle7}></div>
        <ArrowRightLarge className={classes.arrowRightLarge2} />
      </Link>
      <div className={classes.rectangle1}></div>
      <div className={classes.ourServices}>Our Services</div>
      <div className={classes.rectangle10}></div>
      <Link to="/BookAppointment"><div className={classes.bookAppointment}>Book Appointment</div></Link>
      <div className={classes.rectangle16}>
        <Rectangle16Icon className={classes.icon} />
      </div>
      <Link to="/"><div className={classes.home}>Home</div></Link>
      <div className={classes.storerect}></div>
      <Link to="/StoreHours"><div className={classes.storehours}>Store Hours</div></Link>
      <div className={classes.rectangle15}></div>
      <Link to="/OurExperts"><div className={classes.ourExperts}>Our Experts</div></Link>
      <div className={classes.rectangle9}></div>
      <Link to="/AboutUs"><div className={classes.aboutUs}>About Us</div></Link>
    </div>
  );
}
