import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Eye, Award, Globe, Zap } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning & Deep Learning",
      experience: "15+ years",
      description: "Former Google AI researcher specializing in neural networks and computer vision applications."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      expertise: "AI Infrastructure & MLOps",
      experience: "12+ years",
      description: "Led AI implementation teams at Fortune 500 companies, expert in scalable AI systems."
    },
    {
      name: "Dr. Emily Watson",
      role: "Data Science Director",
      expertise: "Predictive Analytics & NLP",
      experience: "10+ years",
      description: "PhD in Data Science, specialized in natural language processing and predictive modeling."
    },
    {
      name: "Dr. James Park",
      role: "Healthcare AI Lead",
      expertise: "Medical AI & Computer Vision",
      experience: "8+ years",
      description: "Medical doctor turned AI researcher, pioneering AI applications in healthcare diagnostics."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring cutting-edge technologies and methodologies."
    },
    {
      icon: Users,
      title: "Human-Centric AI",
      description: "Our AI solutions are designed to augment human capabilities, not replace them. We prioritize ethical and responsible AI development."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in explainable AI. Our clients understand how our solutions work and why they make specific recommendations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from research and development to implementation and support."
    }
  ];

  const stats = [
    { number: "500+", label: "AI Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Support Coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                About OctanLabs
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Pioneering the Future of
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"> Intelligent Business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are a team of AI researchers, engineers, and consultants dedicated to transforming 
                businesses through cutting-edge artificial intelligence solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
            {/* Subtle animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
            
            <div className="relative p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
              
              <div className="relative p-8 lg:p-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Target className="size-8 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize AI technology and make intelligent automation accessible to businesses 
                  of all sizes. We believe that every organization should have the opportunity to harness 
                  the transformative power of artificial intelligence to drive growth, efficiency, and innovation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="size-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Accelerate digital transformation through AI innovation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="size-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Create global impact through responsible AI deployment
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="size-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Empower teams with human-AI collaboration
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
              
              <div className="relative p-8 lg:p-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Eye className="size-8 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world&apos;s most trusted AI consulting partner, known for delivering 
                  transformative solutions that create lasting value. We envision a future where 
                  AI seamlessly integrates with human expertise to solve the world&apos;s most complex challenges.
                </p>
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-semibold mb-3 text-primary">2030 Goals</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Deploy AI solutions across 1000+ global enterprises</div>
                    <div>• Establish AI research centers on every continent</div>
                    <div>• Train 10,000+ professionals in AI implementation</div>
                    <div>• Contribute to open-source AI frameworks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
                  
                  <div className="relative p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class AI researchers and engineers with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
                
                <div className="relative p-6 space-y-4">
                  {/* Profile placeholder */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto">
                    <Users className="size-8 text-primary" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Expertise</p>
                      <p className="text-sm">{member.expertise}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
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
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Let&apos;s discuss how our expertise can help you unlock the full potential 
                  of artificial intelligence for your organization.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your AI Journey
                  <ArrowRight className="size-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Schedule a Consultation
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

