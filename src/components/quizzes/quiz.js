import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service";

const Quiz = () => {
    const { courseId, quizId } = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    }, [])

    return (
        <div>
            <h2>Quiz {quizId}</h2>
            {
                questions.map(question =>
                    <Question question={question} />
                )
            }
        </div>
    );
}

export default Quiz;