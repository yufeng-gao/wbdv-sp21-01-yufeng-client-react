import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({
    updateCourse,
    deleteCourse,
    courses
}) =>
    <div className="container-fluid">
        <div className="row">
            <div className="d-none d-md-block col-md-4 text-center">
                <h4>Recent Documents</h4>
            </div>
            <div className="d-none d-md-block col-md-4 text-center">
                <h4>Owned by me</h4>
            </div>
            <div className="col-md-4 float-right text-center">
                <i className="fas fa-2x fa-folder"></i>
                <i className="fas fa-2x fa-sort-alpha-up"></i>
                <Link to="/courses/table">
                    <i className="fas fa-list fa-2x"></i>
                </Link>
            </div>
        </div>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard updateCourse={updateCourse}
                    deleteCourse={deleteCourse}
                    course={course} />
                )
            }
        </div>
    </div>

export default CourseGrid