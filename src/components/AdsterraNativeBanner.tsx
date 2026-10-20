import React, { useEffect, useRef } from "react";

export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "adsterra-native-script-54f52fa9";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://bauval.org/21/54f52fa95e674ed6bcd769649b5c8b12";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={`max-w-7xl mx-auto px-6 mb-12 ${className}`}>
      <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-black/30 border border-white/5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-frog-light/40 mb-3 select-none">
          Recommended Content
        </span>
        <div 
          id="container-54f52fa95e674ed6bcd769649b5c8b12" 
          ref={containerRef}
          className="w-full flex justify-center items-center min-h-[140px]"
        />
      </div>
    </section>
  );
}
