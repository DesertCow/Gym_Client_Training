import { useNavigate } from "react-router-dom";

import { LOGIN_M } from '../../utils/mutations'
import { useMutation } from '@apollo/client';

const LoginBox = () => {

  const navigate = useNavigate();

  //* Load Login Mutation
  const [login, { data }] = useMutation(LOGIN_M);

  //* Login Button Handle
  const HandleLogin = async (event) => {

    event.preventDefault();

    const loginSession = event.target;
    const loginForm = new FormData(loginSession);

    console.log("Email: " + loginForm.get("memberEmail"))
    console.log("Password: " + loginForm.get("password"))

    //* Execute Login Mutation
    const { data } = await login({
      
      variables: { 
        userEmail: loginForm.get("memberEmail"),
        password: loginForm.get("password"),
      },

    });

    //* Handle Returned Login Token
    if( data.login.token == "INVALID Password!" || data.login.token == "Email Not Found!") {

      //* Bad Token Do Not Save
      window.alert("LOGIN Failed: Invalid Email/Password");
      console.log(data.login.token)
      window.location.reload(false);

    }
    else {

      //* Create JWT Token
      // Auth.login(JSON.stringify(data.login));

      console.log("Login Valid!")

      // setFormState({
      //   memberEmail: '',
      //   password: '',
      // });

      navigate("/home")
      window.scrollTo(0, 0);
    }

  }

  //* Password Reset Button Handle
  const passwordReset = async (event) => {
    
    event.preventDefault();
    navigate("/passwordReset");
    window.scrollTo(0, 0);
  };

  //* New User Button Handle
  const newUserRegister = async (event) => {
    
    event.preventDefault();
    navigate("/register");
    window.scrollTo(0, 0);
  };

  return (

   <div className="row d-flex w-100 loginTopBox">

        <div className="col-12 mt-4 mb-5 text-center">
          <img src={require("../../img/Alpine_Athletics_Training_LOGO.png")}
            className="loginLogo"
            alt="VeganLiftz Logo" />
        </div>

        <div className="col">

          <form className="welcome" onSubmit={HandleLogin}>
            <div className="text-center mt-4">
              <div className="">
                {/* <p className="mb-0">Email:</p> */}
                <div className="loginTextBox">
                  <input
                    className="emailInputBox"
                    type="text"
                    id="memberEmail"
                    name="memberEmail"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="mt-4">
                {/* <p className="mb-0">Password:</p> */}
                <div className="">
                  <input
                    className="passwordInputBox"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <p className="passwordRecoveryLink mb-0">
                  <a href="/passwordReset">Password Recovery</a>
                </p>
              </div>
            </div>
            <div className="d-flex row text-center my-5 px-5">
              <button className="loginbtns p-3" type="submit">Log in</button>
              <button className="loginbtns mt-4 p-3" type="button" onClick={(event) => newUserRegister(event)}>New Member Registration</button>
            </div>
          </form>
        </div >

      <footer className="d-flex justify-content-center footerLogin pb-1">
        <div className="d-flex align-items-left pt-2 px-2 pb-1 justify-content-around">
          <div className="d-flex flex-column">
            <a href="https://github.com/DesertCow">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          {/* <MainFooter /> */}
          <div className="companyName d-flex justify-content-center align-items-center">&nbsp;🙊 Monkey See Monkey Do LLC. 🙉&nbsp;</div>
          <div className="d-flex flex-column">
            <a href="https://www.claytonskaggs.dev/">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div >
  )
};

export default LoginBox;


//!========================= EOF =========================