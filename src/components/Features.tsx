"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, TrendingUp } from "lucide-react";
import { USE_CASES } from "@/lib/constants";

export function Features() {
  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 text-center text-foreground tracking-tight"
        >
          Featured use cases
        </motion.h2>

        <div className="space-y-16">
          {USE_CASES.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-3xl p-8 md:p-12 lg:p-14 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50"
            >
              {/* Category pill - orange-brown */}
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-amber-100 border border-amber-200/80">
                <span className="text-sm font-bold text-amber-800">
                  {useCase.industry}
                </span>
              </div>

              {/* Main card title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-foreground leading-tight">
                {useCase.title}
              </h3>

              {/* Three sections: Opportunity, Solution, Outcome - with hover highlight */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Opportunity - light blue */}
                <div
                  className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-blue-50/80 hover:shadow-md border border-transparent hover:border-blue-100"
                  role="article"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200/80 transition-colors duration-300">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-blue-700">Opportunity</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {useCase.opportunity}
                  </p>
                </div>

                {/* Solution - light purple */}
                <div
                  className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-purple-50/80 hover:shadow-md border border-transparent hover:border-purple-100"
                  role="article"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-200/80 transition-colors duration-300">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-purple-700">Solution</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {useCase.solution}
                  </p>
                </div>

                {/* Outcome - light green */}
                <div
                  className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-green-50/80 hover:shadow-md border border-transparent hover:border-green-100"
                  role="article"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-200/80 transition-colors duration-300">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-green-700">Outcome</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {useCase.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
