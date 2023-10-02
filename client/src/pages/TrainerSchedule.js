import React from "react";
import { useState, updateState } from 'react';

//* Google Calendar Package
import Calendar from "@ericz1803/react-google-calendar";

//* Component Import
import SideBar from "../components/SideBar";
import Header from "../components/Header";

//* GraphQL Queries Import
import { useQuery } from '@apollo/client';
import { getTrainerList_Q } from '../utils/queries';

//* Spinner Import
import { BallTriangle } from  'react-loader-spinner'



function TrainerSchedule() {

  //!!!!!!!!!!!!!!!!!!!!!!! 💀💀💀💀 EXPOSED API Keys 💀💀💀💀 !!!!!!!!!!!!!!!!!!!!!!!
  const API_KEY = "AIzaSyCbWMQa_jgNRxsSqARCVPy0nsmzrvFY-Mg";
  //!!!!!!!!!!!!!!!!!!!!!!! 💀💀💀💀 EXPOSED API Keys 💀💀💀💀 !!!!!!!!!!!!!!!!!!!!!!!

  const [selectedTrainer, setSelectedTrainer] = useState("Default");
  const [selectedTrainerCalLink, setSelectedTrainerCalLink] = useState("Default");


  //* Get Latest List of Trainers from App Server
  var { loading, data } = useQuery(getTrainerList_Q)

  //* Handle Drop Down Selection Update
  const currentTrainerSet = async (event) => {
    
    await setSelectedTrainer(event.target.options[event.target.options.selectedIndex].value);
    await setSelectedTrainerCalLink(event.target.options[event.target.options.selectedIndex].accessKey);

  }

  //*  Build HTML for trainer Drop Down Menu
  function populateListOfTrainers(trainerData) {

    //* Create List of Trainers from DB pull
    trainerListHTML.push(<option key={trainerData.calendarLink} accessKey={trainerData.calendarLink} value={trainerData.trainerFirstName}>{trainerData.trainerFirstName}</option>)

  }

  //* Handle When Data is Still Loading
  if(loading) {

    return (
      
        <div>

          <Header />

          <div className="d-flex flex-row">

            <SideBar />

            <div className="d-flex flex-column w-100 align-items-center">

              {/* <h1 className="d-flex flex-row text-center mt-5 pt-5 align-items-center mt-4 welcomeText"> Loading! </h1> */}

              <div className="loadingSpinner">
                <BallTriangle
                  
                  height={550}
                  width={550}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                />
              </div>

            </div>

          </div>
          
        </div>
    )

  }

  //* Confirm Data Loaded and defined
  if(!loading && data !== undefined) {

    var trainerListHTML = []
    var calendarHTML = []

    if(true) {
  
      //* Interject API and Google Calendar link before building Calendar
      calendarHTML.push(<Calendar apiKey={API_KEY} calendars={[{ calendarId: selectedTrainerCalLink },]} key={selectedTrainer} showFooter="false"/>)
    
    }

    //* Build HTML for list of trainer drop down menu from data received from DB 
    data.getTrainerList.forEach(populateListOfTrainers)

    //* Handle First Page load to default to first trainer in list
    if(selectedTrainer == "Default") {

      setSelectedTrainer(data.getTrainerList[0].trainerFirstName)
      setSelectedTrainerCalLink(data.getTrainerList[0].calendarLink)

    }

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
                  <select name="trainerSelect" defaultValue={data.getTrainerList[0].trainerFirstName} className="text-center trainerSelectDropdown" >
                    {trainerListHTML}
                  </select>
                </form>

              </div>

              <div name={selectedTrainer} className="d-flex justify-content-center align-items-center trainerCalenderBox my-5">
                {calendarHTML}
              </div>

              <div className="d-flex col-2">
              
                {/* //? Empty Space to center calendar on page */}

              </div>

            </div>

          </div>

        </div>
        
      </div>
    )
  }

}

export default TrainerSchedule;