
import React from "react";
import sneaker1 from "@/assets/astraflux-sneaker-1.jpg";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-background" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <div className="pulse-chip mb-4 inline-flex">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2">1</span>
            <span>Cosmic Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight cosmic-text mb-3 sm:mb-4">
            Energy in Every Step
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Experience footwear that adapts to your movement, infused with mythological power 
            and cutting-edge AI technology.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden cosmic-glow mx-auto max-w-4xl animate-on-scroll border border-primary/30">
          <div className="w-full">
            <img 
              src={sneaker1}
              alt="AstraFlux sneaker with holographic energy glyphs floating in cosmic space" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-card p-4 sm:p-8 border-t border-primary/20">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 text-foreground">The Flux Core Collection</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Each AstraFlux sneaker features energy-reactive cores inspired by ancient astras, 
              combined with adaptive AI cushioning that learns your stride. The holographic glyph patterns 
              illuminate your path while plasma-infused materials provide unmatched comfort and durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
