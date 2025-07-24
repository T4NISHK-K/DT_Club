import React, { useState } from 'react'
import h1 from "../assets/h1.png"
import { Link } from 'react-router-dom'
import { 
  Lightbulb, 
  Heart, 
  Star, 
  Zap, 
  Users, 
  Target,
  ArrowRight,
  Mail
} from "lucide-react"
import { motion } from 'framer-motion'

export function HeroOne() {
  const [email, setEmail] = useState("");

  // No card data needed

  const floatingIcons = [
    { icon: Lightbulb, position: "top-20 left-10", color: "text-pastel-orange", delay: "0s" },
    { icon: Heart, position: "top-32 right-16", color: "text-primary", delay: "1s" },
    { icon: Star, position: "bottom-32 left-20", color: "text-pastel-blue", delay: "2s" },
    { icon: Zap, position: "top-40 right-8", color: "text-pastel-green", delay: "0.5s" },
    { icon: Users, position: "bottom-20 right-12", color: "text-pastel-purple", delay: "1.5s" },
    { icon: Target, position: "bottom-40 left-8", color: "text-primary", delay: "2.5s" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-0">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          style={{ animationDelay: item.delay }}
        >
          <div className={`p-3 rounded-full bg-white/70 backdrop-blur-md shadow-soft animate-float hover:animate-pulse-glow ${item.color}`}>
            <item.icon size={24} />
          </div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo removed as requested */}
            
            {/* CTA Pills */}
            <div className="flex flex-wrap gap-3 animate-slide-in-left">
              <button className="px-6 py-3 bg-gradient-accent text-accent-foreground text-sm font-medium rounded-xl shadow-soft hover:shadow-hero-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm">
                <Users size={16} className="mr-2" />
                Join Our Club
              </button>
              <button className="px-6 py-3 bg-white/70 text-foreground text-sm font-medium rounded-xl backdrop-blur-md shadow-soft border border-white/20">
                Become a Design Thinker
              </button>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-primary">Innovators</span> Who{" "}
                <br />
                <span className="text-foreground">Nurture Creativity</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Unlock your potential with us—where ideas transform into reality
                through collaborative design thinking and innovation.
              </p>
            </div>

            {/* Email Subscription */}
            <div className="space-y-4">
              <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 w-full bg-white/90 backdrop-blur-md border border-white/30 shadow-soft rounded-xl px-3 py-2"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => window.open("https://uc64l098ghp.typeform.com/to/j3cU50Ug", "_blank")}
                  className="h-12 px-8 rounded-xl bg-gradient-button text-white font-semibold hover:shadow-hero-glow transition-all duration-300 flex items-center gap-2 shadow-soft"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
              <p className="text-sm text-muted-foreground">
                We care about your privacy
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.open("https://uc64l098ghp.typeform.com/to/j3cU50Ug", "_blank")} 
                className="px-8 py-3 bg-gradient-button text-white text-lg font-semibold rounded-xl shadow-soft hover:shadow-hero-glow transition-all duration-300 flex items-center gap-2"
              >
                <Users size={20} className="mr-2" />
                Join Our Club
              </button>
              <button 
                onClick={() => window.location.href = "/contact"} 
                className="px-8 py-3 border-2 border-primary/60 text-primary bg-white/10 backdrop-blur-md text-lg font-semibold rounded-xl shadow-soft hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} className="mr-2" />
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-hero-glow hover:scale-[1.01] hover:-rotate-1">
                <img
                  src={h1}
                  alt="Creative innovator"
                  className="w-full h-auto rounded-2xl animate-float transition-all duration-500 hover:shadow-hero-glow hover:scale-[1.02] hover:rotate-1"
                  style={{ animationDuration: "4s" }}
                />
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-pastel-green/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/30 animate-bounce-subtle transition-all duration-300 hover:shadow-hero-glow" style={{ animationDuration: "3s" }}>
                  <span className="text-sm font-semibold text-foreground">
                    😊 FREE TO USE!
                  </span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-foreground/90 backdrop-blur-md text-white rounded-full px-6 py-3 shadow-lg border border-white/20 animate-wiggle transition-all duration-300 hover:shadow-hero-glow" style={{ animationDuration: "1s" }}>
                  <span className="text-sm font-semibold">
                    😍 DISCOVER. MATCH. APPLY!
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-accent/30 backdrop-blur-sm rounded-3xl animate-pulse-glow hover:bg-accent/40 transition-all duration-500" style={{ animationDuration: "2s" }}></div>
              
              {/* Additional floating elements */}
              <div className="absolute top-8 -right-8 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg border border-white/30 animate-float transition-all duration-300 hover:shadow-hero-glow" style={{ animationDuration: "4s" }}>
                <Target className="text-primary" size={24} />
              </div>
              
              <div className="absolute bottom-8 -left-8 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg border border-white/30 animate-bounce-subtle transition-all duration-300 hover:shadow-hero-glow" style={{ animationDuration: "3s" }}>
                <Lightbulb className="text-pastel-orange" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pastel-blue rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pastel-purple rounded-full opacity-20 translate-x-24 translate-y-24"></div>
    </section>
  )
}
