import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding flex justify-center">
      <div className="w-full max-w-4xl md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Contact Me! 🚀"
        />

        <div className="mt-16 flex justify-center">
          <div className="w-full md:w-[520px] rounded-2xl border border-black-50 bg-black-100/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8 md:p-10 backdrop-blur-sm">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Your name</label>
                <input
                  className="border border-black-50 bg-black-200/60 text-white-50 rounded-lg px-4 py-3 outline-none transition-colors duration-300 focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What’s your name?"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Your Email</label>
                <input
                  className="border border-black-50 bg-black-200/60 text-white-50 rounded-lg px-4 py-3 outline-none transition-colors duration-300 focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What’s your email address?"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="border border-black-50 bg-black-200/60 text-white-50 rounded-lg px-4 py-3 outline-none transition-colors duration-300 focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="mt-2">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text font-bold">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
