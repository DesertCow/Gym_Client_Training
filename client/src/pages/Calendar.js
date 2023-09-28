
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import SideBar from "../components/SideBar";
import Header from "../components/Header";




function TrainingCalendar() {

  const localizer = momentLocalizer(moment)

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
              // events={myEventsList}
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