import hero from "../assets/hero.png";

export function Hero() {
  return (
    <section className="gap-5 my-4 flex flex-col md:flex-row items-center md:justify-center">
      <div className="blur-container py-4 px-6">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="text-md mt-3 text-[var(--body)]">
          Explore the highest-rated movies — all in one place.
        </p>
      </div>
      <img src={hero} alt="Top-rated movie" className="w-full md:w-4/12 lg: rounded-4xl rotate-x-45 rotate-y-25 shadow-lg shadow-white" />
    </section>
  );
}
