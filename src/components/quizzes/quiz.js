import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service";
import quizzesService from "../../services/quizzes-service"

const Quiz = () => {
    const [finalized, setFinalized] = useState(false);
    const { courseId, quizId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempt, setAttempt] = useState([])
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
    }, [])

    const updateAnswer = (questionId, ans) => {
        setQuestions((questions) => {
            return questions.map(question => {
                if (question._id === questionId) {
                    question.answer = ans
                }
                return question
            })
        })
    }

    return (
        <div>
            <h2>Quiz {quizId}</h2>
            {
                questions.map(question =>
                    <Question question={question}
                        finalized={finalized} 
                        gradedCallback={(ans) => updateAnswer(question._id, ans)}
                        />
                )

            }
            <button type="button" className="btn btn-success"
                onClick={() => {
                    setFinalized(true);
                    quizzesService.submitQuiz(quizId, questions)
                        .then(newAttempt => setAttempt(newAttempt))
                }}>Submit</button>
            {
                finalized &&
                <div>Score: {attempt.score}</div>
                
            }
        </div>
    );
}

export default Quiz;