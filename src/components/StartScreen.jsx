import { Trophy } from "lucide-react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 text-center">
      <div className="mb-8 flex size-20 items-center justify-center rounded-3xl border border-[#61dafb]/20 bg-[#61dafb]/5 shadow-[0_0_50px_rgba(97,218,251,0.08)]">
        <Trophy size={36} strokeWidth={1.5} className="text-[#61dafb]" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Welcome to <span className="text-[#61dafb]">React Quiz</span>
      </h2>

      <p className="mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
        Think you know React? Put your knowledge to the test and see how much
        you've mastered.
      </p>

      {/* Quiz Info */}
      <div className="mt-9 flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-[#61dafb]/10 text-[#61dafb]">
          <span className="text-sm font-bold">{numQuestions}</span>
        </span>

        <span className="text-sm font-medium text-gray-300">
          Questions waiting for you
        </span>
      </div>

      {/* Start Button */}
      <button
        onClick={() => dispatch({ type: "start" })}
        className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#61dafb] px-8 py-4 font-bold text-[#16181d] transition-all duration-200 hover:bg-[#45c8ed] hover:shadow-[0_0_30px_rgba(97,218,251,0.2)] active:scale-95"
      >
        Start the Quiz
        <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="mt-5 text-xs font-medium tracking-wide text-gray-600">
        READY WHEN YOU ARE
      </p>
    </div>
  );
}

export default StartScreen;
