import React, { useEffect, useState } from "react";

const TrueFalseQuestion = ({
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
            gradedCallback(answer.toString())
        }
    }, [answer])
    return (
        <div className="list-group-item">
            <h4>
                {question.question}
                {
                    (graded && answer.toString() == question.correct) &&
                    <i className="fas fa-check float-right"></i>
                }
                {
                    (graded && answer.toString() != question.correct) &&
                    <i className="fas fa-times float-right"></i>
                }
            </h4>
            <div className="list-group">
                <label className={`list-group-item
                            ${(graded && question.correct == 'true') ? 'list-group-item-success' : ''}
                            ${(graded && answer == true && question.correct != 'true') ? 'list-group-item-danger' : ''}`}>
                    <input
                        type="radio"
                        onClick={() => {setAnswer(true)}}
                        name={question._id}
                        disabled={graded} />True
                    {
                        (graded && question.correct == 'true') &&
                        <i className="fas fa-check float-right"></i>
                    }
                    {
                        (graded && answer == true && question.correct != 'true') &&
                        <i className="fas fa-times float-right"></i>
                    }</label>
                <label className={`list-group-item
                            ${(graded && question.correct == 'false') ? 'list-group-item-success' : ''}
                            ${(graded && answer == false && question.correct != 'false') ? 'list-group-item-danger' : ''}`}>
                    <input
                        type="radio"
                        onClick={() => {setAnswer(false)}}
                        name={question._id}
                        disabled={graded} />False
                    {
                        (graded && question.correct == 'false') &&
                        <i className="fas fa-check float-right"></i>
                    }
                    {
                        (graded && answer == false && question.correct != 'false') &&
                        <i className="fas fa-times float-right"></i>
                    }</label>
            </div>
            <div>Your answer: {`${answer == null ? '' : answer}`}</div>
            <button type="button" className="btn btn-success"
                onClick={() => {setGraded(true)}}>Grade</button>
        </div>
    )
}

export default TrueFalseQuestion;