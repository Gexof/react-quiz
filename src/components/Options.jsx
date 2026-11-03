function Options({ question }) {
  return (
    <div className="flex flex-col gap-3">
      {question.options.map((option, index) => (
        <button
          key={option}
          className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-[#20232a] px-5 py-4 text-left text-base font-medium text-gray-300 transition-all duration-200 hover:border-[#61dafb]/50 hover:bg-[#61dafb]/5 hover:text-white active:scale-[0.99]"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-gray-500 transition-colors group-hover:border-[#61dafb]/30 group-hover:text-[#61dafb]">
            {String.fromCharCode(65 + index)}
          </span>

          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}

export default Options;
