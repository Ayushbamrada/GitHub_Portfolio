import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Client Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white rounded-xl p-6 text-gray-800 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none" />
            <textarea placeholder="Your Query..." rows="4" className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"></textarea>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </motion.div>

        {/* Your Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-gray-800 rounded-xl p-6 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">My Information</h3>
          <ul className="space-y-3 text-lg">
            <li><strong>Name:</strong> Ayush Bamrada</li>
            <li><strong>Phone:</strong> +91 9045463283</li>
            <li><strong>Email:</strong> bamradaayush@gmail.com</li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/ayushbamrada/" target="_blank" className="text-blue-400 hover:underline">
                ayushbamrada
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Ayushbamrada" target="_blank" className="text-blue-400 hover:underline">
                Ayushbamrada
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
