import React from "react";

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow top */}
      <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/[0.07] rounded-full blur-[120px]" />
      {/* Radial glow bottom-right */}
      <div className="absolute -bottom-[300px] -right-[200px] w-[600px] h-[600px] bg-violet-600/[0.07] rounded-full blur-[120px]" />
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
