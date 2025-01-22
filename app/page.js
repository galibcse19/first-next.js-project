// app/page.js
import Link from 'next/link';

export default async function Home() {
  // Fetch the data from the API with caching and revalidation
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }, // Revalidate data every 60 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <div className="border-red-300 border-2 p-4 rounded" key={post.id}>
            <h2 className="font-bold text-xl">Title: {post.title}</h2>
            <Link href={`/blog/${post.id}`}>
              <button className="bg-white px-3 py-2 text-black rounded mt-5">
                See Post
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
