function Options({ question, answer, dispatch }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${answer === i ? "answer" : ""} ${
            hasAnswer
              ? question.correctOption === i
                ? "correct"
                : "wrong"
              : null
          }`}
          disabled={hasAnswer}
          key={option}
          onClick={() => dispatch({ type: "setAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
