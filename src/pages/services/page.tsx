import { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Registration', 'Renewal', 'NOC & Clearances', 'Labour', 'Boilers', 'Explosives', 'Grievance'];

const SERVICES = [
  { cat: 'Registration', icon: 'ri-file-add-line', title: 'New Factory Registration', desc: 'Register new factories under the Factories Act, 1948. Applicable for manufacturing units employing 10+ workers.', steps: ['Fill online form', 'Upload documents', 'Pay prescribed fee', 'Inspection by officer', 'Certificate issued'], time: '15 Working Days', fee: '₹2,500 – ₹25,000', color: '#1B3068' },
  { cat: 'Renewal', icon: 'ri-refresh-line', title: 'Factory License Renewal', desc: 'Annual renewal of factory license under the Factories Act to maintain valid operational status.', steps: ['Login to portal', 'Initiate renewal', 'Pay renewal fee', 'Auto-certificate', ''], time: '3 Working Days', fee: '₹1,000 – ₹10,000', color: '#138808' },
  { cat: 'NOC & Clearances', icon: 'ri-shield-check-line', title: 'NOC for New Industry', desc: 'Obtain No Objection Certificate for setting up new industrial unit or expansion of existing unit.', steps: ['Submit application', 'Site inspection', 'Technical review', 'NOC issued', ''], time: '21 Working Days', fee: '₹500', color: '#FF6600' },
  { cat: 'Labour', icon: 'ri-group-line', title: 'Contract Labour Registration (Principal Employer)', desc: 'Mandatory registration for organizations employing contract labour exceeding 20 workers.', steps: ['Online application', 'Verification', 'Registration certificate', '', ''], time: '7 Working Days', fee: '₹250', color: '#7B3FAD' },
  { cat: 'Labour', icon: 'ri-briefcase-4-line', title: 'Contractor License (CL Act)', desc: 'Contractors who supply contract labour to establishments must obtain a license under CL(R&A) Act 1970.', steps: ['Apply online', 'Security deposit', 'License issued', '', ''], time: '7 Working Days', fee: '₹25 per worker', color: '#7B3FAD' },
  { cat: 'Boilers', icon: 'ri-steam-line', title: 'Boiler Registration', desc: 'Mandatory registration of new boilers installed in factories or establishments.', steps: ['Submit documents', 'Technical inspection', 'Registration no. allotted', '', ''], time: '10 Working Days', fee: '₹1,000 – ₹5,000', color: '#0E7C86' },
  { cat: 'Explosives', icon: 'ri-fire-line', title: 'Explosive Storage License', desc: 'License for storage of explosives, fireworks and related materials under the Explosives Act, 1884.', steps: ['Apply online', 'Site inspection', 'Safety verification', 'License issued', ''], time: '30 Working Days', fee: '₹5,000', color: '#B7201B' },
  { cat: 'Grievance', icon: 'ri-error-warning-line', title: 'Grievance Redressal', desc: 'File complaints and grievances related to industrial services. Tracked online with 30-day resolution guarantee.', steps: ['File grievance', 'Acknowledgement', 'Officer assigned', 'Resolution in 30 days', ''], time: '30 Days', fee: 'Free', color: '#C07D00' },
  { cat: 'Registration', icon: 'ri-building-line', title: 'Inter-State Migrant Workmen', desc: 'Registration of establishments employing inter-state migrant workmen under ISMW Act, 1979.', steps: ['Submit application', 'Verification of records', 'Registration issued', '', ''], time: '7 Working Days', fee: '₹250', color: '#1B3068' },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = activeCategory === 'All' ? SERVICES : SERVICES.filter((s) => s.cat === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full h-64 sm:h-80 overflow-hidden flex items-center justify-center">
          <div ref={parallaxRef} className="absolute inset-0 w-full h-[140%] -top-[20%]" style={{ background: 'linear-gradient(135deg, #0D1F4E 0%, #1B3068 50%, #0A1A3A 100%)', willChange: 'transform' }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-2 text-[#FF9933] text-xs font-bold uppercase tracking-wider mb-3">
              <i className="ri-service-line text-base" />
              <span>Our Services</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Government Services</h1>
            <p className="text-white/70 mt-2 text-sm">Complete digital delivery of all industrial services</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-1">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-white border-b border-gray-100 sticky top-0 z-30 px-4 sm:px-6 py-3">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#FF6600] text-white'
                      : 'bg-[#F8F9FC] text-gray-600 hover:bg-orange-50 hover:text-[#FF6600]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 px-4 sm:px-6 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((svc, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-[#FF6600]/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${svc.color}15` }}>
                        <i className={`${svc.icon} text-xl`} style={{ color: svc.color }} />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full mt-1" style={{ backgroundColor: `${svc.color}15`, color: svc.color }}>
                        {svc.cat}
                      </span>
                    </div>
                    <h3 className="text-[#1B3068] font-bold text-sm leading-snug mb-2 group-hover:text-[#FF6600] transition-colors">{svc.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{svc.desc}</p>

                    <div className="flex items-center gap-4 text-xs mb-4">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <i className="ri-time-line text-[#FF6600]" />
                        <span>{svc.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <i className="ri-money-rupee-circle-line text-[#138808]" />
                        <span>{svc.fee}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpanded(expanded === idx ? null : idx)}
                      className="text-[#FF6600] text-xs font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      {expanded === idx ? 'Hide Steps' : 'View Process'}
                      <i className={`${expanded === idx ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`} />
                    </button>

                    {expanded === idx && (
                      <div className="mt-3 space-y-2">
                        {svc.steps.filter(Boolean).map((step, si) => (
                          <div key={si} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: `${svc.color}20`, color: svc.color }}>
                              {si + 1}
                            </div>
                            <span className="text-gray-600 text-xs">{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="px-6 pb-4">
                    <Link
                      to="/forms"
                      className="w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                      style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
                    >
                      <i className="ri-external-link-line" /> Apply Online
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
