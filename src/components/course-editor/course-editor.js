import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId} = useParams();
    return(
        <Provider store={store}>
            <div className="row">
                <div className="col-3">
                    <h4>Course Editor</h4>
                </div>
                <div className="col-1">
                    <i className="fa fa-window-close fa-2x"
                        onClick={() => history.goBack()}></i>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <br />
                    <TopicPills />
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor;