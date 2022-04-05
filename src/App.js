import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import DoctorList from "./pages/doctorList/DoctorList";
import Doctor from "./pages/doctor/Doctor";
import Analytics from "./pages/analytics/Analytics";
import NewDoctor from "./pages/newDoctor/NewDoctor";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/doctors">
            <DoctorList />
          </Route>
          <Route path="/doctor/:doctorId">
            <Doctor />
          </Route>
          <Route path="/newDoctor">
            <NewDoctor />
            </Route>
            <Route path="/analytics">
            <Analytics />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
