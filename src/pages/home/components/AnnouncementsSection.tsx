import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ANNOUNCEMENTS = [
  {
    date: '15 Mar 2026',
    type: 'Notice',
    typeColor: '#B7201B',
    title: 'Revised Fee Structure for Factory Registration Under Factories Act',
    desc: 'As per Government Resolution No.FAC/2026/01, the fee structure for factory registration has been revised with effect from 1st April 2026.',
  },
  {
    date: '10 Mar 2026',
    type: 'Circular',
    typeColor: '#1B3068',
    title: 'Mandatory Digital Submission of Annual Returns 2025–26',
    desc: 'All registered factories must submit their annual returns exclusively through the online portal. Paper submissions will not be accepted.',
  },
  {
    date: '5 Mar 2026',
    type: 'Tender',
    typeColor: '#138808',
    title: 'e-Tender for Appointment of Consultancy Firm for GIGW Audit',
    desc: 'Industries Commissionerate invites e-tenders from eligible agencies for conducting GIGW compliance audit of the portal.',
  },
  {
    date: '28 Feb 2026',
    type: 'Vacancy',
    typeColor: '#7B3FAD',
    title: 'Recruitment for Inspector of Factories (Class-II) Posts',
    desc: 'Applications are invited from eligible candidates for the posts of Inspector of Factories. Last date: 31st March 2026.',
  },
];

export default function AnnouncementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = -rect.top * 0.25;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 px-4 sm:px-6 overflow-hidden" id="announcements">
      {/* Parallax Navy Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(160deg, #0D1F4E 0%, #1B3068 50%, #0A1A3A 100%)',
          willChange: 'transform',
        }}
      />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-[#FF6600]/20 text-[#FF9933] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <i className="ri-notification-3-line" /> Announcements
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-bold">Notices &amp; Updates</h2>
          </div>
          <Link
            to="/guidelines"
            className="inline-flex items-center gap-2 border border-white/30 text-white/80 hover:bg-white/10 px-5 py-2.5 rounded-full text-sm transition-all whitespace-nowrap"
          >
            View All <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ANNOUNCEMENTS.map((item) => (
            <div
              key={item.title}
              className="bg-white/8 border border-white/10 rounded-2xl p-5 hover:bg-white/12 transition-all duration-300 cursor-pointer group"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center justify-between mb-3 gap-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: `${item.typeColor}25`, color: item.typeColor === '#B7201B' ? '#FF6B6B' : item.typeColor === '#1B3068' ? '#7EB3FF' : item.typeColor === '#138808' ? '#4ADE80' : '#C084FC' }}
                >
                  {item.type}
                </span>
                <span className="text-white/40 text-xs whitespace-nowrap">{item.date}</span>
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#FF9933] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-[#FF9933] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Read More <i className="ri-arrow-right-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
