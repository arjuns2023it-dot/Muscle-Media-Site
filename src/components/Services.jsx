import React from "react";
import { Target, Phone, MessageSquare, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Paid Ads That Convert",
      icon: <Target />,
      desc: "We run Facebook & Google ads laser-focused on one thing: generating qualified leads who are ready to join your gym.",
    },
    {
      title: "Instant Lead Response",
      icon: <Phone />,
      desc: "Every lead gets contacted within 60 seconds through automated calls and texts, so you never lose a potential member.",
    },
    {
      title: "Follow-Up Automation",
      icon: <MessageSquare />,
      desc: "Our system nurtures leads with automated text sequences until they book a visit or join your gym.",
    },
    {
      title: "Lead Tracking & Optimization",
      icon: <TrendingUp />,
      desc: "Real-time dashboard shows every lead, their status, and which ads are bringing the best prospects.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left side - Introduction */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8">
              We Generate{" "}
              <span className="text-primary italic">Quality Leads</span> For
              Your Gym
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10">
              Stop wasting money on marketing that doesn't work. We deliver
              ready-to-join leads directly to your phone, then help you convert
              them into paying members.
            </p>

            <a
              href="#contact"
              className="inline-block text-primary font-bold tracking-widest text-xs uppercase border-b-2 border-primary pb-2 hover:text-white hover:border-white transition-all"
            >
              Get More Leads Now
            </a>
          </div>

          {/* Right side - Services */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl hover:bg-white transition-all group cursor-pointer"
              >
                <div className="text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(s.icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7",
                  })}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-dark uppercase mb-3 sm:mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
