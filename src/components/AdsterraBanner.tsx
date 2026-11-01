import React, { useEffect, useRef } from "react";

export type AdsterraFormat = 
  | '728x90' 
  | '300x250' 
  | '468x60' 
  | '320x50' 
  | '160x600' 
  | '160x300';

interface AdConfig {
  key: string;
  width: number;
  height: number;
}

const AD_CONFIGS: Record<AdsterraFormat, AdConfig> = {
  '728x90': {
    key: '2bdcf6031a2d9bf7c4906a8a0afd2e2b',
    width: 728,
    height: 90,
  },
  '300x250': {
    key: 'ff396df310847069b3fe4d3417890225',
    width: 300,
    height: 250,
  },
  '468x60': {
    key: '3d29e9d05c4c4b416377a4a87099928e',
    width: 468,
    height: 60,
  },
  '320x50': {
    key: 'bbc855a60123ae64f7d2b7de8fd739d3',
    width: 320,
    height: 50,
  },
  '160x600': {
    key: '9538be2493bac8686e0fa32459df5567',
    width: 160,
    height: 600,
  },
  '160x300': {
    key: '2bc9594ed0c96edfe4a9e45c5df5b699',
    width: 160,
    height: 300,
  },
};

interface AdsterraBannerProps {
  format?: AdsterraFormat;
  className?: string;
  showLabel?: boolean;
}

export function AdsterraBanner({ 
  format = '728x90', 
  className = '',
  showLabel = true 
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = AD_CONFIGS[format];

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = `${config.width}px`;
    iframe.height = `${config.height}px`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.scrolling = 'no';
    iframe.title = `Adsterra ${format} Banner`;
    iframe.src = `/adsterra-frame.html?key=${encodeURIComponent(config.key)}&width=${config.width}&height=${config.height}`;

    container.appendChild(iframe);
  }, [format, config.key, config.width, config.height]);

  return (
    <div className={`flex flex-col items-center justify-center my-4 ${className}`}>
      {showLabel && (
        <span className="text-[9px] uppercase tracking-widest text-frog-light/40 font-bold mb-1 select-none">
          Sponsored Advertisement
        </span>
      )}
      <div 
        ref={containerRef}
        style={{ 
          width: `${config.width}px`, 
          height: `${config.height}px`,
          maxWidth: '100%'
        }}
        className="flex items-center justify-center overflow-hidden rounded-lg bg-black/40 border border-white/5 shadow-inner"
      />
    </div>
  );
}

/**
 * Responsive banner that switches between 728x90 (desktop), 468x60 (tablet), and 320x50 (mobile)
 */
export function ResponsiveLeaderboard({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center overflow-hidden ${className}`}>
      {/* Desktop */}
      <div className="hidden lg:block">
        <AdsterraBanner format="728x90" />
      </div>
      {/* Tablet */}
      <div className="hidden sm:block lg:hidden">
        <AdsterraBanner format="468x60" />
      </div>
      {/* Mobile */}
      <div className="block sm:hidden">
        <AdsterraBanner format="320x50" />
      </div>
    </div>
  );
}
