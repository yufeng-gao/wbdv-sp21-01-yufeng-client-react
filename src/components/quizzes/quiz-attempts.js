import React, { useState, useEffect } from "react";
import quizService from "../../services/quizzes-service";

const QuizAttempts = ({ quizId }) => {
    const [attempts, setAttempts] = useState([])
    useEffect(() => {
        quizService.findQuizAttempts(quizId)
            .then((newAttempts) => {
                setAttempts(newAttempts)
            })
    }, [])
    return (
        <div>
            {
                attempts.map((attempt) => {
                    return (
                        <>
                            <div>
                                Attempt: {attempt._id}
                            <span className="float-right">Score : {attempt.score}</span>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default QuizAttempts;