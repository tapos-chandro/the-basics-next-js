'use client';

import useSWR from "swr";
import Loading from "../components/loading";





const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function AboutPage() {


  const { data: posts, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Failed to load posts.</p>;

  

  return (
    <div className="p-4">

   
      <h1 className="text-xl font-bold mb-4">This is About Page</h1>
      <p>Total Posts: {posts.length}</p>

      <ul className="space-y-4 mt-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-3 rounded-md shadow-sm">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
