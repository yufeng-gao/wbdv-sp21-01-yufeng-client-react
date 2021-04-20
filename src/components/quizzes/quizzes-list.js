import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import QuizAttempts from "./quiz-attempts"
import quizService from "../../services/quizzes-service";

const QuizzesList = () => {
    const { courseId } = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return (
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <div className="list-group-item">
                                <Link
                                    to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <QuizAttempts quizId={quiz._id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;