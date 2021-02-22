//citation: the update, delete and add course follows the jannunzi repo functions
//citation: the render portion uses some html from assignment 2 submission
import React from 'react';
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import './course-manager.css'

export default class CourseManager
    extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.map(
                        (c) => c._id === course._id ? course : c)
            })))
    }

    render() {
        return (
            <div>
                <div className="wbdv-sticky-nav-bar">
                    <div className="row">
                        <div className="col-2">
                            <Link to="/">
                                <i className="fas fa-2x fa-home"></i>
                            </Link>
                        </div>
                        <div className="d-none d-lg-block col-lg-3">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-8 col-lg-5">
                            <input className="form-control"/>
                        </div>
                        <div className="col-2">
                            <i className="fas fa-2x fa-plus-circle"></i>
                        </div>
                    </div>
                </div>
                <div className="wbdv-padding-nav-bar">
                    <Route path="/courses/table" exact={true} >
                        <CourseTable
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}/>
                    </Route>
                    <Route path="/courses/grid" exact={true} >
                        <CourseGrid courses={this.state.courses} />
                    </Route>
                </div>
            </div>
        )
    }

}