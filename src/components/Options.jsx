function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null && answer !== undefined;

  return (
    <div className="flex flex-col gap-3">
      {question.options.map((option, index) => {
        const isCorrect = index === question.correctOption;
        const isSelected = index === answer;

        let optionStyle =
          "border-white/10 bg-[#20232a] text-gray-300 hover:border-[#61dafb]/50 hover:bg-[#61dafb]/5 hover:text-white";

        if (hasAnswered) {
          if (isCorrect) {
            optionStyle = "border-green-500/40 bg-green-500/10 text-green-400";
          } else if (isSelected) {
            optionStyle = "border-red-500/40 bg-red-500/10 text-red-400";
          } else {
            optionStyle =
              "border-white/5 bg-[#20232a] text-gray-600 opacity-50";
          }
        }

        return (
          <button
            key={option}
            disabled={hasAnswered}
            className={`group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left text-base font-medium transition-all duration-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:active:scale-100 ${optionStyle}`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-current/20 bg-white/5 text-sm font-semibold">
              {String.fromCharCode(65 + index)}
            </span>

            <span className="flex-1">{option}</span>

            {hasAnswered && isCorrect && (
              <span className="text-lg font-bold">✓</span>
            )}

            {hasAnswered && isSelected && !isCorrect && (
              <span className="text-lg font-bold">✕</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
