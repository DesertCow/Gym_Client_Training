

import SideBar from "../components/SideBar";
import Header from "../components/Header";




function UserSettings() {


  const HandleProfilePictureUpload = async (event) => {

    console.log("Upload New User Profile Picture!")

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
          <h3 className="editProfileText text-center"> Welcome to your Vegan Liftz Profile</h3>
          
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


          {/* <form className="mx-5 mt-0 applyMainFont" onSubmit={HandleNameSubmit}> */}
          <form className="mx-5 mt-0 applyMainFont d-flex justify-content-center">

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
              {/* <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleNameSubmit(event)}>Update Name</button> */}
              <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" type="submit">Update Name</button>
            </div>
          </form>

          {/* <form className="mx-5 mt-3 applyMainFont" onSubmit={HandleEmailSubmit}> */}
          <form className="mx-5 mt-3 applyMainFont d-flex justify-content-center">
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

          {/* <form className="mx-5 mt-3 applyMainFont" onSubmit={HandlePasswordSubmit}> */}
          <form className="mx-5 mt-3 applyMainFont d-flex justify-content-center">
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

        </div>
      </div>
      

      

    </div>
    

    

  )
}

export default UserSettings;