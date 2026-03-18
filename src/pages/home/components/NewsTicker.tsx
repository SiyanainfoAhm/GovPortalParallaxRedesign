import { useEffect, useRef } from 'react';

const TICKER_ITEMS = [
  'Notice: Online portal for Factory Registration now live — apply at ic.gujarat.gov.in',
  'Announcement: New Industrial Policy 2025 released by Govt. of Gujarat',
  'Alert: Last date for renewal of Boilers Certificate extended to 31st March 2026',
  'News: IC Gujarat wins Digital India Award for Best e-Governance Portal 2025',
  'Reminder: Annual Returns under Factories Act due by 30th April 2026',
  'Update: Gujarat Startup Ecosystem ranked #1 in India by DPIIT for 3rd consecutive year',
];

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const speed = 1;
    const totalWidth = ticker.scrollWidth / 2;

    const animate = () => {
      posRef.current -= speed;
      if (Math.abs(posRef.current) >= totalWidth) {
        posRef.current = 0;
      }
      ticker.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    const pause = () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
    const resume = () => {
      animRef.current = requestAnimationFrame(animate);
    };

    ticker.addEventListener('mouseenter', pause);
    ticker.addEventListener('mouseleave', resume);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      ticker.removeEventListener('mouseenter', pause);
      ticker.removeEventListener('mouseleave', resume);
    };
  }, []);

  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="w-full bg-[#1B3068] overflow-hidden"
      role="marquee"
      aria-label="Latest updates and announcements"
    >
      <div className="flex items-center h-11">
        {/* Label */}
        <div className="flex-shrink-0 bg-[#FF6600] text-white text-xs font-bold px-4 h-full flex items-center gap-2 z-10 whitespace-nowrap">
          <i className="ri-megaphone-line" />
          LATEST UPDATES
        </div>
        {/* Ticker */}
        <div className="flex-1 overflow-hidden relative">
          <div ref={tickerRef} className="flex items-center gap-0 whitespace-nowrap">
            {allItems.map((item, idx) => (
              <span key={idx} className="text-white/90 text-xs px-6 flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] flex-shrink-0 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Date */}
        <div className="flex-shrink-0 border-l border-white/20 px-4 text-white/60 text-xs whitespace-nowrap">
          {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}
