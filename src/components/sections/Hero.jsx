import {
  ChevronDown,
  Star,
  BarChart3,
  LineChart,
  Database,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

import { PERSONAL_INFO, STATS } from "../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Radial Gradient Background */}
      <RadialGradientBackground variant="hero" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="text-left">
            {/* Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-[18px] py-[11px] mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO?.title} | Based in {PERSONAL_INFO?.location}
                </span>
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
                Data Analyst Portfolio
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                I turn raw data into actionable insights using analytics,
                visualization, and modern data tools. Passionate about solving
                real-world problems with data-driven decisions.
              </p>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white flex items-center gap-2 cursor-pointer hover:bg-gray-100 hover:text-black transition">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS?.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT IMAGE */}
          <FadeIn delay={200}>
            <div className="relative ">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[500px] ml-auto group">
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  <img
                    src="/images/afreen.jpg"
                    alt="Data Analyst"
                    className="w-full h-full object-cover grayscale transition duration-500"
                  />
                </div>

                {/* Glassmorphism Skill Icons */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-5 px-6 py-4 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg shadow-black/30 ring-1 ring-white/10">
                      <BarChart3 className="w-6 h-6 text-primary hover:scale-110 transition" />
                      <LineChart className="w-6 h-6 text-primary hover:scale-110 transition" />
                      <Database className="w-6 h-6 text-primary hover:scale-110 transition" />
                      <TrendingUp className="w-6 h-6 text-primary hover:scale-110 transition" />
                      <FileSpreadsheet className="w-6 h-6 text-primary hover:scale-110 transition" />
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Scroll Down Button */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-[60px] left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary"/>
      </button>

    </section>
  );
};

export default Hero;
