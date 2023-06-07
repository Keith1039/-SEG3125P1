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
  const [name, setName] = useState("");
  const [name2, setName2] = useState("")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Services" element={<Services name={name}/>}></Route>
        <Route path="/OurExperts" element={<OurExperts setname={setName} />}></Route>
        <Route path="/BookAppointment" element={<BookAppointment/>}></Route>
        <Route path="/StoreHours" element={<OurHours/>}></Route>
      </Routes>
    </BrowserRouter>
  );
});
