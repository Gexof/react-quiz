function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  const progress = index + Number(answer !== null);

  return (
    <header className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-400">
          Question <span className="font-bold text-white">{index + 1}</span>
          <span className="text-gray-600"> / {numQuestions}</span>
        </p>

        <p className="text-sm font-semibold text-gray-400">
          Score:{" "}
          <span className="text-[#61dafb]">
            {points}/{maxPossiblePoints}
          </span>
        </p>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#61dafb] transition-all duration-500 ease-out"
          style={{ width: `${(progress / numQuestions) * 100}%` }}
        />
      </div>
    </header>
  );
}

export default Progress;
