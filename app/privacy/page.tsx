import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-sm text-blue-500 hover:text-blue-400"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">
        Privacy <span className="text-blue-500">Policy</span>
      </h1>

      <p className="text-zinc-400 mb-4">
        At Kuppiya.lk, we respect your privacy and are committed to protecting
        it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="text-zinc-400 mb-4">
        We may collect basic analytics data such as page views and device type.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use It</h2>
      <p className="text-zinc-400 mb-4">
        To improve website performance and user experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third Parties</h2>
      <p className="text-zinc-400 mb-4">
        We do not sell your personal data to third parties.
      </p>

      <p className="text-zinc-500 text-sm mt-10">Last updated: 2026</p>
    </div>
  );
}
