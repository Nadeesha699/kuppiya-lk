import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-3xl mx-auto">
 <Link
        href="/"
        className="inline-block mb-6 text-sm text-blue-500 hover:text-blue-400"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">
        Terms & <span className="text-blue-500">Conditions</span>
      </h1>

      <p className="text-zinc-400 mb-4">
        Welcome to Kuppiya.lk. By accessing this website, you agree to these terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Content</h2>
      <p className="text-zinc-400 mb-4">
        All content on this website is for entertainment and informational purposes only.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Site</h2>
      <p className="text-zinc-400 mb-4">
        You agree not to misuse or copy content without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Changes</h2>
      <p className="text-zinc-400 mb-4">
        We may update or change content anytime without notice.
      </p>

      <p className="text-zinc-500 text-sm mt-10">
        Last updated: 2026
      </p>

    </div>
  );
}