export function Header({ title, secondtitle }) {
  return (
    <section
      aria-label="Titel"
      className="flex flex-col justify-center md:justify-start my-8"
    >
      <h1 className="text-3xl font-bold mb-6 center">{title}</h1>

      {secondtitle && <p>{secondtitle}</p>}
    </section>
  );
}
