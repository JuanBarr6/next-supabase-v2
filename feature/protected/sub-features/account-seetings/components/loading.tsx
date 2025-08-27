export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
      <div className="text-2xl font-semibold flex space-x-1">
        <span>Cargando</span>
        <span className="animate-loading-dot">.</span>
        <span className="animate-loading-dot delay-200">.</span>
        <span className="animate-loading-dot delay-400">.</span>
      </div>
    </div>
  );
}
