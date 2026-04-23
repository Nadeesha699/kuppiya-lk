import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/app/lib/post";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = articles.find((a) => a.slug === slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <Link href="/" className="text-blue-500 text-sm">
          ← Back to Home
        </Link>

        <span className="text-xs bg-blue-500 px-2 py-1 rounded mt-6 inline-block">
          {post.category}
        </span>

        <h1 className="text-4xl font-bold mt-4 mb-6">
          {post.title}
        </h1>

        <p className="text-zinc-400 leading-7 text-lg">
          {post.content}
        </p>

      </div>
    </div>
  );
}