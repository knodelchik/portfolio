import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a8bmu3w", "template_zhfx2cd", form.current, {
        publicKey: "gW5CvnmgqYDhtRrUD",
    })
    .then(
        () => {
            console.log("SUCCESS!");
        },
        (error) => {
            console.log("FAILED...", error.text);
        }
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 flex items-center justify-center py20"
    >
      <RevealOnScroll>
        <div className="px-4 w-100 md:w-150">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Get In Touch
          </h2>
          <form ref={form} className="space-y-6" onSubmit={sendEmail}>
            <div className="relative">
              <input
                placeholder="Name..."
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 duration-500"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                placeholder="example@gmail.com"
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 duration-500"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message..."
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 duration-500"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium  transition-all relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
