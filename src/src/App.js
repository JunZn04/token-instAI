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
  const ignorePagesList = ["/", "/login"];

  return (
    <div className="App">
      <Router>
        <Routes>
          <AuthRoute path="/" component={<Register/>} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/MainPage" component={<MainPage />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/login" component={<Login setUserState={setUserState} />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Upload" component={<Upload />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Bin" component={<Bin />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Download2" component={<Download2 />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Viewupload" component={<Viewupload />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/TXTtoIMG" component={<TXTtoIMG />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/IMGtoIMG" component={<IMGtoIMG />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/CatchTXT" component={<CatchTXT />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Catchimg" component={<Catchimg />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Project" component={<Project />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Requirement" component={<Requirement />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Step" component={<Step />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/CreatePage" component={<CreatePage />} ignoreList={ignorePagesList}></AuthRoute>
          <AuthRoute path="/Conversation" component={<Conversation />} ignoreList={ignorePagesList}></AuthRoute>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
