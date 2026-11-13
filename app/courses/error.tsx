"use client";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <main className="p-8 max-w-xl mx-auto bg-red-50 border border-red-200 rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-red-700 mb-2">Fetch Error Caught!</h1>
      <p className="text-red-600 font-mono text-sm bg-red-100 p-3 rounded mb-4">
        {error.message || "Unknown error"}
      </p>
      <p className="text-slate-600 text-sm mb-4">
        Stack / Digest: {error.digest || "No digest"}
      </p>
      <button
        onClick={() => retry()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-medium"
      >
        Try again
      </button>
    </main>
  );
}