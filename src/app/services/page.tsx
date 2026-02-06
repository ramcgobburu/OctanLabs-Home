"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Brain, Eye, MessageCircle, Shield, TrendingUp, Cog, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Machine Learning Solutions",
      category: "core-ai",
      icon: Brain,
      description: "Custom ML models tailored to your specific business needs and data patterns.",
      features: [
        "Predictive Analytics",
        "Classification Models",
        "Regression Analysis",
        "Ensemble Methods",
        "Model Optimization"
      ],
      timeline: "8-12 weeks",
      pricing: "Starting at $25K",
      industries: ["Finance", "Healthcare", "Manufacturing", "Retail"]
    },
    {
      id: 2,
      title: "Computer Vision Systems",
      category: "core-ai",
      icon: Eye,
      description: "Advanced image and video analysis solutions for automation and insights.",
      features: [
        "Object Detection",
        "Image Classification",
        "Facial Recognition",
        "Quality Control",
        "Medical Imaging"
      ],
      timeline: "10-16 weeks",
      pricing: "Starting at $35K",
      industries: ["Healthcare", "Manufacturing", "Security", "Retail"]
    },
    {
      id: 3,
      title: "Natural Language Processing",
      category: "core-ai",
      icon: MessageCircle,
      description: "Intelligent text analysis and conversational AI solutions.",
      features: [
        "Sentiment Analysis",
        "Chatbot Development",
        "Document Processing",
        "Language Translation",
        "Voice Recognition"
      ],
      timeline: "6-10 weeks",
      pricing: "Starting at $20K",
      industries: ["Customer Service", "Legal", "Healthcare", "Education"]
    },
    {
      id: 4,
      title: "AI Security & Fraud Detection",
      category: "specialized",
      icon: Shield,
      description: "Advanced threat detection and cybersecurity solutions powered by AI.",
      features: [
        "Real-time Monitoring",
        "Anomaly Detection",
        "Risk Assessment",
        "Behavioral Analysis",
        "Compliance Reporting"
      ],
      timeline: "12-18 weeks",
      pricing: "Starting at $50K",
      industries: ["Finance", "Insurance", "E-commerce", "Government"]
    },
    {
      id: 5,
      title: "Predictive Analytics Platform",
      category: "analytics",
      icon: TrendingUp,
      description: "Forecast trends and make data-driven decisions with advanced analytics.",
      features: [
        "Time Series Forecasting",
        "Demand Prediction",
        "Customer Behavior Analysis",
        "Market Trend Analysis",
        "Risk Modeling"
      ],
      timeline: "8-14 weeks",
      pricing: "Starting at $30K",
      industries: ["Retail", "Manufacturing", "Finance", "Supply Chain"]
    },
    {
      id: 6,
      title: "AI Integration & Automation",
      category: "implementation",
      icon: Cog,
      description: "Seamlessly integrate AI into your existing systems and workflows.",
      features: [
        "System Integration",
        "Workflow Automation",
        "API Development",
        "Cloud Deployment",
        "Performance Monitoring"
      ],
      timeline: "4-8 weeks",
      pricing: "Starting at $15K",
      industries: ["All Industries", "Enterprise", "SMB", "Startups"]
    }
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "core-ai", label: "Core AI" },
    { id: "specialized", label: "Specialized" },
    { id: "analytics", label: "Analytics" },
    { id: "implementation", label: "Implementation" }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "We analyze your business needs, data landscape, and technical requirements.",
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI roadmap and implementation strategy.",
      duration: "1 week"
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build, train, and rigorously test AI models using your data.",
      duration: "4-12 weeks"
    },
    {
      step: 4,
      title: "Deployment & Integration",
      description: "Seamlessly integrate the solution into your existing systems.",
      duration: "1-3 weeks"
    },
    {
      step: 5,
      title: "Training & Support",
      description: "Comprehensive training and ongoing support for your team.",
      duration: "Ongoing"
    }
  ];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                AI Solutions & Services
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Comprehensive AI Services for
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"> Every Business Need</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From machine learning models to complete AI transformations, we provide 
                end-to-end artificial intelligence solutions tailored to your industry and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="inline-flex h-12 items-center justify-center rounded-2xl bg-card/50 border border-border/50 p-1 mb-12 w-full">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg flex-1"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
                  
                  <div className="relative p-8 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <Icon className="size-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.timeline}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="size-4 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-muted-foreground">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Industries</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.industries.map((industry, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">
                          {service.pricing}
                        </span>
                        <Button size="sm">
                          Learn More
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to ensure successful AI implementation and maximum ROI
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
            {/* Subtle animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
            
            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-8">
                {process.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Connection Line */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-10"></div>
                    )}
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:space-y-3">
                        <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="text-center">
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
            {/* Subtle animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
            
            <div className="relative p-12 lg:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Let&apos;s discuss your AI needs and create a custom solution that drives 
                  real business value. Our experts are ready to help you succeed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="size-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Free Consultation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Free initial consultation • No commitment required • Expert guidance included
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
