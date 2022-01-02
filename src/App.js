import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Appointment from "./Components/Appointment/Appointment/Appointment";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Patients from "./Components/Dashboard/Patients/Patients";
import Admin from "./Components/Home/Admin/Admin";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserSignInContext=createContext()

function App() {
  const [loginUser, setLoginUser] = useState({
    isSignIn: false,
    email: '',
    password: '',
    errorMsg:''
  })


  return (
    <UserSignInContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute exact path='/appointment'>
          <Appointment></Appointment>
        </PrivateRoute>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute exact path='/dashboard/appointment'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path='/dashboard/addDoctor'>
          <AddDoctor></AddDoctor>
        </PrivateRoute>
        <PrivateRoute exact path='/dashboard/patients'>
          <Patients></Patients>
        </PrivateRoute>
        <Route exact path='/admin'>
          <Admin></Admin>
        </Route>
      </Switch>
    </Router>
    </UserSignInContext.Provider>
  );
}

export default App;
