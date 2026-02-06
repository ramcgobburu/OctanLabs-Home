"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, Clock, User, Eye, MessageCircle } from "lucide-react";
import { useState } from "react";

// Images will be served from public folder

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Manufacturing: How AI is Revolutionizing Production Lines",
      category: "manufacturing",
      aiSolution: "Predictive Analytics",
      excerpt: "Discover how artificial intelligence is transforming manufacturing processes, reducing downtime, and optimizing production efficiency through predictive maintenance and real-time analytics.",
      content: "Manufacturing industries are experiencing a paradigm shift with the integration of AI technologies. From predictive maintenance that prevents costly breakdowns to quality control systems that detect defects in real-time, AI is becoming the backbone of modern production facilities.",
      author: "Dr. Sarah Chen",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      views: "2.4k",
      comments: 23,
      imageUrl: "/blog-manufacturing-ai.jpg",
      tags: ["AI", "Manufacturing", "Predictive Analytics", "IoT"]
    },
    {
      id: 2,
      title: "Natural Language Processing in Customer Service: Beyond Chatbots",
      category: "retail",
      aiSolution: "Natural Language Processing",
      excerpt: "Explore how advanced NLP is transforming customer interactions, from sentiment analysis to personalized shopping experiences and intelligent support systems.",
      content: "Natural Language Processing has evolved far beyond simple chatbots. Today's NLP systems can understand context, emotion, and intent, providing customers with truly personalized experiences. From analyzing customer feedback to predicting shopping preferences, NLP is reshaping retail.",
      author: "Michael Rodriguez",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      views: "1.8k",
      comments: 17,
      imageUrl: "/blog-nlp-customer-service.jpg",
      tags: ["NLP", "Customer Service", "Retail", "Machine Learning"]
    },
    {
      id: 3,
      title: "AI in Financial Risk Management: Detecting Fraud Before it Happens",
      category: "finance",
      aiSolution: "Machine Learning",
      excerpt: "Learn how machine learning algorithms are revolutionizing fraud detection, risk assessment, and regulatory compliance in the financial services sector.",
      content: "Financial institutions are leveraging AI to stay ahead of increasingly sophisticated fraud attempts. Machine learning models can analyze patterns in real-time, flagging suspicious activities before they result in losses. This proactive approach is transforming risk management.",
      author: "Dr. Emily Watson",
      publishDate: "2024-01-02",
      readTime: "10 min read",
      views: "3.1k",
      comments: 34,
      imageUrl: "/blog-fraud-detection.jpg",
      tags: ["Fraud Detection", "Finance", "Risk Management", "AI Security"]
    },
    {
      id: 4,
      title: "Computer Vision in Healthcare: Diagnosing with Digital Eyes",
      category: "healthcare",
      aiSolution: "Computer Vision",
      excerpt: "Discover how computer vision technology is enhancing medical imaging, enabling faster and more accurate diagnoses, and supporting healthcare professionals in critical decisions.",
      content: "Computer vision is revolutionizing medical diagnostics by providing AI-powered analysis of medical images. From detecting early-stage cancers to analyzing retinal scans for diabetic complications, this technology is saving lives through early and accurate detection.",
      author: "Dr. James Park",
      publishDate: "2023-12-28",
      readTime: "7 min read",
      views: "2.7k",
      comments: 41,
      imageUrl: "/blog-healthcare-ai.jpg",
      tags: ["Computer Vision", "Healthcare", "Medical Imaging", "Diagnostics"]
    },
    {
      id: 5,
      title: "The Ethics of AI: Building Responsible AI Systems for the Future",
      category: "general",
      aiSolution: "AI Ethics",
      excerpt: "Examine the critical importance of ethical AI development, addressing bias, transparency, and accountability in artificial intelligence systems across all industries.",
      content: "As AI becomes more prevalent across industries, ensuring ethical implementation is crucial. This comprehensive guide explores bias mitigation, algorithmic transparency, and the frameworks needed to build AI systems that serve humanity responsibly.",
      author: "Prof. Lisa Chen",
      publishDate: "2023-12-20",
      readTime: "12 min read",
      views: "4.2k",
      comments: 67,
      imageUrl: "/blog-ai-ethics.jpg",
      tags: ["AI Ethics", "Responsible AI", "Bias Mitigation", "Transparency"]
    }
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "retail", label: "Retail & E-commerce" },
    { id: "finance", label: "Financial Services" },
    { id: "healthcare", label: "Healthcare" },
    { id: "general", label: "AI & Technology" }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Insights & Trends
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                AI Industry
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"> Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights, industry trends, and practical guidance on 
                implementing AI solutions across various sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-card/50 border border-border/50 rounded-2xl p-2">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm text-xs lg:text-sm"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">Featured Article</h2>
            <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                  <img 
                    src={filteredPosts[0].imageUrl} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline" className="capitalize">
                      {filteredPosts[0].category}
                    </Badge>
                    <Badge variant="secondary">
                      {filteredPosts[0].aiSolution}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {filteredPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="size-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>{new Date(filteredPosts[0].publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="size-4" />
                        <span>{filteredPosts[0].views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="size-4" />
                        <span>{filteredPosts[0].comments} comments</span>
                      </div>
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div key={post.id} className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
                
                <div className="relative">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs capitalize">
                        {post.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {post.aiSolution}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="size-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="size-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="size-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
            {/* Subtle animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
            
            <div className="relative p-12 lg:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Stay Updated with AI Insights
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get the latest AI trends, industry insights, and expert analysis delivered 
                  directly to your inbox. Join thousands of professionals staying ahead of the curve.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button size="lg">
                  Subscribe
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
