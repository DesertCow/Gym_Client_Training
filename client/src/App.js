//* VeganLiftz Client App.js
//* By Clayton Skaggs
//* Version 0.1 [WW38]

//? ============= Font Import ============= */




//? ============= Page Import ============= */




//? ============= Main ============= */


export default function App() {

  require('./css/main_style.css')
  require('./css/reset.css')

  return (

    <h1 className="text-center mt-5"> VeganLiftz App [From App.js]</h1>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/passwordReset" element={<PasswordReset />} />
    //     <Route path="/userRegister" element={<UserSignUp />} />
    //     <Route path="/TermsOfService" element={<TermsOfService />} />
    //     <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    //     <Route path="/surf_log" element={<SurfLogHome />} />
    //     <Route path="/surf_log/create_new_session" element={<CreateNewSession />} />
    //     <Route path="/surf_log/view_previous_sessions" element={<SurfSessionsList />} />
    //     <Route path="/surf_log/surfSession/:sessionID" element={<ViewSurfSession />} />
    //     <Route path="/user_settings" element={<UserSettings />} />
    //     <Route path="/club_events" element={<ClubEventsMain />} />
    //     <Route path="/club_events/event/:eventID" element={<ViewEventDetails />} />
    //     <Route path="/surf_hacks" element={<SurfHacks />} />
    //     <Route path="/surf_hacks/:surfHackID" element={<SurfHackDetails />} />
    //     <Route path="/newport_surf_map" element={<NewportSurfMap />} />
    //     <Route path="/community_forum" element={<CommunityForum />} />
    //     <Route path="/surf_rentals" element={<SurfRentals />} />
    //     <Route path="/about_club" element={<AboutClub />} />
    //     <Route path="/admin" element={<Admin_Home />} />
    //     <Route path="/admin/addEvent" element={<Admin_AddEvent />} />
    //     <Route path="/admin/deleteEvent" element={<Admin_DeleteEvent />} />
    //     <Route path="/admin/updateEvent/:eventID" element={<Admin_UpdateEvent />} />
    //     <Route path="/admin/addSurfHack" element={<Admin_AddSurfHack />} />
    //     <Route path="/admin/deleteSurfHack" element={<Admin_DeleteSurfHack />} />
    //     <Route path="/admin/updateSurfHack/:surfHackID" element={<Admin_UpdateSurfHack />} />
    //     <Route path="/admin/shaperListUpdate" element={<Admin_AddDeleteShaper />} />
    //     <Route path="/admin/pushNotifications" element={<Admin_PushNotifications />} />
    //   </Routes>
    // </Router>
  );
}