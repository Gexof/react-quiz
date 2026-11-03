import { Trophy, Award } from "lucide-react";

function FinishScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  const getResultMessage = () => {
    if (percentage === 100) return "Perfect score! You're a React master.";
    if (percentage >= 80) return "Excellent work! You really know your React.";
    if (percentage >= 50) return "Good job! Keep practicing and improving.";
    return "Nice try! Every attempt makes you better.";
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center px-4 text-center">
      <div className="mb-5 flex size-20 items-center justify-center rounded-3xl border border-[#61dafb]/20 bg-[#61dafb]/5 shadow-[0_0_50px_rgba(97,218,251,0.08)]">
        <Trophy size={38} strokeWidth={1.5} className="text-[#61dafb]" />
      </div>

      {/* High Score */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2">
        <Award size={15} className="text-amber-400" />
        <span className="text-xs font-medium text-gray-400">High Score</span>
        <span className="text-xs font-bold text-amber-400">
          {highScore} pts
        </span>
      </div>

      <p className="text-sm font-semibold tracking-[0.2em] text-[#61dafb] uppercase">
        Quiz completed
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {percentage === 100 ? "Outstanding!" : "Well done!"}
      </h2>

      <p className="mt-3 max-w-sm text-base leading-7 text-gray-400">
        {getResultMessage()}
      </p>

      <div className="mt-9 w-full rounded-2xl border border-white/10 bg-[#20232a] p-7">
        <p className="text-sm font-medium text-gray-400">Your final score</p>

        <p className="mt-3 text-5xl font-extrabold tracking-tight text-white">
          {percentage}%
        </p>

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#61dafb] transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="mt-4 text-sm text-gray-400">
          <span className="font-bold text-[#61dafb]">{points}</span> out of{" "}
          {maxPossiblePoints} points
        </p>
      </div>
    </div>
  );
}

export default FinishScreen;
