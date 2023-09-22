
import { useNavigate } from "react-router-dom";




const SideBar = () => {

  const navigate = useNavigate();

  return (

    // <h1 className="text-center mt-5">Side Bar</h1>

    <div className="col sideBarMain">

      <div className="row text-center">

        <p className="sideBarLink mt-4"  onClick={() => navigate("/home")}>Home</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/calendar")}>Calendar</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/trainerSchedule")}>Trainer Schedule</p>

        <p className="sideBarLink mt-4"  onClick={() => navigate("/billing")}>Billing</p>

      </div>

    </div>

  )
}

export default SideBar;


//!========================= EOF =========================