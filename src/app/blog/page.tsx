export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-blue-700">Latest Blog Posts</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold">SEO Tips for 2025</h3>
          <p className="mt-2 text-gray-600">Boost your rankings with these proven SEO strategies...</p>
        </article>
        <article className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold">Social Media Trends</h3>
          <p className="mt-2 text-gray-600">Discover the latest social media marketing trends for businesses...</p>
        </article>
      </div>
    </section>
  );
}
