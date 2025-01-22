// app/blog/[id]/page.js
export default async function BlogDetail({ params }) {
    const { id } = params;
  
    // Fetch the blog details based on the ID from the URL
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 60 }, // Revalidate data every 60 seconds
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch post details');
    }
  
    const post = await res.json();
  
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Details</h1>
        <div className="border-2 border-gray-300 p-4 rounded">
          <h2 className="font-bold text-xl">{post.title}</h2>
          <p className="mt-4">{post.body}</p>
        </div>
      </main>
    );
  }
  