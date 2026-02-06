"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Play, TrendingUp, Users, DollarSign } from "lucide-react";
import { useState } from "react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Predictive Maintenance for Manufacturing Giant",
      industry: "manufacturing",
      client: "Global Auto Manufacturer",
      duration: "8 months",
      problem: "Unplanned equipment downtime was costing the company $2M monthly in lost production. Traditional maintenance schedules were inefficient and reactive.",
      solution: "Implemented IoT sensors and machine learning algorithms to predict equipment failures 2-4 weeks in advance. Created a centralized dashboard for maintenance teams with automated work order generation.",
      impact: [
        { metric: "Downtime Reduction", value: "67%", icon: TrendingUp },
        { metric: "Cost Savings", value: "$18M/year", icon: DollarSign },
        { metric: "Efficiency Gain", value: "45%", icon: Users }
      ],
      technologies: ["Machine Learning", "IoT", "Predictive Analytics", "Real-time Dashboard"],
      videoUrl: "https://example.com/video1.mp4",
      imageUrl: "/blog-manufacturing-ai.jpg"
    },
    {
      id: 2,
      title: "Intelligent Customer Support Chatbot for E-commerce",
      industry: "retail",
      client: "Leading Fashion Retailer",
      duration: "6 months",
      problem: "Customer support team was overwhelmed with 10,000+ daily inquiries. Response times averaged 24 hours, leading to customer dissatisfaction and lost sales.",
      solution: "Developed an AI chatbot using natural language processing to handle 80% of customer inquiries automatically. Integrated with existing CRM and order management systems.",
      impact: [
        { metric: "Response Time", value: "< 30 seconds", icon: TrendingUp },
        { metric: "Resolution Rate", value: "85%", icon: Users },
        { metric: "Cost Reduction", value: "$2.4M/year", icon: DollarSign }
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "API Integration", "Real-time Analytics"],
      videoUrl: "https://example.com/video2.mp4",
      imageUrl: "/blog-nlp-customer-service.jpg"
    },
    {
      id: 3,
      title: "Fraud Detection System for Financial Services",
      industry: "finance",
      client: "Regional Banking Network",
      duration: "12 months",
      problem: "Credit card fraud losses exceeded $5M annually. Manual review processes were slow and missed sophisticated fraud patterns.",
      solution: "Built a real-time fraud detection system using ensemble machine learning models. Implemented behavioral analysis and anomaly detection with instant transaction blocking capabilities.",
      impact: [
        { metric: "Fraud Detection", value: "94% accuracy", icon: TrendingUp },
        { metric: "False Positives", value: "73% reduction", icon: Users },
        { metric: "Prevented Losses", value: "$12M", icon: DollarSign }
      ],
      technologies: ["Deep Learning", "Real-time Processing", "Behavioral Analytics", "Risk Scoring"],
      videoUrl: "https://example.com/video3.mp4",
      imageUrl: "/blog-fraud-detection.jpg"
    },
    {
      id: 4,
      title: "Medical Imaging AI for Radiology Department",
      industry: "healthcare",
      client: "Metropolitan Hospital System",
      duration: "10 months",
      problem: "Radiologists were overwhelmed with imaging studies, leading to delayed diagnoses. Manual analysis was time-intensive and prone to human error.",
      solution: "Developed computer vision models for automated detection of anomalies in X-rays, CT scans, and MRIs. Created prioritization system for urgent cases.",
      impact: [
        { metric: "Diagnosis Speed", value: "60% faster", icon: TrendingUp },
        { metric: "Accuracy Rate", value: "96.8%", icon: Users },
        { metric: "Patient Throughput", value: "40% increase", icon: DollarSign }
      ],
      technologies: ["Computer Vision", "Deep Neural Networks", "Medical Imaging", "DICOM Integration"],
      videoUrl: "https://example.com/video4.mp4",
      imageUrl: "/blog-healthcare-ai.jpg"
    }
  ];

  const industries = [
    { id: "all", label: "All Industries" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "retail", label: "Retail & E-commerce" },
    { id: "finance", label: "Financial Services" },
    { id: "healthcare", label: "Healthcare" }
  ];

  const filteredCaseStudies = selectedIndustry === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Success Stories
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Real Results from
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"> AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how we&apos;ve transformed businesses across industries with cutting-edge AI implementations. 
                Each case study showcases measurable impact and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12 bg-card/50 border border-border/50 rounded-2xl p-2">
                {industries.map((industry) => (
                  <TabsTrigger 
                    key={industry.id} 
                    value={industry.id}
                    className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    {industry.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12">
            {filteredCaseStudies.map((study, index) => (
              <div key={study.id} className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
                
                <div className="relative">
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="capitalize">
                            {study.industry}
                          </Badge>
                          <Badge variant="secondary">
                            {study.duration}
                          </Badge>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                          {study.title}
                        </h2>
                        <p className="text-muted-foreground">
                          <strong>Client:</strong> {study.client}
                        </p>
                      </div>

                      {/* Problem */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-destructive">
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-primary">
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-green-600">
                          Measurable Impact
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {study.impact.map((metric, idx) => {
                            const Icon = metric.icon;
                            return (
                              <div key={idx} className="bg-background/80 rounded-xl p-4 border border-border/50 h-full">
                                <div className="flex flex-col items-center text-center space-y-3 h-full justify-center">
                                  <div className="p-2 rounded-lg bg-primary/10">
                                    <Icon className="size-4 text-primary" />
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-lg font-bold text-primary leading-tight break-words">
                                      {metric.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-tight break-words">
                                      {metric.metric}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-6 w-full">
                        {/* Video Placeholder */}
                        <div className="relative bg-background/20 rounded-2xl aspect-video overflow-hidden border-2 border-border/20">
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                            <Button size="lg" className="rounded-full size-16 p-0">
                              <Play className="size-6" />
                            </Button>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                              <p className="text-sm font-medium">
                                Solution Demo & Results
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Diagram/Process Flow */}
                        <div className="bg-background/40 rounded-xl p-6 space-y-4 border border-border/20">
                          <h4 className="font-semibold text-center mb-4">Implementation Process</h4>
                          <div className="flex items-start justify-between text-sm">
                            <div className="text-center space-y-2 flex-1">
                              <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                                1
                              </div>
                              <p className="text-xs">Analysis</p>
                            </div>
                            <div className="flex items-center px-2 mt-2">
                              <ArrowRight className="size-4 text-muted-foreground" />
                            </div>
                            <div className="text-center space-y-2 flex-1">
                              <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                                2
                              </div>
                              <p className="text-xs">Development</p>
                            </div>
                            <div className="flex items-center px-2 mt-2">
                              <ArrowRight className="size-4 text-muted-foreground" />
                            </div>
                            <div className="text-center space-y-2 flex-1">
                              <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                                3
                              </div>
                              <p className="text-xs">Deployment</p>
                            </div>
                            <div className="flex items-center px-2 mt-2">
                              <ArrowRight className="size-4 text-muted-foreground" />
                            </div>
                            <div className="text-center space-y-2 flex-1">
                              <div className="size-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold mx-auto">
                                ✓
                              </div>
                              <p className="text-xs">Results</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Let&apos;s discuss how AI can transform your business. Our team of experts is ready to 
                  analyze your challenges and design a custom solution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="size-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
