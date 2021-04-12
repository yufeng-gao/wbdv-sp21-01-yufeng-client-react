//citation: used the same CourseRow definition as the one in jannunzi repo
import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {
        
        constructor(props) {
            super(props);
        }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td className="d-none d-md-table-cell">Owned by</td>
                            <td className="d-none d-lg-table-cell">Last modified</td>
                            <td className="d-none d-md-table-cell">Quizzes</td>
                            <td>
                            <i className="fas fa-2x fa-folder"></i>
                            <i className="fas fa-2x fa-sort-alpha-up"></i>
                            <Link to="/courses/grid">
                                <i className="fas fa-2x fa-th"></i>
                            </Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(course =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    }