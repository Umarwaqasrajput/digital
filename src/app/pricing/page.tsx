export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-blue-700">Pricing Plans</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Basic</h3>
          <p className="text-2xl font-bold">$99</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Standard</h3>
          <p className="text-2xl font-bold">$199</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Premium</h3>
          <p className="text-2xl font-bold">$299</p>
        </div>
      </div>
    </section>
  );
}
