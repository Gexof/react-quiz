function Header() {
  return (
    <header className="flex items-center justify-center gap-5 px-4 py-8">
      <div className="flex size-14 items-center justify-center rounded-xl border border-[#61dafb] bg-[#20232a] shadow-[0_0_20px_rgba(97,218,251,0.12)]">
        <span className="font-mono text-2xl font-extrabold text-[#61dafb]">
          {"</>"}
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-white">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
