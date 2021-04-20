import React, { useEffect, useState } from "react";

const MultipleChoiceQuestion = ({
    question,
    finalized,
    gradedCallback
}) => {
    const [graded, setGraded] = useState(false)
    const [answer, setAnswer] = useState(null)
    useEffect(() => {
        setGraded(finalized)
    }, [finalized])
    useEffect(() => {
        if (answer != null){
            gradedCallback(answer)
        }
    }, [answer])
    return (
        <div className="list-group-item">
            <h4>{question.question}
                {
                    (graded && answer == question.correct) &&
                    <i className="fas fa-check float-right"></i>
                }
                {
                    (graded && answer != question.correct) &&
                    <i className="fas fa-times float-right"></i>
                }</h4>
            <div className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <label className={`list-group-item
                            ${(graded && question.correct == choice) ? 'list-group-item-success' : ''}
                            ${(graded && answer == choice && question.correct != choice) ? 'list-group-item-danger' : ''}`}>
                                <input type="radio" name={question._id}
                                    onClick={() => {setAnswer(choice)}}
                                    disabled={graded} />
                                {choice}
                                {
                                    (graded && question.correct == choice) &&
                                    <i className="fas fa-check float-right"></i>
                                }
                                {
                                    (graded && answer == choice && question.correct != choice) &&
                                    <i className="fas fa-times float-right"></i>
                                }
                            </label>
                        )
                    })
                }
            </div>
            <div>Your answer: {`${answer == null ? '' : answer}`}</div>
            <button type="button" className="btn btn-success"
                onClick={() => {setGraded(true)}}>Grade</button>
        </div>
    )
}

export default MultipleChoiceQuestion;