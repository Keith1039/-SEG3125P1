import { memo, useState } from 'react';
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
  date: string
  time: string
  setdate: Function
  settime: Function
}
/* @figmaId 110:18 */
export function OurHours(props: Props) {
  const setDate = (date: String) => {
    props.setdate(date)
    setTimes()

  }
  const setTime = (time: String) => {
    props.settime(time)
  }
  const [time1, settime1] = useState("")
  const [time2, settime2] = useState("")

  const parseNum = (input: String) => {
    let numString = ''
    let char = '';
    for(let i = 0; i < input.length; i++) {
      char = input[i]
      if (!Number.isNaN(Number(char))) {
        numString += char;
      }
    }

    return numString
  }

  const setTimes = () => {
    let num = Number(parseNum(props.date))

    if (num.valueOf() % 7 == 2) {
      settime1("10:00 am - 11:00 am")
      settime2("2:00 pm - 3:00 pm")

    }
    else if (num.valueOf() % 7 == 3) {
      settime1("9:00 am - 10:00 am")
      settime2("4:00 pm - 5:00 pm")
    }
    else if (num.valueOf() % 7 == 4) {
      settime1("10:00 am - 11:00 am")
      settime2("3:00 pm - 4:00 pm")

    }
    else if (num.valueOf() % 7 == 5) {
      settime1("9:00 am - 10:00 am")
      settime2("5:00 pm - 6:00 pm")
    }
    else if (num.valueOf() % 7 == 6) {
      settime1("11:00 am - 12:00 pm")
      settime2("1:00 pm - 2:00 pm")
    }
    else {
      settime1("")
      settime2("")
    }

  }

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
              <button onClick={() => setDate("June 1st")}><Component1_Property1Default /></button>
              <button onClick={() => setDate("June 2nd")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._1}>2</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 3rd")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._12}>3</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 4th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._13}>4</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 5th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._14}>5</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 6th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._15}>6</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 7th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._16}>7</div>,
                  }}
                />
              </button>
            </div>
            <div className={classes.frame92}>
              <button onClick={() => setDate("June 8th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._17}>8</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 9th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._18}>9</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 10th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._19}>10</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 11th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._110}>11</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 12th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._111}>12</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 13th")}>
                <Component1_Property1Hover
                  text={{
                    _1: <div className={classes._112}>13</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 14th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._113}>14</div>,
                  }}
                />
              </button>
            </div>
            <div className={classes.frame10}>
              <button onClick={() => setDate("June 15th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._114}>15</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 16th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._115}>16</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 17th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._116}>17</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 18th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._117}>18</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 19th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._118}>19</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 20th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._119}>20</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 21st")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._120}>21</div>,
                  }}
                />
              </button>
            </div>
            <div className={classes.frame11}>
              <button onClick={() => setDate("June 22nd")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._121}>22</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 23rd")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._122}>23</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 24th")}>
`              <Component1_Property1Default
                text={{
                  _1: <div className={classes._123}>24</div>,
                }}
              />`
              </button>
              <button onClick={() => setDate("June 25th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._124}>25</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 26th")} >
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._125}>26</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 27th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._126}>27</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 28th")}>
                <Component1_Property1Default
                  text={{
                    _1: <div className={classes._127}>28</div>,
                  }}
                />
              </button>
            </div>
            <div className={classes.frame12}>
              <button onClick={() => setDate("June 29th")}>
                <Component1_Property1Default
                  className={classes.component1}
                  text={{
                    _1: <div className={classes._128}>29</div>,
                  }}
                />
              </button>
              <button onClick={() => setDate("June 30th")}>
                <Component1_Property1Default
                  className={classes.component3}
                  text={{
                    _1: <div className={classes._129}>30</div>,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={() => setTime(time1)}>
      <div className={classes.rectangle4}></div>
      <div className={classes.time1}>{time1}</div>
      </button>
      <button onClick={() => setTime(time2)}>
      <div className={classes.rectangle5}></div>
      <div className={classes.time2}>{time2}</div>
      </button>
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
      <Link to="/BookAppointment">
        <div className={classes.rectangle6}></div>
        <div className={classes.confirmAppointment}> Book Appointment</div>
      </Link>
    </div>
  );
}
export default OurHours