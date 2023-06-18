import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from './About';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  const[mode, setMode] = useState("light");
  const[alertText, setAlertText] = useState(null);

    const toggleMode = () => {
      if(mode === "light"){
        document.body.style.backgroundColor = "black";
        setMode("dark");
        showAlert("Dark Mode has been enabled.", "success");
      } else {
        document.body.style.backgroundColor = "white";
        setMode("light");
        showAlert("Light Mode has been enabled.", "success");
      }
   }

   const showAlert = (message, type)=>{
    setAlertText({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlertText(null);
    }, 1500);
}

  return (
    <Router>
    <div>

       <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />
       <Alert alert={alertText} />

       <Switch>
          <Route path="/about">
          <About mode={mode} />
          </Route>
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading = "Type here to evaluate your text." mode = {mode} />
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

