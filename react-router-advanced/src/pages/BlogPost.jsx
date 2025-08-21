import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Blog Post {id}</h1>
      <p>This is the content for blog post #{id}.</p>
    </div>
  );
}