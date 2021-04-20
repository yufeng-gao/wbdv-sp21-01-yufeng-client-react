import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({
    question,
    finalized,
    gradedCallback
}) => {
    return(
        <div className="list-group">
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    finalized={finalized} 
                    gradedCallback={gradedCallback}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    finalized={finalized} 
                    gradedCallback={gradedCallback}/>
            }
        </div>
    )
}

export default Question;