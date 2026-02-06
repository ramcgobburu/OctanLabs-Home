import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Footer() {
  return (
    <footer className="py-8 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Card className="rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg p-16">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="group mb-4 flex items-center">
                <div className="relative flex items-center justify-center h-12 w-auto">
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Logo */}
                  <div className="relative z-10" style={{ background: 'transparent' }}>
                    <img
                      src="/octanlabs-logo.png"
                      alt="OctanLabs Logo"
                      className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                      style={{
                        filter: 'drop-shadow(0 2px 6px rgba(0, 191, 255, 0.25))',
                        background: 'transparent',
                        backgroundColor: 'transparent',
                        backgroundImage: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">
                Transforming businesses with AI-powered consulting solutions. 
                Your trusted partner for intelligent automation and data-driven growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">AI Strategy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Process Optimization</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Automation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <Mail className="mr-3 h-4 w-4" />
                  hello@octanlabs.com
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-4 w-4" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-3 h-4 w-4" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                © 2024 OctanLabs. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}