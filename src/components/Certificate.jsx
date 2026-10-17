import React from "react";

const Certificate = ({ ImgSertif, Title }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-900/90 border border-white/10 p-3 hover:border-purple-500/50 transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center">
        <img
          src={ImgSertif}
          alt={Title || "Certificate"}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      {Title && <h3 className="text-white font-medium text-sm mt-3 text-center line-clamp-1">{Title}</h3>}
    </div>
  );
};

export default Certificate;