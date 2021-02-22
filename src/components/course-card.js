import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course}) =>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="class-text">Some quick example text.</p>
                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
            </div>
        </div>
    </div>

export default CourseCard