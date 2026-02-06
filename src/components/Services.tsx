"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Settings, ShieldCheck, LucideIcon } from "lucide-react";
import { useState } from "react";

function IconWithFallback({ 
  src, 
  FallbackIcon, 
  alt 
}: { 
  src: string; 
  FallbackIcon: LucideIcon; 
  alt: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return <FallbackIcon className="h-12 w-12" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="object-contain"
      unoptimized
      onError={() => setImgError(true)}
    />
  );
}

const services = [
  {
    icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
    title: "AI Strategy Consulting",
    description: "Develop comprehensive AI adoption strategies tailored to your business objectives and industry landscape.",
    badge: "Most Popular",
    hoverColor: "blue"
  },
  {
    icon: "https://img.icons8.com/color/96/optimization.png",
    title: "Process Optimization",
    description: "Identify and optimize key business processes using AI-driven insights and automation technologies.",
    badge: "Efficiency Focus",
    hoverColor: "purple"
  },
  {
    icon: "https://img.icons8.com/color/96/database.png",
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and machine learning models.",
    badge: "Data-Driven",
    hoverColor: "green"
  },
  {
    icon: "https://img.icons8.com/material-rounded/96/000000/settings.png",
    fallbackIcon: Settings,
    title: "Workflow Automation",
    description: "Design and implement intelligent workflows that reduce manual tasks and improve productivity.",
    badge: "Time Saver",
    hoverColor: "orange"
  },
  {
    icon: "https://img.icons8.com/material-rounded/96/000000/security-shield.png",
    fallbackIcon: ShieldCheck,
    title: "AI Risk Management",
    description: "Ensure responsible AI implementation with comprehensive risk assessment and mitigation strategies.",
    badge: "Security First",
    hoverColor: "red"
  },
  {
    icon: "https://img.icons8.com/color/96/analytics.png",
    title: "Performance Analytics",
    description: "Monitor and optimize AI system performance with real-time dashboards and KPI tracking.",
    badge: "Results Focused",
    hoverColor: "amber"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Our AI Consulting Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive AI solutions designed to address your unique business challenges
            and accelerate growth through intelligent automation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const hoverColors = {
              blue: "hover:bg-blue-50/80 hover:border-blue-100",
              purple: "hover:bg-purple-50/80 hover:border-purple-100",
              green: "hover:bg-green-50/80 hover:border-green-100",
              orange: "hover:bg-orange-50/80 hover:border-orange-100",
              red: "hover:bg-red-50/80 hover:border-red-100",
              amber: "hover:bg-amber-50/80 hover:border-amber-100",
            };

            const iconBgColors = {
              blue: "bg-blue-100 group-hover:bg-blue-200/80",
              purple: "bg-purple-100 group-hover:bg-purple-200/80",
              green: "bg-green-100 group-hover:bg-green-200/80",
              orange: "bg-orange-100 group-hover:bg-orange-200/80",
              red: "bg-red-100 group-hover:bg-red-200/80",
              amber: "bg-amber-100 group-hover:bg-amber-200/80",
            };

            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-2 border-border/40 bg-white rounded-2xl transition-all duration-300 hover:shadow-xl ${hoverColors[service.hoverColor as keyof typeof hoverColors]}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex flex-col items-center space-y-3">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 ${iconBgColors[service.hoverColor as keyof typeof iconBgColors]}`}>
                      {service.fallbackIcon ? (
                        <IconWithFallback 
                          src={service.icon} 
                          FallbackIcon={service.fallbackIcon}
                          alt={`${service.title} icon`}
                        />
                      ) : (
                        <Image
                          src={service.icon}
                          alt={`${service.title} icon`}
                          width={48}
                          height={48}
                          className="object-contain"
                          unoptimized
                        />
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-base leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}