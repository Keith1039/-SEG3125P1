import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Rectangle16Icon } from './Rectangle16Icon.js';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  expert: string
  setexpert: Function
  service: string
  setservice: Function
  date: string
  setdate: Function
  time: string
  settime: Function
  

}
/* @figmaId 110:27 */
export function BookAppointment(props: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [booked, setBooking] = useState(false)

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
      <div className={classes.rectangle2}>
        <form>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <div className={classes.rectangle3}>
        <form>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
      </div>
      <div className={classes.rectangle4}>
        <form>
          <select
            value={props.service}
            onChange={(e) => props.setservice(e.target.value)}
          >
            <option></option>
            <option>Modifications</option>
            <option>Repair</option>
            <option>Custom Order</option>
          </select>
          </form>
      </div>
      <div className={classes.rectangle9}>
        <form>
          <select 
            value={props.expert}
            onChange={(e) => props.setexpert(e.target.value)}
          >
            <option></option>
            <option> Tony </option>
            <option> Amanda </option>
            <option> Elon</option>
          </select>

        </form>
      </div>
      <div className={classes.rectangle5}>
        <form>
          <input
            type="text"
            required
            value={props.date}
            onChange={(e) => props.setdate(e.target.value)}
          />
        </form>
      </div>
      <div className={classes.rectangle7}>
      <form>
        <input
          type="text"
          required
          value={props.time}
          onChange={(e) => props.settime(e.target.value)}
        />
      </form>
      </div>
      <div className={classes.rectangle8}></div>
      <button onClick={ name != "" && email != "" && props.date != "" && props.service != "" && props.time != "" && booked == false ? () => setBooking(true): () => setBooking(booked)}>
        <div className={classes.rectangle6}></div>
        <div className={classes.confirmAppointment}>{booked ? "Appointment Booked!":"Confirm appointment"} </div>
      </button>

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
