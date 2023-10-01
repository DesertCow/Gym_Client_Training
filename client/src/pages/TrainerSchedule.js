import React from "react";
import { useState, updateState } from 'react';
import Calendar from "@ericz1803/react-google-calendar";

import SideBar from "../components/SideBar";
import Header from "../components/Header";

//* GraphQL Queries Import
import { useQuery } from '@apollo/client';
import { getTrainerList_Q } from '../utils/queries';




function TrainerSchedule() {

  //!!!!!!!!!!!!!!!!!!!!!!! 💀💀💀💀 EXPOSED API Keys 💀💀💀💀 !!!!!!!!!!!!!!!!!!!!!!!
  const API_KEY = "AIzaSyCbWMQa_jgNRxsSqARCVPy0nsmzrvFY-Mg";
  //!!!!!!!!!!!!!!!!!!!!!!! 💀💀💀💀 EXPOSED API Keys 💀💀💀💀 !!!!!!!!!!!!!!!!!!!!!!!

  const [selectedTrainer, setSelectedTrainer] = useState("Dave");
  const [selectedTrainerUpdated, setSelectedTrainerUpdated] = useState(false);
  const [selectedTrainerCalLink, setSelectedTrainerCalLink] = useState("46d0b7242503e7df5b2f2d2748186f4b71019055df1e0a378a44b143da92e93f@group.calendar.google.com");
  const forceUpdate = React.useCallback(() => updateState({}), []);


  //* Get Latest List of Trainers from App Server
  var { loading, data } = useQuery(getTrainerList_Q)

  // let calendars = [
  // { calendarId: calenderID },
  // // {
  // //   calendarId: "YOUR_CALENDAR_ID_2",
  // //   color: "#B241D1", //optional, specify color of calendar 2 events
  // // },
  // ];




  const currentTrainerSet = async (event) => {
    // event.preventDefault();

    let currentTrainer = event.target.options[event.target.options.selectedIndex].value
    let currentCalendarLink = event.target.options[event.target.options.selectedIndex].accessKey
    
    await setSelectedTrainerUpdated(true)
    await setSelectedTrainer(currentTrainer);
    await setSelectedTrainerCalLink(currentCalendarLink);

    // console.log("Test 1")
    // console.log(event.target.options.selectedIndex)
    // console.log("Trainer = "+ event.target.options[event.target.options.selectedIndex].value)
    console.log("Trainer = "+ currentTrainer + selectedTrainerUpdated)
    
    // console.log("Trainer = "+ selectedTrainer)

    // const trainerSelectForm = new FormData(event.target);
    // console.log(trainerSelectForm.get("trainerSelect"))
    // Calendar.forceUpdate();
    // this.forceUpdate();
    // let [value, setState] = useState(true);
    // return () => setState(!value);

  }

    function populateListOfTrainers(trainerData) {

      //* Create List of shapers from data pull from Database
      trainerListHTML.push(<option key={trainerData.calendarLink} accessKey={trainerData.calendarLink} value={trainerData.trainerFirstName}>{trainerData.trainerFirstName}</option>)

    }

  if(loading) {

    return (
      
        <div>

          <Header />

          <div className="d-flex flex-row">

            <SideBar />

            <div className="d-flex flex-column w-100 align-items-center">

              <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> Loading! </h1>

            </div>

          </div>
          
        </div>
    )

  }

  if(!loading && data !== undefined) {

    var trainerListHTML = []
    var calendarHTML = []

    if(true) {
      calendarHTML.push(<Calendar apiKey={API_KEY} calendars={[{ calendarId: {selectedTrainerCalLink} }]} key={selectedTrainer} showFooter="false"/>)
    }

    // console.log("=========================================")
    // console.log(calendarHTML)

    data.getTrainerList.forEach(populateListOfTrainers)

    // console.log("========= Trainer List =========")
    // console.log(data)
    // console.log(trainerListHTML)
    // console.log(data.getTrainerList[0].trainerFirstName)
    // console.log(data.getTrainerList[1].trainerFirstName)
    // console.log(data.getTrainerList[2].trainerFirstName)

    // if(selectedTrainer == "Dave")
    // {

      console.log("Calendar Link = " + selectedTrainerCalLink)

      // let calendars = [
      //   // { calendarId: selectedTrainerCalLink },
      //   { calendarId: "46d0b7242503e7df5b2f2d2748186f4b71019055df1e0a378a44b143da92e93f@group.calendar.google.com" },
      // ];

    // let tempTrainer = selectedTrainer

    // console.log(calendars)

    // if(tempTrainer !== selectedTrainer) {
    // if(selectedTrainerUpdated) {
    // if(false) {
    // // if(true) {

    //   // setSelectedTrainerUpdated(false)

    //   return (

    //     <div>

    //       <Header />

    //       <div className="d-flex flex-row">

    //         <SideBar />

    //         <div className="d-flex flex-column w-100 align-items-center">

    //           <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> {selectedTrainer} Schedule</h1>

    //           <div  className="d-flex flex-row w-100 justify-content-center">

    //             <div className="d-flex col-2 justify-content-left align-items-start">
                
    //               <form className="" onChange={currentTrainerSet}>
    //                 <select name="trainerSelect" defaultValue={selectedTrainer} className="text-center trainerSelectDropdown" >
    //                   {trainerListHTML}
    //                 </select>
    //               </form>

    //             </div>

    //             <div name={selectedTrainer} className="d-flex justify-content-center align-items-center trainerCalenderBox my-5">

    //               {/* <h2 className="text-center hiddenText"> {selectedTrainer}</h2> */}
    //               {/* <Calendar apiKey={API_KEY} calendars={calendars} key={selectedTrainer} showFooter="false"/> */}
    //               {/* <Calendar apiKey={API_KEY} calendars={[{ calendarId: {selectedTrainerCalLink} }]} key={selectedTrainer} showFooter="false"/> */}
    //               {calendarHTML}
    //             </div>

    //             <div className="d-flex col-2">
                
    //               {/* <h1>Pick</h1> */}

    //             </div>

    //           </div>

    //         </div>

    //       </div>
          
    //     </div>
        
    //   )
    // }
    // else {
    // if(true) {
      let calendars = [
      { calendarId: "46d0b7242503e7df5b2f2d2748186f4b71019055df1e0a378a44b143da92e93f@group.calendar.google.com" },
    ];

    return (

      <div>

        <Header />

        <div className="d-flex flex-row">

          <SideBar />

          <div className="d-flex flex-column w-100 align-items-center">

            <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> {selectedTrainer} Schedule</h1>

            <div  className="d-flex flex-row w-100 justify-content-center">

              <div className="d-flex col-2 justify-content-left align-items-start">
              
                <form className="" onChange={currentTrainerSet}>
                  <select name="trainerSelect" defaultValue="Dave" className="text-center trainerSelectDropdown" >
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Tammy">Tammy</option>
                    {/* <option value="Zara">Zara</option> */}
                    {/* <option value="Kyle">Kyle</option> */}
                  </select>
                </form>

              </div>
              <h1 className="text-center hiddenText"> {selectedTrainer}</h1>
              <div name={selectedTrainer} className="d-flex justify-content-center align-items-center trainerCalenderBox my-5">

                {/* <h2 className="text-center hiddenText"> {selectedTrainer}</h2> */}
                <Calendar apiKey={API_KEY} calendars={calendars} showFooter="false"/>

              </div>

              <div className="d-flex col-2">
              
                {/* <h1>Pick</h1> */}

              </div>

            </div>

          </div>

        </div>
        
      </div>
      )

      // setSelectedTrainerUpdated(false)

      // return (

      //   <div>

      //     <Header />

      //     <div className="d-flex flex-row">

      //       <SideBar />

      //       <div className="d-flex flex-column w-100 align-items-center">

      //         <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> {selectedTrainer} Schedule (Default)</h1>

      //         <div  className="d-flex flex-row w-100 justify-content-center">

      //           <div className="d-flex col-2 justify-content-left align-items-start">
                
      //             <form className="" onChange={currentTrainerSet}>
      //               <select name="trainerSelect" defaultValue={selectedTrainer} className="text-center trainerSelectDropdown" >
      //                 {trainerListHTML}
      //               </select>
      //             </form>

      //           </div>

      //           <div className="d-flex justify-content-center align-items-center trainerCalenderBox my-5">

      //             {/* <h2 className="text-center hiddenText"> {selectedTrainer}</h2> */}
      //             {/* <Calendar apiKey={API_KEY} calendars={calendars} showFooter="false"/> */}
      //             <Calendar apiKey={API_KEY} calendars={calendars} showFooter="false"/>

      //           </div>

      //           <div className="d-flex col-2">
                
      //             {/* <h1>Pick</h1> */}

      //           </div>

      //         </div>

      //       </div>

      //     </div>
          
      //   </div>
        
      // )
    // }

    // if(selectedTrainer == "Mike")
    // {
    //   let calendars = [
    //     // { calendarId: "46d0b7242503e7df5b2f2d2748186f4b71019055df1e0a378a44b143da92e93f@group.calendar.google.com" },
    //     { calendarId: selectedTrainerCalLink },
    //   ];

      // return (

      //   <div>

      //     <Header />

      //     <div className="d-flex flex-row">

      //       <SideBar />

      //       <div className="d-flex flex-column w-100 align-items-center">

      //         <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> {selectedTrainer} Schedule</h1>

      //         <div  className="d-flex flex-row w-100 justify-content-center">

      //           <div className="d-flex col-2 justify-content-left align-items-start">
                
      //             <form className="" onChange={currentTrainerSet}>
      //               <select name="trainerSelect" defaultValue={selectedTrainer} className="text-center trainerSelectDropdown" >
      //                 {trainerListHTML}
      //               </select>
      //             </form>

      //           </div>
      //           <h1 className="text-center hiddenText"> {selectedTrainer}</h1>
      //           <div name={selectedTrainer} className="d-flex justify-content-center align-items-center trainerCalenderBox my-5">

      //             {/* <h2 className="text-center hiddenText"> {selectedTrainer}</h2> */}
      //             <Calendar apiKey={API_KEY} calendars={calendars} showFooter="false"/>

      //           </div>

      //           <div className="d-flex col-2">
                
      //             {/* <h1>Pick</h1> */}

      //           </div>

      //         </div>

      //       </div>

      //     </div>
          
      //   </div>
        
      // )
    // }

    // if(selectedTrainer == "Tammy")
    // {

    //   let calendars = [
    //     // { calendarId: "30a9307a1a76678f400a925e5d9d6d3b28b302520db061f8d1ddbd2c0671af75@group.calendar.google.com" },
    //     { calendarId: selectedTrainerCalLink },
    //   ];

    //   return (

    //     <div>

    //       <Header />

    //       <div className="d-flex flex-row">

    //         <SideBar />

    //         <div className="d-flex flex-column w-100 align-items-center">

    //           <h1 className="d-flex flex-row text-center align-items-center mt-4 welcomeText"> {selectedTrainer} Schedule</h1>

    //           <div  className="d-flex flex-row w-100 justify-content-center">

    //             <div className="d-flex col-2 justify-content-left align-items-start">
                
    //               <form className="" onChange={currentTrainerSet}>
    //                 <select name="trainerSelect" defaultValue={selectedTrainer} className="text-center trainerSelectDropdown" >
    //                   {trainerListHTML}
    //                 </select>
    //               </form>

    //             </div>

    //             <div className="d-flex flex-column justify-content-center align-items-center trainerCalenderBox my-5">

    //               <h1 className="text-center hiddenText"> {selectedTrainer}</h1>
    //               <Calendar apiKey={API_KEY} calendars={calendars}/>

    //             </div>

    //             <div className="d-flex col-2">
                
    //               {/* <h1>Pick</h1> */}

    //             </div>

    //           </div>

    //         </div>

    //       </div>
          
    //     </div>
        
    //   )
    // }
  }

}

export default TrainerSchedule;