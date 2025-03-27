import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    useEffect(() => {
        // Trigger vibration when the profile image lands (for mobile)
        setTimeout(() => {
            if ("vibrate" in navigator) {
                navigator.vibrate(100); // 100ms vibration
            }
        }, 1800);
    }, []);

    return (
        <section className="text-center py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col items-center gap-8 px-4 relative">
            {/* Shadow Under the Image */}
            <motion.div
                className="w-40 h-4 rounded-full bg-black/30 blur-sm absolute top-[calc(5.5rem+4px)]"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{
                    delay: 1.6,
                    duration: 0.4,
                    ease: "easeOut",
                }}
            />

            {/* Bouncing & Rotating Profile Image */}
            <motion.img
                src="https://i.pravatar.cc/150?img=3" // Replace with your image later
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-white shadow-xl z-10"
                initial={{ y: -300, rotate: -10, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    mass: 0.8,
                    duration: 2.4,
                }}
            />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 leading-tight md:leading-[1.2]">
                    Hi, I'm Ayush<span className="animate-pulse inline-block">👋</span>
                </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.8, ease: "easeOut" }}
            >
                <p className="text-xl md:text-2xl mb-6 text-gray-300">
                    Full Stack Developer | React, React Native & Node.js Enthusiast
                </p>
            </motion.div>

            {/* Button */}
            <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4, ease: "easeOut" }}
                className="inline-block px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
                View Projects
            </motion.a>
        </section>
    );
};

export default HeroSection;
