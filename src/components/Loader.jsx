export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative size-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#61dafb]" />

        <div className="absolute inset-3 rounded-full bg-[#61dafb]/10" />
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold text-white">Loading questions</p>

        <p className="mt-1 text-sm text-gray-500">
          Getting everything ready for you...
        </p>
      </div>
    </div>
  );
}
