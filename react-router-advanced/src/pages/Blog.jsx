import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced Routing" },
    { id: 3, title: "React Query Magic" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}