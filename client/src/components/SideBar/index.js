
import { useNavigate } from "react-router-dom";




const SideBar = () => {

  const navigate = useNavigate();

  const logOutConfirm = async (event) => {

    event.preventDefault();

    console.log('Log Out Request!')

  }

  return (

    // <h1 className="text-center mt-5">Side Bar</h1>

    <div className="col sideBarMain">

      <div className="row text-center">

        <p className="sideBarLink mt-4"  onClick={() => navigate("/home")}>Home</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/calendar")}>Calendar</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/trainerSchedule")}>Trainer Schedule</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/billing")}>Billing</p>

        <div className="row mt-5 justify-content-around">


          <img src={require("../../img/icons/logout_icon.png")}
            className=" sidebar_footer_logo"
            onClick={() => logOutConfirm(event)}
            alt="Settings Icon" />
          <img src={require("../../img/icons/settings_icon.png")}
            className="sidebar_footer_logo"
            onClick={() => navigate("/userSettings")}
            height="50px"
            alt="Settings Icon" />

        </div>

      </div>

    </div>

  )
}

export default SideBar;


//!========================= EOF =========================