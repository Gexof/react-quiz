import { Code2, Braces, Atom, Globe, Palette, ArrowRight } from "lucide-react";

const categoryUI = {
  javascript: {
    description: "Test your JavaScript fundamentals.",
    icon: Braces,
    color: "#facc15",
  },
  react: {
    description: "Challenge your React knowledge.",
    icon: Atom,
    color: "#61dafb",
  },
  html: {
    description: "Explore the building blocks of the web.",
    icon: Globe,
    color: "#f97316",
  },
  css: {
    description: "Test your styling and layout skills.",
    icon: Palette,
    color: "#38bdf8",
  },
};

function StartScreen({ dispatch, categories }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      {/* Welcome Section */}
      <section className="mb-12 text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-[#61dafb]/20 bg-[#61dafb]/5 text-[#61dafb] shadow-[0_0_40px_rgba(97,218,251,0.08)]">
          <Code2 size={32} strokeWidth={1.7} />
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Level up your <span className="text-[#61dafb]">coding skills.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Choose a topic, challenge yourself, and see how much you know. Keep
          learning and improve your developer skills.
        </p>
      </section>

      {/* Categories Section */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white sm:text-xl">
            Choose a category
          </h3>

          <span className="text-xs font-medium tracking-wide text-gray-500">
            {`${categories.filter((category) => category.available).length} AVAILABLE`}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category) => {
            const ui = categoryUI[category.id];

            if (!ui) return null;

            const Icon = ui.icon;

            return (
              <button
                key={category.id}
                disabled={!category.available}
                onClick={() =>
                  dispatch({
                    type: "selectCategory",
                    payload: category.id,
                  })
                }
                className={`group rounded-2xl border border-white/10 bg-[#20232a] p-5 text-left transition-all duration-200 ${
                  category.available
                    ? "cursor-pointer hover:-translate-y-1 hover:border-white/20 hover:bg-[#252932]"
                    : "cursor-not-allowed opacity-60"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex size-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${ui.color}12`,
                      color: ui.color,
                    }}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                      category.available
                        ? "border-green-400/20 bg-green-400/10 text-green-400"
                        : "border-white/10 bg-white/5 text-gray-500"
                    }`}
                  >
                    {category.available ? "Available" : "Coming Soon"}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white">
                  {category.name}
                </h4>

                <p className="mt-2 min-h-10 text-sm leading-6 text-gray-400">
                  {ui.description}
                </p>

                {category.available && (
                  <div
                    className="mt-5 flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: ui.color }}
                  >
                    Start Quiz
                    <ArrowRight size={16} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <p className="mt-10 text-center text-[11px] font-medium tracking-[0.2em] text-gray-600">
        PICK A TOPIC. TEST YOUR KNOWLEDGE. KEEP IMPROVING.
      </p>
    </div>
  );
}

export default StartScreen;
