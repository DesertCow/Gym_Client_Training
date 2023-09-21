//* VeganLiftz Client App.js
//* By Clayton Skaggs
//* Version 0.1 [WW38]

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//? ============= Font Import ============= */




//? ============= Page Import ============= */

import Login from './pages/Login';


//? ============= Main ============= */


export default function App() {

  require('./css/main_style.css')
  require('./css/reset.css')

  return (

    // <h1 className="text-center mt-5"> VeganLiftz App [From App.js]</h1>

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/passwordReset" element={<PasswordReset />} /> */}
      </Routes>
    </Router>
  );
}