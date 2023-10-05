

import SideBar from "../components/SideBar";
import Header from "../components/Header";




function UserSettings() {


  const HandleProfilePictureUpload = async (event) => {

    console.log("Upload New User Profile Picture!")

  }

  const updateName = async (event) => {
    event.preventDefault();

    const nameForm = new FormData(event.target);

    console.log("Update Name (" + nameForm.get("memberFirstName") + " " + nameForm.get("memberLastName") + ")")

  }

  const updateEmail = async (event) => {
    event.preventDefault();

    const emailForm = new FormData(event.target);


    console.log("Update Email (" + emailForm.get("memberEmail") + ")")

  }

  const updatePassword = async (event) => {
    event.preventDefault();

    const passwordForm = new FormData(event.target);

    console.log("Update Password (" + passwordForm.get("password") + "/" + passwordForm.get("passwordConfirm") + ")")

  }

  const updateDOB = async (event) => {
    event.preventDefault();

    // const rawDOBForm = event.target;
    const DOBForm = new FormData(event.target);

    console.log("Update Birthday (" + DOBForm.get("birth-month") + "-" + DOBForm.get("birth-day") + "-" + DOBForm.get("birth-year") + ")")

  }

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar />

        {/* <h1 className="col text-center mt-5 welcomeText"> User Settings</h1> */}

        {/* <h1 className="editProfileText text-center mt-5">{jwtToken.data.memberFirstName} {jwtToken.data.memberLastName}</h1> */}
        <div className="w-100">
          <h1 className="editProfileUserName text-center mt-5">Clayton Skaggs</h1>
          <h3 className="editProfileText text-center"> Welcome to your Alpine Athletics Profile</h3>
          
          <div className="mx-2 text-center">
            <div className="my-3">
              <div className="text-center">
                {/* <img src={"https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/" + jwtToken.data._id + ".jpg"}
                  className="avatarIcon"
                alt="User Icon" /> */}
                <img src={require("../img/Temp_User_Icon.jpg")}
                  className="avatarIcon"
                alt="User Icon" />
              </div>
            </div>
            {/* <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleProfilePictureUpload(event)}>Upload Profile Picture</button> */}
            <div className="mt-3">
              {/* <input className="p-2 uploadBox" type="file" name="profilePictureFile" onChange={fileChangeHandler} /> */}
              <input className="p-2 uploadBox" type="file" name="profilePictureFile"/>
            </div>
            <button className="mt-3 py-2 userProfileUpdateBtn" onClick={(event) => HandleProfilePictureUpload(event)}>Upload</button>
          </div>

          <form className="mx-5 mt-0 applyMainFont d-flex justify-content-center" onSubmit={updateName}>

            <div className="form-group mx-2 my-5 text-center">
              <label htmlFor="exampleInputEmail1">Member Name</label>
              <input 
                type="text" 
                className="form-control nameInput mt-3" 
                id="memberFirstName" 
                // placeholder={jwtToken.data.memberFirstName}
                placeholder="Clayton"
                name="memberFirstName">
              </input>
              <input 
                type="text" 
                className="form-control mt-2 nameInput" 
                id="memberLastName" 
                // placeholder={jwtToken.data.memberLastName}
                placeholder="Skaggs"
                name="memberLastName">
              </input>

              <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" type="submit">Update Name</button>
            
            </div>
          </form>

          {/* <form className="mx-5 mt-3 applyMainFont" onSubmit={HandleEmailSubmit}> */}
          <form className="mx-5 mt-3 applyMainFont d-flex justify-content-center" onSubmit={updateEmail}>
            <div className="form-group mx-2 mb-5 text-center">
              <label htmlFor="exampleInputEmail1">Email address</label>
              {/* <input type="email" className="form-control" id="memberEmail" name="memberEmail" placeholder={jwtToken.data.memberEmail}></input> */}
              <input 
                type="email" 
                className="form-control emailInput mt-3" 
                id="memberEmail" 
                name="memberEmail" 
                placeholder="test@gmail.com">
              </input>

              <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" type="submit">Update Email</button>
            
            </div>
          </form>

          <form className="mx-5 mt-3 applyMainFont d-flex justify-content-center" onSubmit={updatePassword}>
            <div className="form-group mx-2 mb-5 text-center">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input 
                type="password" 
                className="form-control passwordInput" 
                id="password" 
                name="password" 
                placeholder="Password">
              </input>

              <label htmlFor="exampleInputPassword1" className="mt-3">Password Confirm</label>
              <input 
                type="password" 
                className="form-control passwordInput" 
                id="passwordConfirm" 
                name="passwordConfirm" 
                placeholder="Password">
              </input>

              <button type="button" className="userProfileUpdateBtn p-2 mt-3 mb-2 text-center" type="submit">Update Password</button>
            
            </div>
          </form>

          <form className="" onSubmit={updateDOB}>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="m-4 applyMainFont">
                  Date Of Birth
              </div>
              <select name="birth-month" defaultValue="1" className="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              <div className="m-0 applyMainFont">
                -
              </div>
              <select name="birth-day" defaultValue="1" className="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

                <div className="m-0 applyMainFont">
                  -
                </div>
                <select name="birth-year" defaultValue="1" className="">
                  <option value="1960">1960</option>
                  <option value="1961">1961</option>
                  <option value="1962">1962</option>
                  <option value="1963">1963</option>
                  <option value="1964">1964</option>
                  <option value="1965">1965</option>
                  <option value="1966">1966</option>
                  <option value="1967">1967</option>
                  <option value="1968">1968</option>
                  <option value="1969">1969</option>
                  <option value="1970">1970</option>
                  <option value="1971">1971</option>
                  <option value="1972">1972</option>
                  <option value="1973">1973</option>
                  <option value="1974">1974</option>
                  <option value="1975">1975</option>
                  <option value="1976">1976</option>
                  <option value="1977">1977</option>
                  <option value="1978">1978</option>
                  <option value="1979">1979</option>
                  <option value="1980">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                </select>
              </div>

              <div className="mx-5 mb-5 applyMainFont d-flex justify-content-center">
                <button type="button" className="userProfileUpdateBtn p-2 mb-2 text-center" type="submit">Update Birthday</button>
              </div>

            </form>

        </div>
      </div>
    </div>
  )
}

export default UserSettings;