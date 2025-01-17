export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React and JavaScript Quiz!</h2>
      {/* <h3>{numQuestions} questions to test your React mastery</h3> */}
      <div className="div-buttons">
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "timeLimit" })}
        >
          Time Limit
        </button>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "noTimeLimit" })}
        >
          No Time Limit
        </button>
      </div>
      <div className="div-buttons">
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "startReactQuiz" })}
        >
          React Quiz
        </button>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "startJSQuiz" })}
        >
          JavaScript Quiz
        </button>
      </div>
    </div>
  );
}
