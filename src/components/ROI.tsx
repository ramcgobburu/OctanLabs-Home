import { Badge } from "@/components/ui/badge";
// Image will be served from public folder

export function ROI() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Real results that drive lasting{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              impact for everyone
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We deliver tailored AI strategies, innovative solutions, and dedicated support to drive measurable ROI for your business consulting projects
          </p>
        </div>

        <div className="relative flex items-center justify-center px-4 md:px-8 lg:px-16">
          {/* Statistics positioned around the image */}
          <div className="relative w-full max-w-6xl">
            {/* SVG Lines - Very subtle connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Left Side Lines */}
              <line 
                x1="50%" y1="15%" 
                x2="30%" y2="15%" 
                stroke="rgb(148 163 184)" 
                strokeWidth="1" 
                className="opacity-20"
              />
              <line 
                x1="50%" y1="50%" 
                x2="20%" y2="50%" 
                stroke="rgb(148 163 184)" 
                strokeWidth="1" 
                className="opacity-20"
              />
              <line 
                x1="50%" y1="85%" 
                x2="30%" y2="85%" 
                stroke="rgb(148 163 184)" 
                strokeWidth="1" 
                className="opacity-20"
              />
              {/* Right Side Lines */}
              <line 
                x1="50%" y1="15%" 
                x2="70%" y2="15%" 
                stroke="rgb(148 163 184)" 
                strokeWidth="1" 
                className="opacity-20"
              />
              <line 
                x1="50%" y1="50%" 
                x2="80%" y2="50%" 
                stroke="rgb(148 163 184)" 
                strokeWidth="1" 
                className="opacity-20"
              />
              <line 
                x1="50%" y1="85%" 
                x2="70%" y2="85%" 
                stroke="rgb(148 163 184)" 
                strokeWidth="1" 
                className="opacity-20"
              />
            </svg>

            {/* Central Professional Image */}
            <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl mx-auto">
              <img 
                src="/octanlabs-consultant-suit.jpg" 
                alt="OctanLabs Professional AI Consultant" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent"></div>
            </div>

            {/* Left Side Statistics */}
            {/* Revenue Badge - Top Left */}
            <div className="absolute top-12 left-8 md:left-16 lg:left-24 flex items-center gap-3">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">$7M+</span>
              </div>
              <span className="text-sm font-medium text-foreground">Revenue</span>
            </div>

            {/* Growth Badge - Middle Left (further out) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 lg:left-16 flex items-center gap-3">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">72%</span>
              </div>
              <span className="text-sm font-medium text-foreground">Growth</span>
            </div>

            {/* Skills Badge - Bottom Left */}
            <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 flex items-center gap-3">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">65%</span>
              </div>
              <span className="text-sm font-medium text-foreground">Skills</span>
            </div>

            {/* Right Side Statistics */}
            {/* Impact Badge - Top Right */}
            <div className="absolute top-12 right-8 md:right-16 lg:right-24 flex items-center gap-3 flex-row-reverse">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">78%</span>
              </div>
              <span className="text-sm font-medium text-foreground">Impact</span>
            </div>

            {/* Designers Badge - Middle Right (further out) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8 lg:right-16 flex items-center gap-3 flex-row-reverse">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">1%</span>
              </div>
              <span className="text-sm font-medium text-foreground">Designers</span>
            </div>

            {/* Consultants Badge - Bottom Right */}
            <div className="absolute bottom-12 right-8 md:right-16 lg:right-24 flex items-center gap-3 flex-row-reverse">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">10+</span>
              </div>
              <span className="text-sm font-medium text-foreground">Consultants</span>
            </div>
          </div>
        </div>

        {/* Bottom description */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Every project we undertake is measured against clear KPIs and ROI metrics. 
            Our AI-powered business consulting delivers quantifiable results that transform operations and drive sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}