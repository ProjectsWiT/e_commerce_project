export default function ProductCard({ post }) {
  return (
    <article className="flex flex-col border rounded-lg overflow-hidden">
      {}
      <div className="relative">
        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
          Image
        </div>

        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
          NEW
        </span>
      </div>

      {}
      <div className="flex flex-col gap-3 p-4">
        <span className="text-xs text-blue-500">
          Google <span className="text-gray-400">• Trending • New</span>
        </span>

        <h2 className="text-lg font-semibold text-gray-900">
          {post.title}
        </h2>

        <p className="text-sm text-gray-500">
          We focus on ergonomics and meeting you where you work.
          It's only a keystroke away.
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{post.date}</span>
          <span>{post.comments}</span>
        </div>

        <button className="self-start text-sm text-blue-500 font-semibold">
          Learn More →
        </button>
      </div>
    </article>
  );
}

