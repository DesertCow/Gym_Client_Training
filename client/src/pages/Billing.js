

import SideBar from "../components/SideBar";
import Header from "../components/Header";




function Billing() {


  const updateBilling = async (event) => {
    event.preventDefault();

    const creditCardForm = new FormData(event.target);

    console.log("Name: " + creditCardForm.get("CC-Name"))
    console.log("Number: " + creditCardForm.get("CC-Number"))
    console.log("Expire Date: " + creditCardForm.get("CC-ExpireDateMonth") + "/" + creditCardForm.get("CC-ExpireDateYear"))
    console.log("CVC: " + creditCardForm.get("CC-CVC"))
    console.log("Zip Code: " + creditCardForm.get("CC-ZipCode"))


  }

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar />

        <div className="d-flex flex-column  w-100 align-items-center">

          <h1 className="d-flex flex-row text-center align-items-center mt-5 welcomeText"> Update Billing</h1>
          
          <form className="d-flex flex-column text-center align-items-center creditCardBox" onSubmit={updateBilling}>
            
            <div className="d-flex flex-row">
              {/* <h4>Name</h4> */}
              {/* <form className="mx-5 mt-3 applyMainFont d-flex justify-content-center" onSubmit={updateEmail}> */}
                <div className="">
                  <label className="applyMainFont" htmlFor="CC-Name">Name</label>
                  {/* <input type="email" className="form-control" id="memberEmail" name="memberEmail" placeholder={jwtToken.data.memberEmail}></input> */}
                  <input 
                    type="text" 
                    // maxlength="16"
                    required
                    className="form-control CC-Name" 
                    id="CC-Name" 
                    name="CC-Name" 
                    placeholder="Cardholder Name">
                  </input>
                </div>
              {/* </form> */}
            </div>

            <div className="d-flex flex-row mt-3">
                <div className="">
                  <label className="applyMainFont" htmlFor="CC-Name">Card Number</label>
                  {/* <input type="email" className="form-control" id="memberEmail" name="memberEmail" placeholder={jwtToken.data.memberEmail}></input> */}
                  <input 
                    type="text" 
                    // maxlength="16"
                    // width="64"
                    required
                    className="form-control CC-Number" 
                    id="CC-Number" 
                    name="CC-Number" 
                    placeholder="1234 1234 1234 1234">
                  </input>
                </div>
            </div>

            <div className="d-flex flex-row mt-3">

              <div className="d-flex flex-column align-items-center">
                <label className="applyMainFont" htmlFor="CC-Name">Expire Date</label>
                  <div className="d-flex">
                    <input 
                      type="text" 
                      maxLength="2"
                      // width="5"
                      required
                      className="form-control flex-column mx-1 CC-ExpireDateMonth text-center" 
                      id="CC-ExpireDateMonth" 
                      name="CC-ExpireDateMonth" 
                      placeholder="MM">
                    </input>
                    <div className="applyMainFont mt-1">-</div>
                    <input 
                      type="text" 
                      maxLength="4"
                      // width="24"
                      required
                      className="form-control flex-column mx-1 CC-ExpireDateYear text-center" 
                      id="CC-ExpireDateYear" 
                      name="CC-ExpireDateYear" 
                      placeholder="YYYY">
                    </input>
                  </div>
              </div>

              <div className="d-flex flex-column mx-3 align-items-center">
                <label className="applyMainFont" htmlFor="CC-Name">CVC</label>
                <input 
                  type="text" 
                  maxLength="3"
                  // width="24"
                  required
                  className="form-control CC-CVC" 
                  id="CC-CVC" 
                  name="CC-CVC" 
                  placeholder="CVC">
                </input>
              </div>
              
            </div>

            <div className="d-flex flex-column mt-3 align-items-center">
                <label className="applyMainFont" htmlFor="CC-Name">Zip Code</label>
                <input 
                  type="text" 
                  maxLength="5"
                  // width="24"
                  required
                  className="form-control CC-ZipCode text-center" 
                  id="CC-ZipCode" 
                  name="CC-ZipCode" 
                  placeholder="92660">
                </input>
            </div>

            <button type="button" className="userProfileUpdateBtn p-2 mt-4 text-center" type="submit">Update Billing</button>

            {/* <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <h4>Country</h4>
              </div>
              <div className="d-flex flex-column">
                <h4>Zip Code</h4>
              </div>
            </div> */}
          </form>
        </div>

      </div>
      

      

    </div>
    

    

  )
}

export default Billing;