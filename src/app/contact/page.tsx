export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Message" className="w-full p-3 border rounded-lg"></textarea>
        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}
