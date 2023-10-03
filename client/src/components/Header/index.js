
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

      <div className="text-center d-flex col justify-content-center ml-5">
        {/* <img src={require("../../img/Alpine_Athletics_Training_TEXT_White.png")} */}
        {/* <img src={require("../../img/Alpine_Athletics_Training_LOGO_White.png")}
          className="col headerLogo my-3"
          onClick={() => HeaderLogoClicked(event)}
          alt="Alpine Athletics Training Logo White" />
        <h1 className="col header_text text-center mt-3">Alpine Athletics Training</h1> */}
        {/* <img src={require("../../img/Alpine_Athletics_Training_TEXT_White.png")}
          className="headerLogo my-3"
          onClick={() => HeaderLogoClicked(event)}
          alt="Alpine Athletics Training Logo White" /> */}
        {/* <img src={require("../../img/Alpine_Athletics_Training_LOGO_White.png")}
          className="col headerLogo my-3"
          onClick={() => HeaderLogoClicked(event)}
          alt="Alpine Athletics Training Logo White" /> */}
        <img src={require("../../img/Alpine_Athletics_Training_LOGO_White.png")}
          className="headerLogo my-3"
          onClick={() => HeaderLogoClicked(event)}
          alt="Alpine Athletics Training Logo White" />
        <h1 className="col header_text text-center mt-3">Alpine Athletics Training</h1>
        <img src={require("../../img/Alpine_Athletics_Training_LOGO_White.png")}
          className="headerLogo my-3"
          onClick={() => HeaderLogoClicked(event)}
          alt="Alpine Athletics Training Logo White" />
      </div>



    </header>



  )
}

export default Header;


//!========================= EOF =========================