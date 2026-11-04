function Header() {
  return (
    <header className="flex items-center justify-center gap-4 px-4 py-8">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#61dafb]/30 bg-[#20232a] shadow-[0_0_20px_rgba(97,218,251,0.12)]">
        <span className="font-mono text-xl font-extrabold text-[#61dafb]">
          {"</>"}
        </span>
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Dev Quiz
        </h1>

        <p className="mt-1 text-xs font-medium tracking-widest text-gray-500 uppercase">
          Developer Knowledge Challenge
        </p>
      </div>
    </header>
  );
}

export default Header;
