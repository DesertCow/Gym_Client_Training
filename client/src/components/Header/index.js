
import { useNavigate } from "react-router-dom";



const Header = () => {

  const navigate = useNavigate();

  const HeaderLogoClicked = async (event) => {

    console.log("Header Clicked!")

    event.preventDefault();
    navigate("/home");
    window.scrollTo(0, 0);

  }


  return (


    <header className="main_header">



      {/* <h1 className="text-center">Header!</h1> */}

      <div className="text-center">
        <img src={require("../../img/Logo_Veganliftz_White.png")}
          className="logo my-3"
          onClick={() => HeaderLogoClicked(event)}
          alt="Vegan Liftz Logo White" />
      </div>



    </header>



  )
}

export default Header;


//!========================= EOF =========================