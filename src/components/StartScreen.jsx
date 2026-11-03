function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#20232a] px-8 py-12 text-center shadow-2xl sm:px-12">
      <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-[#61dafb]/10 text-3xl">
        ⚛️
      </div>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Welcome to React Quiz!
      </h2>

      <p className="mb-8 text-base leading-relaxed text-gray-400">
        Ready to test your React knowledge? Let's see how much you've learned!
      </p>

      <div className="mb-8 rounded-xl border border-white/10 bg-[#282c34] px-6 py-4">
        <p className="text-3xl font-bold text-[#61dafb]">{numQuestions}</p>
        <p className="mt-1 text-sm text-gray-400">
          Questions to test your React mastery
        </p>
      </div>

      <button
        className="w-full rounded-xl bg-[#61dafb] px-6 py-3.5 font-semibold text-[#20232a] transition-all duration-200 hover:bg-[#45c8ed] hover:shadow-lg hover:shadow-[#61dafb]/20 active:scale-[0.98] sm:w-auto sm:min-w-48"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
        <span className="ml-2">→</span>
      </button>
    </div>
  );
}

export default StartScreen;
