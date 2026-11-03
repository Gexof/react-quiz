import { useEffect } from "react";
import { Clock3 } from "lucide-react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  const isLowTime = secondsRemaining <= 30;

  console.log(secondsRemaining);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors ${
        isLowTime
          ? "border-red-400/30 bg-red-500/10 text-red-400"
          : "border-white/10 bg-[#20232a] text-gray-300"
      }`}
    >
      <Clock3 size={18} strokeWidth={1.8} />

      <span className="font-mono text-lg font-bold tabular-nums tracking-wider">
        {String(mins).padStart(2, "0")}:{String(sec).padStart(2, "0")}
      </span>
    </div>
  );
}

export default Timer;
