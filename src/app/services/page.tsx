export default function Services() {
  const services = [
    { name: "SEO Optimization", img: "/3.jpg" },
    { name: "PPC Advertising", img: "/5.jpg" },
    { name: "Social Media Marketing", img: "/4.jpg" },
    { name: "Content Strategy", img: "/6.jpg" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.name} className="text-center">
            <img src={s.img} alt={s.name} className="rounded-lg shadow-lg mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">{s.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
