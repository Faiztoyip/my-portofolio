import React from "react";
import { Code, Award, ExternalLink } from "lucide-react";

import { projectsData } from "../data/projectsData";
import { certificatesData } from "../data/certificatesData"; 

export default function Stats() {
  const projectCount = Array.isArray(projectsData) ? projectsData.length : 0;
  const certCount = Array.isArray(certificatesData) ? certificatesData.length : 0;

  return (
    <div className="md:px-[10%] px-[5%] w-full my-8 bg-[#030014]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {/* Card 1: TOTAL PROJECTS */}
        <a
          href="#Portofolio"
          className="group relative p-6 rounded-2xl bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition duration-500"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  TOTAL PROJECTS
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Innovative web solutions crafted
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {projectCount}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </a>

        {/* Card 2: CERTIFICATES */}
        <a
          href="#Portofolio"
          className="group relative p-6 rounded-2xl bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-xl overflow-hidden"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition duration-500"></div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  CERTIFICATES
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Professional skills validated
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {certCount}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}