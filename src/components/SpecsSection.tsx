
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-background" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2">3</span>
              <span>Philosophy</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-primary/30 cosmic-glow"></div>
        </div>
        
        {/* Main content with cosmic gradient text */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12 cosmic-text">
            AstraFlux doesn't just move you forward—it transforms how you experience movement. By combining ancient mythological energy with adaptive AI, AstraFlux empowers you to push boundaries, break limits, and charge into your future with unstoppable momentum.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
