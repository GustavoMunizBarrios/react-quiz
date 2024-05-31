export default function Options({ question, dispatch, answer }) {
    return (
        <div className="options">
            {question.options.map((option, index) => {
                return (
                    <button className={`btn btn-option ${index === answer ? "answer" : ""} 
                    ${index === option.correctOption ? "correct" : "wrong"}`}
                        key={option}
                        disabled={answer}
                        onClick={() => dispatch({ type: 'newAnswer', payload: index })}>
                        {option}
                    </button>
                )

            })}
        </div>
    )
}