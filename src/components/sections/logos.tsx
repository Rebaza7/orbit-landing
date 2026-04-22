const brands = [
  "NEBULA",
  "Lumenar",
  "Vertex",
  "FIELDNOTE",
  "Halcyon",
  "NORTHWIND",
];

export default function Logos() {
  return (
    <section className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8">
          Trusted by teams at
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {brands.map((b) => (
            <li
              key={b}
              className="text-center text-neutral-400 font-semibold tracking-wider text-lg select-none"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
