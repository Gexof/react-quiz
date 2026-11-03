function Error() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-red-400/10 bg-[#20232a] px-8 py-10 text-center shadow-xl">
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-red-500/10 text-3xl">
        ⚠️
      </div>

      <h2 className="text-xl font-bold text-white">Something went wrong!</h2>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        We couldn't load the quiz questions. Please check your connection and
        try again.
      </p>

      <span className="mt-6 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
        Failed to load questions
      </span>
    </div>
  );
}

export default Error;
