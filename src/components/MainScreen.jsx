function MainScreen({ children }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-10">
      {children}
    </main>
  );
}

export default MainScreen;
