import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.45}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{
          background:
            'linear-gradient(135deg, #0D1F4E 0%, #1B3068 40%, #0F2A58 70%, #0A1A3A 100%)',
          willChange: 'transform',
        }}
      >
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #FF6600 1px, transparent 1px),
              radial-gradient(circle at 80% 30%, #FF9933 1px, transparent 1px),
              radial-gradient(circle at 50% 80%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px, 120px 120px, 60px 60px',
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Tricolor strip at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1.5 z-10">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FF6600]/20 border border-[#FF6600]/40 text-[#FF9933] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          <i className="ri-government-line" />
          Government of Gujarat – Official Portal
        </div>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Empowering Gujarat's
          <span className="block text-[#FF9933]">Industrial Growth</span>
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Industries Commissionerate administers industrial laws, facilitates ease of doing business, and delivers citizen-centric services across Gujarat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/services"
            className="bg-[#FF6600] hover:bg-[#e55c00] text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-service-line" />
            Apply for Services
          </a>
          <a
            href="/forms"
            className="bg-white/10 hover:bg-white/20 border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-file-list-3-line" />
            Download Forms
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '50,000+', label: 'Registered Units', icon: 'ri-building-2-line' },
            { value: '120+', label: 'Services Online', icon: 'ri-links-line' },
            { value: '24/7', label: 'Support Available', icon: 'ri-customer-service-2-line' },
            { value: '100%', label: 'Digital Delivery', icon: 'ri-shield-check-line' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-4 px-3"
            >
              <div className="w-8 h-8 flex items-center justify-center mx-auto mb-1.5">
                <i className={`${stat.icon} text-[#FF9933] text-xl`} />
              </div>
              <div className="text-white font-bold text-xl">{stat.value}</div>
              <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
