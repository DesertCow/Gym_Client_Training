


import SideBar from "../components/SideBar";
import Header from "../components/Header";




function Home() {

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar/>

        <div className="w-100">

          <h1 className="text-center mt-5 welcomeText"> Welcome Clayton</h1>

          <div className="d-flex justify-content-around align-items-center">

            <div className="flex-column">

              <div className="workoutBox mt-5">

                <p className="text-center todaysBoxTitle"> Workout</p>

              </div>

            </div>

            <div className="flex-column">

              <div className="workoutBox mt-5">

                <p className="text-center todaysBoxTitle"> Diet</p>

              </div>

            </div>

          </div>


        </div>

      </div>
      

      

    </div>
    

    

  )
}

export default Home;