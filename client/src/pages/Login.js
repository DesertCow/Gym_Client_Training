import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
// import { LOGIN_M } from '../utils/mutations';
// import { useMutation } from '@apollo/client';

import LoginBox from "../components/LoginBox";


const Login = () => {


  return (

    <div className="d-flex flex-column align-items-center justify-content-center loginPage">

      <LoginBox />

    </div>
  )
};


export default Login;

//!========================= EOF =========================