import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";  // 修改R
import AuthRoute from "./Components/AuthRoute";//引入AuthRoute

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MainPage from "./Nevigation/mainPage/MainPage";
import Upload from "./Components/Upload/Upload";
import Viewupload from "./Components/Upload/Viewupload";
import Bin from "./Components/Upload/Bin";
import IMGtoIMG from "./StableDiffusion/img2img/IMGtoIMG";
import TXTtoIMG from "./StableDiffusion/txt2txt/TXTtoIMG";
import Download2 from "./Components/Download2/Download";
import CatchTXT from "./StableDiffusion/CatchTXT/CatchTXT";
import Catchimg from "./StableDiffusion/CatchIMG/Catchimg";
import Project  from "./Nevigation/ProjectPage/Project";
import CreatePage from "./Nevigation/CreatePage/Create";
import Step from "./Nevigation/Step1/Step";
import Conversation from "../src/Nevigation/Conversation/Conversation";
import Requirement from "./Nevigation/Requirment/Requirment";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <AuthRoute path="/MainPage" component={<MainPage />}></AuthRoute>
          <Route path="/login" element={<Login setUserState={setUserState} />}></Route>
          <AuthRoute path="/Upload" component={<Upload />}></AuthRoute>
          <AuthRoute path="/Bin" component={<Bin />}></AuthRoute>
          <AuthRoute path="/Download2" component={<Download2 />}></AuthRoute>
          <AuthRoute path="/Viewupload" component={<Viewupload />}></AuthRoute>
          <AuthRoute path="/TXTtoIMG" component={<TXTtoIMG />}></AuthRoute>
          <AuthRoute path="/IMGtoIMG" component={<IMGtoIMG />}></AuthRoute>
          <AuthRoute path="/CatchTXT" component={<CatchTXT />}></AuthRoute>
          <AuthRoute path="/Catchimg" component={<Catchimg />}></AuthRoute>
          <AuthRoute path="/Project" component={<Project />}></AuthRoute>
          <AuthRoute path="/Requirement" component={<Requirement />}></AuthRoute>
          <AuthRoute path="/Step" component={<Step />}></AuthRoute>
          <AuthRoute path="/CreatePage" component={<CreatePage />}></AuthRoute>
          <AuthRoute path="/Conversation" component={<Conversation />}></AuthRoute>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
