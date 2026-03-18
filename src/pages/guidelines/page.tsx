import { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const GUIDELINES = [
  {
    id: 'gigw',
    category: 'GIGW Compliance',
    icon: 'ri-computer-line',
    color: '#1B3068',
    title: 'Guidelines for Indian Government Websites (GIGW 3.0)',
    items: [
      { q: 'What is GIGW 3.0?', a: 'The Guidelines for Indian Government Websites (GIGW) 3.0 is the updated standard issued by the Ministry of Electronics & Information Technology (MeitY) for the development, maintenance and governance of all Indian Government websites and portals.' },
      { q: 'Accessibility Requirements', a: 'All government websites must conform to WCAG 2.1 Level AA accessibility standards. This includes proper colour contrast ratios (minimum 4.5:1), keyboard navigation, alt-text for all images, and screen-reader compatibility.' },
      { q: 'Bilingual Content Mandate', a: 'All central and state government portals must provide content in English and the respective regional language. This portal provides content in English, Gujarati and Hindi as per GIGW norms.' },
    ],
  },
  {
    id: 'rti',
    category: 'RTI Information',
    icon: 'ri-file-info-line',
    color: '#138808',
    title: 'Right to Information Act, 2005',
    items: [
      { q: 'Filing an RTI Application', a: 'Citizens can file RTI applications online through the RTI Online Portal (rtionline.gov.in) or submit physical applications to the Public Information Officer (PIO) of Industries Commissionerate, Gujarat.' },
      { q: 'Public Information Officer (PIO)', a: 'Name: Shri Suresh Patel, IAS (PIO – IC Gujarat). Contact: pio-ic@gujarat.gov.in | +91-79-2325 2525. Response time: 30 days from date of receipt of application.' },
      { q: 'First Appellate Authority', a: 'Name: Additional Industries Commissioner. Applications under Section 19(1) of the RTI Act may be filed within 30 days of receipt of PIO\'s reply or expiry of 30-day period.' },
    ],
  },
  {
    id: 'citizen',
    category: "Citizen's Charter",
    icon: 'ri-award-line',
    color: '#FF6600',
    title: "Citizen's Charter & Service Standards",
    items: [
      { q: 'Our Service Commitments', a: 'IC Gujarat is committed to delivering all services within stipulated timeframes: New Factory Registration – 15 Working Days; License Renewal – 3 Working Days; NOC – 21 Working Days; Grievance Redressal – 30 Working Days.' },
      { q: 'Transparency & Accountability', a: 'All applications are processed on a first-come, first-served basis. Status can be tracked online in real-time. Any delays must be communicated to the applicant with reasons.' },
      { q: 'Feedback & Improvement', a: 'Citizens can rate services on a 5-point scale after each transaction. Feedback is reviewed quarterly by the Commissioner to improve service quality.' },
    ],
  },
  {
    id: 'privacy',
    category: 'Privacy Policy',
    icon: 'ri-lock-line',
    color: '#7B3FAD',
    title: 'Website Privacy Policy',
    items: [
      { q: 'Data Collection & Use', a: 'This portal collects personal information only for processing service applications and grievances. Data is not shared with third parties except as required by law or for inter-departmental coordination.' },
      { q: 'Cookies Policy', a: 'This website uses session cookies to maintain login state and analytical cookies (anonymized) to understand usage patterns. No third-party advertising cookies are used.' },
      { q: 'Data Retention', a: 'Application data is retained for a minimum of 7 years as required under Gujarat Government Records Management Rules. Citizens may request data correction through the PIO mechanism.' },
    ],
  },
  {
    id: 'accessibility',
    category: 'Accessibility Statement',
    icon: 'ri-accessibility-line',
    color: '#0E7C86',
    title: 'Web Accessibility Compliance',
    items: [
      { q: 'WCAG 2.1 AA Conformance', a: 'This portal conforms to WCAG 2.1 Level AA standards. All pages have been tested with screen readers (NVDA, JAWS) and keyboard-only navigation.' },
      { q: 'Assistive Features', a: 'Features include: Text size controls (+A, A, -A), High contrast mode, Keyboard navigable menus with visible focus indicators, Skip-to-content link, and ARIA landmark roles throughout the page.' },
      { q: 'Known Limitations & Feedback', a: 'Some legacy PDF documents may not be fully accessible. We are working to remediate these. To report accessibility issues, please email accessibility@ic.gujarat.gov.in.' },
    ],
  },
  {
    id: 'terms',
    category: 'Terms of Use',
    icon: 'ri-scales-3-line',
    color: '#B7201B',
    title: 'Website Terms of Use',
    items: [
      { q: 'Permitted Use', a: 'This website is for official use by citizens, industries and businesses to access Government of Gujarat\'s industrial services. Unauthorized use, scraping or data extraction is prohibited.' },
      { q: 'Disclaimer', a: 'While every effort is made to ensure accuracy, Industries Commissionerate does not accept liability for any information that may be out of date. For legal purposes, please refer to the official Gazette notifications.' },
      { q: 'Intellectual Property', a: 'Content on this portal is the property of Government of Gujarat. Reproduction for commercial purposes without written permission is prohibited. Non-commercial reproduction with attribution is permitted.' },
    ],
  },
];

export default function GuidelinesPage() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});
  const [activeSection, setActiveSection] = useState('gigw');
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

  const toggleItem = (sectionId: string, idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === idx ? null : idx,
    }));
  };

  const activeGuide = GUIDELINES.find((g) => g.id === activeSection) || GUIDELINES[0];

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
              <i className="ri-book-2-line text-base" />
              <span>Guidelines & Policies</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Policies & Compliance</h1>
            <p className="text-white/70 mt-2 text-sm">GIGW 3.0 | RTI | Citizen's Charter | Privacy | Accessibility | Terms</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-1">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar Navigation */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-2xl border border-gray-100 p-3 sticky top-24">
                  <p className="text-[#1B3068] text-xs font-bold uppercase tracking-wider px-3 py-2 mb-1">Sections</p>
                  {GUIDELINES.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setActiveSection(g.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition-all cursor-pointer whitespace-nowrap mb-0.5 ${
                        activeSection === g.id ? 'bg-[#FF6600] text-white' : 'text-gray-600 hover:bg-orange-50 hover:text-[#FF6600]'
                      }`}
                    >
                      <i className={`${g.icon} text-base flex-shrink-0`} />
                      <span className="truncate">{g.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${activeGuide.color}15` }}>
                      <i className={`${activeGuide.icon} text-xl`} style={{ color: activeGuide.color }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-1" style={{ backgroundColor: `${activeGuide.color}15`, color: activeGuide.color }}>
                        {activeGuide.category}
                      </span>
                      <h2 className="text-[#1B3068] font-bold text-base leading-snug">{activeGuide.title}</h2>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {activeGuide.items.map((item, idx) => {
                      const isOpen = openItems[activeGuide.id] === idx;
                      return (
                        <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleItem(activeGuide.id, idx)}
                            className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-[#F8F9FC] transition-colors"
                          >
                            <span className="text-[#1B3068] font-semibold text-sm pr-4">{item.q}</span>
                            <i className={`flex-shrink-0 text-[#FF6600] text-lg transition-transform ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Downloads */}
                <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-7">
                  <h3 className="text-[#1B3068] font-bold text-base mb-4 flex items-center gap-2">
                    <i className="ri-download-2-line text-[#FF6600]" /> Policy Documents (PDF)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'GIGW 3.0 Guidelines – MeitY',
                      "Citizen's Charter 2025–26",
                      'RTI Manual – IC Gujarat',
                      'Factories Act 1948 (Gujarat)',
                      'Industrial Policy 2020–25',
                      'e-Governance Framework',
                    ].map((doc) => (
                      <a
                        key={doc}
                        href="https://ic.gujarat.gov.in"
                        target="_blank"
                        rel="nofollow noreferrer"
                        className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-[#FF6600]/30 hover:bg-orange-50 transition-all group cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                          <i className="ri-file-pdf-line text-red-500 text-lg" />
                        </div>
                        <span className="text-gray-600 text-xs group-hover:text-[#FF6600] transition-colors">{doc}</span>
                        <i className="ri-download-line text-gray-300 group-hover:text-[#FF6600] ml-auto text-sm" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
