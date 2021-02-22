import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-card.css'

const CourseCard = ({
    deleteCourse,
    updateCourse,
    course
}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    {!editing && <h5 className="card-title">{course.title}</h5>}
                    {editing &&<input onChange={(event) => setNewTitle(event.target.value)} 
                        value={newTitle}
                        className="form-control"/>}
                    <p className="class-text">Some quick example text.</p>
                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                </div>
                {!editing && <i className="wbdv-bottom-right" 
                onClick={() => setEditing(true)} 
                className="fas fa-edit wbdv-bottom-right"></i>}
                {editing && <div className="wbdv-top-right">
                    <i onClick={() => saveTitle()} className="fas fa-check wbdv-check-mark"></i>
                    <i onClick={() => {deleteCourse(course);
                    setEditing(false);}} className="fas fa-times wbdv-cross-mark"></i>
                </div>}
            </div>
        </div>
    )
}
    

export default CourseCard