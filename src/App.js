//citation: code from jannunzi git repo
import './App.css';
import CourseManager from "./components/course-manager.js";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
          <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
          </div>
    </BrowserRouter>
  );
}

export default App;
//end of citation