import Image from "next/image";

export function LogoMarquee() {
  const logos = [
    { 
      name: "Microsoft", 
      src: "https://img.icons8.com/color/96/microsoft.png",
      alt: "Microsoft logo"
    },
    { 
      name: "Google", 
      src: "https://img.icons8.com/color/96/google-logo.png",
      alt: "Google logo"
    },
    { 
      name: "Amazon", 
      src: "https://img.icons8.com/color/96/amazon.png",
      alt: "Amazon logo"
    },
    { 
      name: "Apple", 
      src: "https://img.icons8.com/color/96/mac-os.png",
      alt: "Apple logo"
    },
    { 
      name: "Tesla", 
      src: "https://img.icons8.com/color/96/tesla-logo.png",
      alt: "Tesla logo"
    },
    { 
      name: "IBM", 
      src: "https://img.icons8.com/color/96/ibm.png",
      alt: "IBM logo"
    },
    { 
      name: "Oracle", 
      src: "https://img.icons8.com/color/96/oracle-logo.png",
      alt: "Oracle logo"
    },
  ];

  return (
    <section className="py-8 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-6">
          <p className="text-sm font-bold text-foreground">
            We&apos;ve partnered with:
          </p>
        </div>
        
        <div className="relative overflow-hidden w-full">
          {/* Gradient fade-outs */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent"></div>
          
          <div className="flex animate-marquee space-x-12 items-center">
            {[...logos, ...logos].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={80}
                  height={40}
                  className="object-contain h-10 w-auto"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}