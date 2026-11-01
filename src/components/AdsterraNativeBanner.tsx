import React, { useEffect, useRef } from "react";

export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "adsterra-native-script-54f52fa9";
    const containerId = "container-54f52fa95e674ed6bcd769649b5c8b12";
    if (!document.getElementById(scriptId)) {
      // Set options
      // @ts-ignore
      window.atAsyncOptions = {
        key: "54f52fa95e674ed6bcd769649b5c8b12",
        format: "js",
        async: true,
        container: containerId,
        params: {}
      };

      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "//www.highperformanceformat.com/54f52fa95e674ed6bcd769649b5c8b12/invoke.js";
      script.onerror = () => {
        const fallback = document.createElement("script");
        fallback.async = true;
        fallback.src = "//www.topcreativeformat.com/54f52fa95e674ed6bcd769649b5c8b12/invoke.js";
        document.body.appendChild(fallback);
      };
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
