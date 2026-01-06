import React, { useState } from "react";
import { Mail, Phone, CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScg2E2riV_nSbwbGlV8jy2AVn7WeCYAgWI0Vw8_2lLiEQJcFg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 bg-dark text-secondary font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] uppercase mb-6 sm:mb-8">
              Ready To <br />
              <span className="text-primary italic">Scale Hard?</span>
            </h2>

            <p className="text-secondary/70 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl">
              Muscle Media works only with serious gym owners. If you want
              predictable leads and real growth, submit the form.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/5 border border-secondary/10 flex-shrink-0">
                  <Phone className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-secondary/60">
                    Call
                  </p>
                  <a
                    href="tel:+916374473499"
                    className="font-bold text-sm sm:text-base hover:underline"
                  >
                    +91 63744 73499
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/5 border border-secondary/10 flex-shrink-0">
                  <Mail className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-secondary/60">
                    Email
                  </p>
                  <a
                    href="mailto:musclemedia.contact@gmail.com"
                    className="font-bold hover:underline text-sm sm:text-base break-all"
                  >
                    musclemedia.contact@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM / SUCCESS */}
          <div className="bg-secondary/5 border border-secondary/10 rounded-3xl sm:rounded-[40px] p-6 sm:p-10 shadow-2xl">
            <div className="rounded-2xl sm:rounded-3xl bg-dark border border-secondary/10 px-6 sm:px-8 py-8 sm:py-10 min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="w-full space-y-4 sm:space-y-6"
                >
                  <input
                    name="entry.350858453"
                    required
                    placeholder="Full Name *"
                    className="w-full bg-dark text-secondary border border-primary rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    name="entry.1868840516"
                    required
                    placeholder="Phone Number *"
                    className="w-full bg-dark text-secondary border border-primary rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    name="entry.189504872"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-dark text-secondary border border-primary rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    name="entry.552025440"
                    required
                    placeholder="Gym Name *"
                    className="w-full bg-dark text-secondary border border-primary rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-dark font-bold rounded-lg sm:rounded-xl px-6 py-3 sm:py-4 text-sm sm:text-base transition hover:opacity-90"
                  >
                    Submit Inquiry
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-4 sm:space-y-6">
                  <CheckCircle className="mx-auto text-primary" size={56} />
                  <h3 className="text-2xl sm:text-3xl font-bold">Thank you!</h3>
                  <p className="text-secondary/70 text-sm sm:text-base">
                    Your details have been received.
                    <br />
                    Our team will contact you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
