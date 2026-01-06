import { ArrowRight } from "lucide-react";

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1599058917212-d750089bc07e)",
    }}
  >
    <div className="absolute inset-0 bg-black/80" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
        STOP CHASING <br />
        <span className="text-primary italic">GYM MEMBERS.</span>
      </h1>

      <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-8 sm:mb-12 px-4">
        Your Gym Needs More Members. We Deliver.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-primary rounded-full font-black text-sm sm:text-base hover:scale-105 transition-transform"
      >
        GROW MY GYM <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  </section>
);

export default Home;
