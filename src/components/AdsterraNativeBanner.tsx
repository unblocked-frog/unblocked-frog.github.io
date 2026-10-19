import React, { useEffect } from "react";

export function AdsterraNativeBanner({ className = '' }: { className?: string }) {
  useEffect(() => {
    // Check if the script is already loaded
    const scriptId = "adsterra-native-script-54f52fa95e674ed6bcd769649b5c8b12";
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
    <div className={`w-full max-w-4xl mx-auto my-6 px-4 flex flex-col items-center ${className}`}>
      <span className="text-[9px] uppercase tracking-widest text-frog-light/40 font-bold mb-2 select-none">
        Recommended Content
      </span>
      <div 
        id="container-54f52fa95e674ed6bcd769649b5c8b12" 
        className="w-full min-h-[120px] rounded-xl overflow-hidden bg-black/20 border border-white/5 p-2 flex justify-center items-center"
      />
    </div>
  );
}
