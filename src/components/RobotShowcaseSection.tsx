
import React, { useRef, useEffect } from "react";
import sneaker2 from "@/assets/astraflux-sneaker-2.jpg";
import sneaker3 from "@/assets/astraflux-sneaker-3.jpg";

const RobotShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-cosmic-gradient-vertical" id="robot-showcase">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000">
          <div className="mb-12 text-center">
            <div className="pulse-chip mb-4 inline-flex">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2">2</span>
              <span>The Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 cosmic-text">
              Mythological Power Meets <span className="text-secondary">AI Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every AstraFlux sneaker represents the fusion of ancient divine energy and modern artificial intelligence, 
              engineered for the next generation of movement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl cosmic-glow border border-primary/30">
              <img 
                src={sneaker2}
                alt="AstraFlux sneaker with neon cyan energy core and ancient symbols" 
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">Astra Core Prime</h3>
                <p className="text-primary/90">Divine energy adaptation</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl cosmic-glow border border-secondary/30">
              <img 
                src={sneaker3}
                alt="AstraFlux sneaker with adaptive AI cushioning visualization" 
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">Flux Infinity</h3>
                <p className="text-secondary/90">Adaptive intelligence system</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl cosmic-glow border border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 cosmic-glow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="hsl(180, 100%, 50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Energy Cores</h4>
              <p className="text-muted-foreground">Plasma-infused energy cells that activate with each step, providing responsive power transfer.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl cosmic-glow border border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 cosmic-glow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="hsl(180, 100%, 50%)" strokeWidth="2"/>
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.3-7.7l-2.8 2.8M9.1 14.9l-2.8 2.8m11.4 0l-2.8-2.8M9.1 9.1L6.3 6.3" stroke="hsl(180, 100%, 50%)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">AI Cushioning</h4>
              <p className="text-muted-foreground">Machine learning algorithms analyze your movement pattern and adapt cushioning in real-time.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl cosmic-glow border border-primary/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 cosmic-glow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="hsl(180, 100%, 50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Astra Glyphs</h4>
              <p className="text-muted-foreground">Holographic symbols inspired by mythological weapons, activated by motion sensors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotShowcaseSection;
