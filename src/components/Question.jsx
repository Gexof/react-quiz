import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8">
        <span className="mb-3 inline-block rounded-full border border-[#61dafb]/20 bg-[#61dafb]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#61dafb]">
          QUESTION
        </span>

        <h2 className="text-2xl font-bold leading-relaxed tracking-tight text-white sm:text-3xl">
          {question.question}
        </h2>
      </div>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
