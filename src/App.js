//citation: code from jannunzi git repo
import './App.css';
import CourseManager from "./components/course-manager.js";
import CourseEditor from "./components/course-editor/course-editor.js";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import QuizzesList from "./components/quizzes/quizzes-list.js";
import Quiz from "./components/quizzes/quiz.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route path="/" exact={true} component={Home} />
        <Route path="/courses/table" exact={true} component={CourseManager} />
        <Route path="/courses/grid" exact={true} component={CourseManager} />
        {/* <Route path="/courses/editor"
          render={(props) => <CourseEditor history={props.history} />}/> */}
        <Route path={[
          "/courses/:layout/edit/:courseId",
          "/courses/:layout/edit/:courseId/modules/:moduleId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
          "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
        ]}
          exact={true}
          render={(props) => <CourseEditor history={props.history} />} />
        <Route path="/courses/:courseId/quizzes" exact={true}>
          <QuizzesList />
        </Route>
        <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
          <Quiz />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
//end of citation