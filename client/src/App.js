//* VeganLiftz Client App.js
//* By Clayton Skaggs
//* Version 0.1 [WW38]

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//? ============= Font Import ============= */




//? ============= Page Import ============= */

import Login from './pages/Login';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import TrainerSchedule from './pages/TrainerSchedule';
import Billing from './pages/Billing';

import Register from './pages/Register'
import PasswordReset from './pages/PasswordReset'


//? ============= Main ============= */


export default function App() {

  require('./css/main_style.css')
  require('./css/reset.css')

  return (

    // <h1 className="text-center mt-5"> VeganLiftz App [From App.js]</h1>

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/trainerSchedule" element={<TrainerSchedule />} />
        <Route path="/billing" element={<Billing />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/passwordReset" element={<PasswordReset />} />

        {/* <Route path="/passwordReset" element={<PasswordReset />} /> */}
      </Routes>
    </Router>
  );
}