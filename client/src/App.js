//* VeganLiftz Client App.js
//* By Clayton Skaggs
//* Version 0.1 [WW38]

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//? ============= Font Import ============= */




//? ============= Page Import ============= */

import Login from './pages/Login';

import Home from './pages/Home';
import TrainingCalendar from './pages/Calendar';
import TrainerSchedule from './pages/TrainerSchedule';
import Billing from './pages/Billing';

import UserSettings from './pages/UserSettings';

import Register from './pages/Register'
import PasswordReset from './pages/PasswordReset'


//? ============= Main ============= */


export default function App() {

  require('./css/main_style.css')
  require('./css/reset.css')
  require('../node_modules/react-big-calendar/lib/css/react-big-calendar.css')
  require('./css/calendar.css')
  // require('./css/react-big-calendar.css.map)

  return (

    // <h1 className="text-center mt-5"> VeganLiftz App [From App.js]</h1>

    <Router>
      <Routes>        
        {/*//? ======= Entry Page ======= */}
        <Route path="/" element={<Login />} />        
        {/*//? ======= Register/Reset Pages ======= */}
        <Route path="/register" element={<Register />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        {/*//? ======= Main Pages ======= */}
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<TrainingCalendar />} />
        <Route path="/trainerSchedule" element={<TrainerSchedule />} />
        {/*//? ======= Settings Pages ======= */}
        <Route path="/billing" element={<Billing />} />
        <Route path="/userSettings" element={<UserSettings />} />
      </Routes>
    </Router>
  );
}