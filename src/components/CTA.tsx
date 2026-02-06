"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 text-center text-white bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Ram-style background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of companies that have revolutionized their operations with our AI
          consulting services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="group px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg font-semibold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}