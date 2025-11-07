
import React, { useState } from "react";
import { toast } from "sonner";
const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return <section id="details" className="w-full bg-background py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden cosmic-glow border border-primary/20">
            {/* Card Header */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end bg-cosmic-gradient">
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Tech Specs
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-8 border-t border-primary/20">
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8 text-foreground">
                Precision engineering meets flux energy
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0 cosmic-glow">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
                      <span className="font-semibold text-base text-foreground">Weight:</span> 285g per shoe
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0 cosmic-glow">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
                      <span className="font-semibold text-base text-foreground">Energy Cores:</span> 3 AI-powered
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0 cosmic-glow">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
                      <span className="font-semibold text-base text-foreground">Cushioning:</span> Adaptive AI foam
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0 cosmic-glow">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
                      <span className="font-semibold text-base text-foreground">Battery Life:</span> 30 days
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 flex-shrink-0 cosmic-glow">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
                      <span className="font-semibold text-base text-foreground">Materials:</span> Flux-weave composite
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden cosmic-glow border border-primary/20">
            {/* Card Header */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start bg-cosmic-gradient-vertical">
              <div className="inline-block px-4 sm:px-6 py-2 border border-primary bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs mb-4">
                Pre-order Now
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Join the Flux
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-8 border-t border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Full name" 
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Shoe size (optional)" 
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full transition-all duration-300 cosmic-glow"
                  >
                    Reserve Your Pair
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DetailsSection;
