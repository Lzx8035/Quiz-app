function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "setNextQuestion" })}
      >
        Next
      </button>
    );

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "finishQuiz" })}
    >
      Finish
    </button>
  );
}

export default NextButton;
