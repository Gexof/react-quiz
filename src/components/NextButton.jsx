function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="group inline-flex items-center gap-3 rounded-lg border border-[#61dafb]/30 bg-[#61dafb]/10 px-5 py-2.5 text-sm font-semibold text-[#61dafb] transition-all duration-200 hover:border-[#61dafb] hover:bg-[#61dafb] hover:text-[#16181d]"
      >
        Next question
        <span className="flex size-6 items-center justify-center rounded-md bg-[#61dafb]/15 transition-colors group-hover:bg-black/10">
          →
        </span>
      </button>
    </div>
  );
}

export default NextButton;
