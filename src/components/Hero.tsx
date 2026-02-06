"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 lg:pt-32">
      {/* Video background from Octan Labs-ram */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <div className="flex flex-col justify-center space-y-6 max-w-3xl">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
                New
              </span>
              <span className="text-sm font-medium text-white/90">AI-Powered Optimization</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Business consulting that drives{" "}
              <span className="text-blue-200">real growth</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/90 leading-relaxed max-w-xl"
            >
              Elevate your business with expert AI insights, tailored strategies, and unwavering
              support designed to transform your operations.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in touch
              </Button>
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/services">What we do</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
