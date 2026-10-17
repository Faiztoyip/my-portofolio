import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Stats from "../components/Stats" // Import komponen Stats

// ... (biarkan komponen StatusBadge, MainTitle, TechStack, CTAButton, SocialLink di atas tetap seperti semula)

const Home = () => {
  // ... (biarkan state dan useEffect typing effect tetap seperti semula)

  return (
    <>
      <Helmet>
        <title>Ahmad Fa'iz — Portofolio</title>
        <meta name="description" content="Website resmi Ahmad Fa'iz, Data Analyst & Web Developer lulusan S1 Teknik Informatika Universitas Semarang." />
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000`}>
          <div className="container mx-auto min-h-screen flex flex-col justify-center">
            
            {/* Bagian Hero / Perkenalan Utama */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-0 sm:gap-12 lg:gap-20 py-12">
              {/* Left Column (Teks) */}
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left order-1">
                <StatusBadge />
                <MainTitle />
                <div className="h-8 flex items-center">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>
                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light">
                  Lulusan S1 Teknik Informatika Universitas Semarang yang berfokus pada analisis data, pemodelan, dan pengembangan solusi digital.
                </p>
                <div className="flex flex-wrap gap-3 justify-start">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>
                <div className="flex flex-row gap-3 w-full justify-start">
                  <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>
              </div>

              {/* Right Column (Animasi) */}
              <div className="w-full lg:w-1/2 relative flex items-center justify-center order-2">
                <img src="Animation1.gif" alt="Developer Animation" className="w-full h-full object-contain max-w-md" />
              </div>
            </div>

            {/* Kotak Statistik Angka Dinamis Supabase */}
            <Stats />

          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);