function Option({ question, dispatch, answer, isSubmitted }) {
  // const hasAnswered = answer !== null;
  const hasAnswered = isSubmitted;
  console.log(hasAnswered);
  console.log("Question Type:", question.type);

  return (
    <div className="options">
      {question.type === "mcq" ? (
        question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))
      ) : (
        <>
          <input
            type="text"
            className="text-input"
            value={answer || ""}
            placeholder="Type your answer here"
            onChange={(e) =>
              dispatch({ type: "newAnswer", payload: e.target.value })
            }
            disabled={hasAnswered}
          />
          <button
            className="btn btn-submit"
            onClick={() => dispatch({ type: "nextQuestion" })}
            disabled={!answer || hasAnswered}
          >
            Submit Answer
          </button>
        </>
      )}
    </div>
  );
}

export default Option;
