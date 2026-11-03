import { ArrowRight, Flag } from "lucide-react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  const isLastQuestion = index === numQuestions - 1;

  return (
    <button
      onClick={() =>
        dispatch({
          type: isLastQuestion ? "finish" : "nextQuestion",
        })
      }
      className="group inline-flex items-center gap-3 rounded-lg border border-[#61dafb]/30 bg-[#61dafb]/10 px-5 py-2.5 text-sm font-semibold text-[#61dafb] transition-all duration-200 hover:border-[#61dafb] hover:bg-[#61dafb] hover:text-[#16181d] active:scale-[0.98]"
    >
      {isLastQuestion ? "Finish Quiz" : "Next Question"}

      {isLastQuestion ? (
        <Flag size={17} strokeWidth={2} />
      ) : (
        <ArrowRight
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}

export default NextButton;
