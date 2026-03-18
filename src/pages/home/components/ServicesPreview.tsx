import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: 'ri-building-4-line',
    category: 'Registration',
    title: 'Factory & Establishment Registration',
    desc: 'Complete digital registration of factories, workshops and establishments under the Factories Act and allied legislation.',
    color: '#1B3068',
  },
  {
    icon: 'ri-shield-star-line',
    category: 'NOC',
    title: 'No Objection Certificate (NOC)',
    desc: 'Obtain NOC for setting up new industries, expansions and environmental clearances in a fully paperless process.',
    color: '#FF6600',
  },
  {
    icon: 'ri-fire-line',
    category: 'Explosives',
    title: 'Explosive License & Storage',
    desc: 'Apply for licenses related to storage, transportation and usage of explosive materials under the Explosive Act.',
    color: '#B7201B',
  },
  {
    icon: 'ri-refresh-line',
    category: 'Renewal',
    title: 'License & Certificate Renewal',
    desc: 'Renew all expiring licenses and certifications seamlessly through the online portal with auto-reminders.',
    color: '#138808',
  },
  {
    icon: 'ri-group-line',
    category: 'Labour',
    title: 'Contract Labour Regulation',
    desc: 'Manage contractor registrations and principal employer licenses under the Contract Labour (R&A) Act, 1970.',
    color: '#7B3FAD',
  },
  {
    icon: 'ri-steam-line',
    category: 'Boilers',
    title: 'Boiler Registration & Inspection',
    desc: 'Register new boilers and schedule inspections for certificate renewals under the Boilers Act.',
    color: '#0E7C86',
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = -rect.top * 0.3;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 px-4 sm:px-6 overflow-hidden bg-white" id="services-list">
      {/* Parallax tinted background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, #FFF3E8 0%, transparent 60%), radial-gradient(ellipse at bottom left, #EEF2FF 0%, transparent 60%)',
          willChange: 'transform',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <i className="ri-service-line" /> Our Services
          </span>
          <h2 className="text-[#1B3068] text-3xl sm:text-4xl font-bold">What We Offer</h2>
          <p className="text-gray-500 text-base mt-2 max-w-xl mx-auto">
            Comprehensive industrial services delivered digitally to businesses and citizens across Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <Link
              key={svc.title}
              to="/services"
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#FF6600]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${svc.color}15` }}
                >
                  <i className={`${svc.icon} text-2xl`} style={{ color: svc.color }} />
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full mt-1"
                  style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
                >
                  {svc.category}
                </span>
              </div>
              <h3 className="text-[#1B3068] font-bold text-base mb-2 leading-snug group-hover:text-[#FF6600] transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{svc.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-[#FF6600] text-sm font-semibold whitespace-nowrap">
                Learn More <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#1B3068] hover:bg-[#FF6600] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap"
          >
            View All Services <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
