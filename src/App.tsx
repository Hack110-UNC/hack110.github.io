"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedSection = motion.section;
const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export default function SignupPage() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
            <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <a href="/" className="flex items-center cursor-pointer">
                        <img src="/comp110.png" alt="COMP 110 Logo" width={50} height={50} className="mr-3" />
                        <span className="text-2xl font-bold">HACK 110</span>
                    </a>
                    <nav>
                        <ul className="flex gap-8">
                            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
                            <li><a href="/map" className="hover:text-blue-400 transition">Map</a></li>
                            <li><a href="/workshops" className="hover:text-blue-400 transition">Workshops</a></li>
                            <li><a href="/projects" className="hover:text-blue-400 transition">Past Projects</a></li>
                            <li><a href="#signup-form" className="text-blue-400 font-bold hover:text-blue-300 transition">Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.h1 className="text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        Join Hack 110
                    </motion.h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10">
                        Ready to code, collaborate, and create? Sign up for the most exciting hackathon at UNC!
                    </p>
                    <a href="#signup-form" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition">
                        Register Now
                    </a>
                </div>
            </section>
            
            <section id="signup-form" className="py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                </div>
            </section>
        </div>
    );
}
