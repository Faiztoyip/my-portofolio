import React from "react";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="w-36 h-36 md:w-40 md:h-40 bg-slate-900/80 border border-white/10 hover:border-purple-500/50 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm group">
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        <img
          src={`/${TechStackIcon}`}
          alt={Language}
          className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
      <span className="text-slate-300 font-medium text-xs md:text-sm text-center line-clamp-2 group-hover:text-white transition-colors">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;