


import SideBar from "../components/SideBar";
import Header from "../components/Header";




function Home() {

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar/>

        <h1 className="col text-center mt-5 welcomeText"> Welcome Clayton</h1>

      </div>
      

      

    </div>
    

    

  )
}

export default Home;