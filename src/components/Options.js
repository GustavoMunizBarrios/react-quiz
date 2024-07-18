export default function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null  // true if there is an answer, false if there isn't

    return (
        <div className="options">
            {question.options.map((option, index) => { // (current element, current index)
                return (
                    <button className={`btn btn-option ${index === answer ? "answer" : ""} 
                    ${hasAnswered ?
                            index === question.correctOption ?
                                "correct" : "wrong"
                            : ""}`}
                        key={option}
                        disabled={hasAnswered}
                        onClick={() => dispatch({ type: 'newAnswer', payload: index })}>
                        {option}
                    </button>
                )

            })}
        </div>
    )
}