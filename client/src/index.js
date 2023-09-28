

import App from './App';
import 'bootstrap';
import "./css/main_style.css";
import "./css/reset.css";
import "./css/component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//* React Big Calender CSS Import *//
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css"

import { createRoot } from 'react-dom/client';

//? GraphQL Server URL
// const client = new ApolloClient({
//   uri: 'http://192.168.25.22:4001',
//   // uri: 'https://boardclubapp-api.up.railway.app',
//   cache: new InMemoryCache(),
// });


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div className="topLevelPage">
    {/* <ApolloProvider client={client}> */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <App />
      {/* </LocalizationProvider> */}
    {/* </ApolloProvider> */}
  </div>
);