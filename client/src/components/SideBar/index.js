
import { useNavigate } from "react-router-dom";




const SideBar = () => {

  const navigate = useNavigate();

  const logOutConfirm = async (event) => {

    event.preventDefault();

    console.log('Log Out Request!')

  }

  return (

    // <h1 className="text-center mt-5">Side Bar</h1>

    <div className="d-flex flex-column sideBarMain">

      <div className="d-flex flex-column text-center">

        <p className="sideBarLink mt-4"  onClick={() => navigate("/home")}>Home</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/calendar")}>Training Calendar</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/trainerSchedule")}>Trainer Schedule</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/billing")}>Billing</p>

        <div className="d-flex flex-row mb-2 justify-content-around sidebarBottomIcons">

          <div className="p-2 sidebar_footer_logo_padded">
             <img src={require("../../img/icons/logout_icon.png")}
              className=" sidebar_footer_logo_logout sidebar_footer_logo"
              onClick={() => logOutConfirm(event)}
              alt="Settings Icon" />
          </div>

          <div className="p-2 sidebar_footer_logo_padded">
            <img src={require("../../img/icons/settings_icon.png")}
              className="sidebar_footer_logo_settings sidebar_footer_logo"
              onClick={() => navigate("/userSettings")}
              alt="Settings Icon" />
          </div>
        </div>

      </div>

    </div>

  )
}

export default SideBar;


//!========================= EOF =========================