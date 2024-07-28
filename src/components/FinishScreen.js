function FinishScreen({ points, maxPoints, highScore, dispatch }) {
  const percentage = Math.ceil((points * 100) / maxPoints);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 90) emoji = "🥈";
  else if (percentage >= 80) emoji = "🥉";
  else if (percentage >= 60) emoji = "😄";
  else emoji = "🤨";

  return (
    <>
      <p className="result">
        <strong>{emoji} </strong>
        You get <strong>{points}</strong> out of {maxPoints} ({percentage}%) !
      </p>
      <p className="highscore">Your highest score is {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart!
      </button>
    </>
  );
}

export default FinishScreen;
