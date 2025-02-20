import Option from "./Option";

function Question({ question, dispatch, answer, isSubmitted }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option
        question={question}
        dispatch={dispatch}
        answer={answer}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default Question;
