


import SideBar from "../components/SideBar";
import Header from "../components/Header";




function Calendar() {

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar />

        <h1 className="col text-center mt-5 welcomeText"> Calendar</h1>

      </div>
      

      

    </div>
    

    

  )
}

export default Calendar;