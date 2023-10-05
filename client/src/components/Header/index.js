
import { useNavigate } from "react-router-dom";



const Header = () => {

  const navigate = useNavigate();

  const HeaderLogoClicked = async (event) => {

    console.log("Header Clicked!")

    event.preventDefault();
    navigate("/home");
    window.scrollTo(0, 0);

  }

  let headerWidth = window.innerWidth
  headerWidth = headerWidth + "px"

  console.log(window.innerWidth + "/" + window.innerHeight)

  return (




    <header className="main_header">



      {/* <h1 className="text-center">Header!</h1> */}

      <div className="text-center d-flex col justify-content-center align-items-center" style={{ width: headerWidth, padding: "0px"}}>
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
        <div style={{width: "225px"}}>
          <img src={require("../../img/Alpine_Athletics_Training_LOGO_White.png")}
          className="headerLogo my-3"
          style={{paddingLeft: "63px", paddingRight: "63px"}}
          onClick={() => HeaderLogoClicked(event)}
          alt="Alpine Athletics Training Logo White" />
        </div>

        <div style={{ width: headerWidth}}>
            <h1 className="col header_text text-center mt-3" style={{paddingLeft: "120px", paddingRight: "0px"}}>Alpine Athletics Training</h1>
        </div>
          <img src={require("../../img/Alpine_Athletics_Training_LOGO_White.png")}
            className="headerLogo my-3"
            style={{paddingRight: "20px"}}
            onClick={() => HeaderLogoClicked(event)}
            alt="Alpine Athletics Training Logo White" />
      </div>

    </header>



  )
}

export default Header;


//!========================= EOF =========================