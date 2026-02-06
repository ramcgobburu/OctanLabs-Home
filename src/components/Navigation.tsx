"use client";

import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHighlighted, setLogoHighlighted] = useState(true);

  useEffect(() => {
    
    // Highlight logo on page load, then fade after 3 seconds
    const timer = setTimeout(() => {
      setLogoHighlighted(false);
    }, 3000);
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 100); // Trigger shrink after 100px scroll
      }
    };
    
    // Check initial scroll position after mount
    handleScroll();
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`z-50 transition-all duration-500 ${
        scrolled 
          ? "sticky top-0 py-2 lg:py-3" 
          : "absolute top-0 left-0 right-0 py-6 lg:py-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-500 relative ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl shadow-xl border-white/10 p-3"
              : "bg-black/30 backdrop-blur-xl shadow-lg border-white/20 p-4 lg:p-6"
          }`}
          style={{
            background: scrolled 
              ? 'rgba(0, 0, 0, 0.4)'
              : 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center transition-all duration-300"
            onClick={(e) => {
              if (typeof window !== 'undefined' && window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className={`relative flex items-center justify-center transition-all duration-300 ${
              scrolled 
                ? "h-7 w-auto max-w-[140px]" 
                : "h-10 w-auto max-w-[180px]"
            }`}>
              {/* Vibrant gradient glow - highlighted on page load */}
              <div className={`absolute -inset-3 rounded-xl blur-2xl transition-all duration-1000 ${
                logoHighlighted
                  ? "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-70 scale-110"
                  : "bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-purple-500/15 opacity-0 scale-100"
              } group-hover:opacity-50 group-hover:scale-105`} />
              
              {/* Subtle persistent glow */}
              <div className={`absolute -inset-2 rounded-lg bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-lg transition-all duration-300 ${
                scrolled ? "opacity-25" : "opacity-35"
              } group-hover:from-cyan-500/40 group-hover:via-blue-500/40 group-hover:to-purple-500/40`} />
              
              {/* Logo - completely transparent, glossy effect */}
              <div className="relative z-10 flex items-center w-full" style={{ background: 'transparent' }}>
                <img
                  src="/octanlabs-logo.png"
                  alt="OctanLabs Logo"
                  className="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter: logoHighlighted 
                      ? 'drop-shadow(0 0 25px rgba(0, 191, 255, 0.9)) drop-shadow(0 0 35px rgba(138, 43, 226, 0.7)) brightness(1.1)'
                      : 'drop-shadow(0 2px 10px rgba(0, 191, 255, 0.5)) brightness(1.05)',
                    imageRendering: 'auto',
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    maxWidth: scrolled ? '140px' : '180px',
                    height: 'auto',
                    mixBlendMode: 'normal',
                  }}
                />
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <Menu className={`cursor-pointer transition-all duration-500 ${
              scrolled 
                ? "size-5" 
                : "size-6 text-white"
            }`} />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/about" 
                  className={`inline-flex w-max items-center justify-center rounded-md font-medium transition-all duration-500 ${
                    scrolled 
                      ? "h-9 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" 
                      : "h-11 px-5 py-2.5 text-base text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                  }`}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/services" 
                  className={`inline-flex w-max items-center justify-center rounded-md font-medium transition-all duration-500 ${
                    scrolled 
                      ? "h-9 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" 
                      : "h-11 px-5 py-2.5 text-base text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                  }`}
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`transition-all duration-500 ${
                        scrolled 
                          ? "h-9 px-4 text-sm" 
                          : "h-11 px-5 text-base text-white hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Insights
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" sideOffset={8} className="z-50">
                    <DropdownMenuItem asChild>
                      <Link href="/case-studies" className="w-full">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Case Studies</span>
                          <span className="text-xs text-muted-foreground">Real-world success stories</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/blog" className="w-full">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-none">Blog</span>
                          <span className="text-xs text-muted-foreground">Industry insights and trends</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/contact" 
                  className={`inline-flex w-max items-center justify-center rounded-md font-medium transition-all duration-500 ${
                    scrolled 
                      ? "h-9 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" 
                      : "h-11 px-5 py-2.5 text-base text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                  }`}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="hidden items-center lg:flex">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className={`p-0 transition-all duration-500 ${
                scrolled 
                  ? "size-9 hover:bg-accent" 
                  : "size-10 text-white hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2 dark:hidden">
                <Moon className={`transition-all duration-500 ${
                  scrolled ? "size-4" : "size-5"
                }`} />
              </div>
              <div className="dark:flex items-center gap-2 hidden">
                <Sun className={`transition-all duration-500 ${
                  scrolled ? "size-4" : "size-5"
                }`} />
              </div>
              <span className="sr-only">Change theme</span>
            </Button>
            
            <div className={`transition-all duration-500 ${
              scrolled ? "ml-2" : "ml-3"
            }`}>
              <Button 
                className={`transition-all duration-500 ${
                  scrolled 
                    ? "h-10 px-6 text-sm" 
                    : "h-12 px-8 text-base bg-white text-primary hover:bg-white/90"
                }`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ChevronRight className={`transition-all duration-500 ${
                  scrolled ? "size-4" : "size-5"
                }`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}