import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import SideBar from "../components/SideBar";
import Header from "../components/Header";




function TrainingCalendar() {

  const localizer = momentLocalizer(moment)
  // const [selected, setSelected] = useState();

  const handleSelected = (event) => {
    // setSelected(event);
    // console.info(event.title + " : " + event);
    console.log(event.title + " (" + event.eventID + ") " + ": " + event.desc);
    // console.log(event.title + " (" + event.eventID + ") " + ": " + JSON.stringify(event));
    // console.log('[handleSelected - event]', event);
  };

  // console.log(moment().toDate())
  // console.log(moment().format("MMM Do YY"))

    let state = {
      events: [
        {
          // start: moment().toDate(),
          // start: moment("09/28/2023", "MM/DD/YYYY"),
          title: "Daily Workout",
          start: new Date("2023-09-25T05:00:00.000"),
          end: new Date("2023-09-25T07:00:00.000"),
          // end: moment()
          //   .add(0, "days")
          //   .toDate(),
          desc: 'Workout Information',
          eventID: "64b7e6298acc0966613ae6d1"
        },
        {
          title: "Daily Workout",
          start: new Date("2023-09-26T05:00:00.000"),
          end: new Date("2023-09-26T07:00:00.000"),
          desc: 'Workout Information',
          eventID: "64b7e6298acc0966613ae6d2"
        },
        {
          title: "Daily Workout",
          start: new Date("2023-09-27T05:00:00.000"),
          end: new Date("2023-09-27T07:00:00.000"),
          desc: 'Workout Information',
          eventID: "64b7e6298acc0966613ae6d3"
        },
        {
          title: "Daily Workout",
          start: new Date("2023-09-28T05:00:00.000"),
          end: new Date("2023-09-28T07:00:00.000"),
          desc: 'Workout Information',
          eventID: "64b7e6298acc0966613ae6d4"
        },
        {
          title: "Daily Workout",
          start: new Date("2023-09-29T05:00:00.000"),
          end: new Date("2023-09-29T07:00:00.000"),
          desc: 'Workout Information',
          eventID: "64b7e6298acc0966613ae6d5"
        },
      ]
    };

  return (

    <div>

      <Header />

      <div className="d-flex flex-row">

        <SideBar />

        <div className="d-flex flex-column w-100 align-items-center">
          <h1 className="col text-center mt-5 welcomeText"> Calendar</h1>

          <div className='my-5'>
            <Calendar
              localizer={localizer}
              events={state.events}
              onSelectEvent={handleSelected}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 700, width: 900 }}
            />
          </div>



        </div>
      </div>
    </div>
    

    

  )
}

export default TrainingCalendar;