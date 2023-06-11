import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Link, Route  } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { LandingPage } from './components/Frame1/LandingPage.js';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Services } from "./components/Services/Services"
import { OurExperts } from "./components/OurExperts/OurExperts"
import { OurHours } from "./components/StoreHours/OurHours"
import { BookAppointment } from './components/BookAppointment/BookAppointment';
import { useState } from 'react';
interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  const [expert, setExpert] = useState("");
  const [service, setService] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Services" element={<Services expert={expert} setservice={setService}/>}></Route>
        <Route path="/OurExperts" element={<OurExperts setexpert={setExpert} service={service}/>}></Route>
        <Route path="/BookAppointment" element={<BookAppointment date={date} setdate={setDate} time={time} settime={setTime} service={service} setservice={setService} expert={expert} setexpert={setExpert}/>}></Route>
        <Route path="/StoreHours" element={<OurHours date={date} time={time} setdate={setDate} settime={setTime}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
});
