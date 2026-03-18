import { useEffect, useRef } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const OFFICIALS = [
  { name: 'Shri Rajesh Kumar IAS', role: 'Industries Commissioner', dept: 'Head of Department' },
  { name: 'Shri Amit Shah IAS', role: 'Additional Industries Commissioner', dept: 'Administration & Compliance' },
  { name: 'Smt. Priya Mehta IAS', role: 'Joint Industries Commissioner', dept: 'MSME & Schemes' },
  { name: 'Shri Dinesh Patel', role: 'Deputy Industries Commissioner', dept: 'Factories Division' },
];

const TIMELINE = [
  { year: '1949', event: 'Establishment of Industries Department, Govt. of Gujarat' },
  { year: '1973', event: 'Formation of Industries Commissionerate as a separate entity' },
  { year: '2003', event: 'Launch of first online portal for factory registration' },
  { year: '2015', event: 'Integration with NIC Gujarat for end-to-end digital services' },
  { year: '2020', event: 'Achieved 100% paperless processing for key services' },
  { year: '2025', event: 'Ranked #1 State e-Governance Portal by DPIIT, India' },
];

export default function AboutPage() {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">

        {/* Page Hero */}
        <section className="relative w-full h-64 sm:h-80 overflow-hidden flex items-center justify-center">
          <div
            ref={parallaxRef}
            className="absolute inset-0 w-full h-[140%] -top-[20%]"
            style={{
              background: 'linear-gradient(135deg, #0D1F4E 0%, #1B3068 50%, #0A1A3A 100%)',
              willChange: 'transform',
            }}
          />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-2 text-[#FF9933] text-xs font-bold uppercase tracking-wider mb-3">
              <i className="ri-information-line text-base" />
              <span>About Us</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Industries Commissionerate, Gujarat</h1>
            <p className="text-white/70 mt-2 text-sm">Established 1949 | Headquartered in Gandhinagar</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-1">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <div className="bg-[#F8F9FC] rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#FF6600]/10 flex items-center justify-center mb-4">
                  <i className="ri-eye-line text-2xl text-[#FF6600]" />
                </div>
                <h2 className="text-[#1B3068] text-xl font-bold mb-3">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To create a transparent, efficient and business-friendly regulatory environment that propels Gujarat to the forefront of India's industrial landscape, while ensuring worker welfare and environmental sustainability.
                </p>
              </div>
              <div className="bg-[#F8F9FC] rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#1B3068]/10 flex items-center justify-center mb-4">
                  <i className="ri-flag-2-line text-2xl text-[#1B3068]" />
                </div>
                <h2 className="text-[#1B3068] text-xl font-bold mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To administer industrial laws with integrity and efficiency, facilitate ease of doing business, promote industrial growth and employment generation, and deliver citizen-centric services through innovative digital platforms.
                </p>
              </div>
            </div>

            {/* About Text */}
            <div className="max-w-4xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                <i className="ri-history-line" /> Background
              </span>
              <h2 className="text-[#1B3068] text-2xl sm:text-3xl font-bold mb-4">About the Commissionerate</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                The Industries Commissionerate, Government of Gujarat, is the apex body responsible for the administration and enforcement of various industrial statutes in the state of Gujarat. Established in 1949, the Commissionerate has grown to become one of India's most progressive and technology-driven industrial regulatory bodies.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                The Commissionerate administers the Factories Act 1948, Explosives Act 1884, Boilers Act 1923, Contract Labour (Regulation & Abolition) Act 1970, and many other allied industrial legislations. With a dedicated team of over 500 inspectors and officers across all districts of Gujarat, we ensure compliance, safety and welfare for over 50,000 registered industrial units.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
              {[
                { value: '50,000+', label: 'Registered Units', icon: 'ri-building-2-line' },
                { value: '500+', label: 'Officers & Inspectors', icon: 'ri-user-star-line' },
                { value: '33', label: 'District Offices', icon: 'ri-map-pin-2-line' },
                { value: '75+', label: 'Years of Service', icon: 'ri-calendar-check-line' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1B3068] text-white rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2">
                    <i className={`${stat.icon} text-[#FF9933] text-2xl`} />
                  </div>
                  <div className="font-bold text-2xl">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Officials */}
        <section className="bg-[#F8F9FC] py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                <i className="ri-team-line" /> Leadership
              </span>
              <h2 className="text-[#1B3068] text-3xl font-bold">Key Officials</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OFFICIALS.map((official) => (
                <div key={official.name} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1B3068]/10 flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-3-line text-3xl text-[#1B3068]" />
                  </div>
                  <h3 className="text-[#1B3068] font-bold text-sm leading-tight mb-1">{official.name}</h3>
                  <p className="text-[#FF6600] text-xs font-semibold mb-1">{official.role}</p>
                  <p className="text-gray-400 text-xs">{official.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                <i className="ri-time-line" /> Milestones
              </span>
              <h2 className="text-[#1B3068] text-3xl font-bold">Our Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
              <div className="space-y-6">
                {TIMELINE.map((item, idx) => (
                  <div key={item.year} className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <div className={`flex-1 ${idx % 2 === 0 ? 'sm:text-right' : ''}`}>
                      <div className="bg-[#F8F9FC] border border-gray-100 rounded-xl p-4">
                        <span className="text-[#FF6600] font-bold text-lg">{item.year}</span>
                        <p className="text-gray-600 text-sm mt-1">{item.event}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#FF6600] border-4 border-white ring-2 ring-[#FF6600]/30 flex-shrink-0 hidden sm:block" />
                    <div className="flex-1 hidden sm:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
