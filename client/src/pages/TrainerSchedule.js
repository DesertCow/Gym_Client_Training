

import SideBar from "../components/SideBar";
import Header from "../components/Header";




function TrainerSchedule() {

  const currentTrainerSet = async (event) => {
    event.preventDefault();

    let currentTrainer = event.target.options[event.target.options.selectedIndex].value


    // console.log("Test 1")
    // console.log(event.target.options.selectedIndex)
    // console.log("Trainer = "+ event.target.options[event.target.options.selectedIndex].value)
    console.log("Trainer = "+ currentTrainer)

    // const trainerSelectForm = new FormData(event.target);
    // console.log(trainerSelectForm.get("trainerSelect"))

  }

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar />

        <div className="d-flex flex-column w-100 align-items-center">

          <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> Trainer Schedule</h1>

          <div  className="d-flex flex-row w-100 justify-content-center">

            <div className="d-flex col-2 justify-content-left align-items-start">
            
              <form className="" onChange={currentTrainerSet}>
                <select name="trainerSelect" defaultValue="Dave" className="text-center trainerSelectDropdown" >
                  <option value="Dave">Dave</option>
                  <option value="Mike">Mike</option>
                  <option value="Tammy">Tammy</option>
                  <option value="Zara">Zara</option>
                  <option value="Kyle">Kyle</option>
                </select>
              </form>

            </div>

            <div className="d-flex justify-content-center align-items-center trainerCalenderBox">
            
              <h1>** Insert Calender Here **</h1>

            </div>

            <div className="d-flex col-2">
            
              {/* <h1>Pick</h1> */}

            </div>

          </div>

        </div>

      </div>
      

      

    </div>
    

    

  )
}

export default TrainerSchedule;