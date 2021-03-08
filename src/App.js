//citation: code from jannunzi git repo
import './App.css';
import CourseManager from "./components/course-manager.js";
import CourseEditor from "./components/course-editor/course-editor.js";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/" exact={true} component={Home} />
        <Route path="/courses/table" exact={true} component={CourseManager} />
        <Route path="/courses/grid" exact={true} component={CourseManager} />
        <Route path="/courses/editor"
          render={(props) => <CourseEditor history={props.history} />}>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
//end of citation