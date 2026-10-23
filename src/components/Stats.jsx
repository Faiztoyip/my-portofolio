import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import { certificatesData } from "../data/certificatesData";
import { Code, Award } from "lucide-react";

export default function Stats() {
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalCertificates, setTotalCertificates] = useState(0);

  useEffect(() => {
    setTotalProjects(projectsData.length);
    setTotalCertificates(certificatesData.length);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {/* Box Total Projects */}
      <div className="p-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
            <Code className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Total Projects</p>
            <h3 className="text-3xl font-bold text-white mt-1">{totalProjects}</h3>
            <p className="text-xs text-slate-500 mt-1">Innovative web solutions crafted</p>
          </div>
        </div>
      </div>

      {/* Box Certificates */}
      <div className="p-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Certificates</p>
            <h3 className="text-3xl font-bold text-white mt-1">{totalCertificates}</h3>
            <p className="text-xs text-slate-500 mt-1">Professional skills validated</p>
          </div>
        </div>
      </div>
    </div>
  );
}