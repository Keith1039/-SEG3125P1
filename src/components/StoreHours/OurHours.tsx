import { memo } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import resets from '../_resets.module.css';
import { Component1_Property1Default } from './Component1_Property1Default/Component1_Property1Default.js';
import { Component1_Property1Hover } from './Component1_Property1Hover/Component1_Property1Hover.js';
import classes from './Desktop1.module.css';
import { IconOutlineChevronRight } from './IconOutlineChevronRight/IconOutlineChevronRight.js';
import { IconOutlineChevronRightIcon2 } from './IconOutlineChevronRightIcon2.js';
import { IconOutlineChevronRightIcon } from './IconOutlineChevronRightIcon.js';
import { Rectangle16Icon } from './Rectangle16Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 110:18 */
export function OurHours() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.storeHours}>Store Hours</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.availableAppointmentsForTheDay}>Available Appointments for the day</div>
      <div className={classes.calender}>
        <div className={classes.month}>
          <div className={classes.march2023}>June 2023</div>
          <div className={classes.group1}>
            <div className={classes.frame1}>
              <IconOutlineChevronRight
                className={classes.iconOutlineChevronRight}
                swap={{
                  icon: <IconOutlineChevronRightIcon className={classes.icon} />,
                }}
              />
            </div>
            <div className={classes.frame2}>
              <IconOutlineChevronRight
                className={classes.iconOutlineChevronRight2}
                swap={{
                  icon: <IconOutlineChevronRightIcon2 className={classes.icon2} />,
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.daysOfTheWeek}>
          <div className={classes.sunMon}>
            <div className={classes.day}>
              <div className={classes.sun}>Sun</div>
            </div>
            <div className={classes.day2}>
              <div className={classes.mon}>Mon</div>
            </div>
            <div className={classes.day3}>
              <div className={classes.tue}>Tue</div>
            </div>
            <div className={classes.day4}>
              <div className={classes.wed}>Wed</div>
            </div>
            <div className={classes.day5}>
              <div className={classes.thu}>Thu</div>
            </div>
            <div className={classes.day6}>
              <div className={classes.fri}>Fri</div>
            </div>
            <div className={classes.day7}>
              <div className={classes.sat}>Sat</div>
            </div>
          </div>
          <div className={classes.frame9}>
            <div className={classes.frame8}>
              <Component1_Property1Default />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._1}>2</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._12}>3</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._13}>4</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._14}>5</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._15}>6</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._16}>7</div>,
                }}
              />
            </div>
            <div className={classes.frame92}>
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._17}>8</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._18}>9</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._19}>10</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._110}>11</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._111}>12</div>,
                }}
              />
              <Component1_Property1Hover
                text={{
                  _1: <div className={classes._112}>13</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._113}>14</div>,
                }}
              />
            </div>
            <div className={classes.frame10}>
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._114}>15</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._115}>16</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._116}>17</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._117}>18</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._118}>19</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._119}>20</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._120}>21</div>,
                }}
              />
            </div>
            <div className={classes.frame11}>
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._121}>22</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._122}>23</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._123}>24</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._124}>25</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._125}>26</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._126}>27</div>,
                }}
              />
              <Component1_Property1Default
                text={{
                  _1: <div className={classes._127}>28</div>,
                }}
              />
            </div>
            <div className={classes.frame12}>
              <Component1_Property1Default
                className={classes.component1}
                text={{
                  _1: <div className={classes._128}>29</div>,
                }}
              />
              <Component1_Property1Default
                className={classes.component3}
                text={{
                  _1: <div className={classes._129}>30</div>,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.mon8am4Pm}>Mon : 8am - 4 pm</div>
      <div className={classes.tues7am6Pm}>Tues : 7am - 6 pm</div>
      <div className={classes.wed8am6Pm}>Wed : 8am - 6 pm</div>
      <div className={classes.thurs8am6Pm}>Thurs : 8am - 6 pm</div>
      <div className={classes.fri10am3Pm}>Fri : 10am - 3 pm</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.ourExperts2}>Store Hours</div>
      <Link to="/OurExperts">
        <div className={classes.rectangle10}></div>
        <div className={classes.ourExperts3}>Our Experts</div>
      </Link>

      <Link to="/">
        <div className={classes.rectangle16}>
          <Rectangle16Icon className={classes.icon3} />
        </div>   
        <div className={classes.home}>Home</div>
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
export default OurHours