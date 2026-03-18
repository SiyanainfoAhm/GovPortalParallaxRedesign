import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import NewsTicker from './components/NewsTicker';
import QuickLinks from './components/QuickLinks';
import ServicesPreview from './components/ServicesPreview';
import AnnouncementsSection from './components/AnnouncementsSection';
import { Link } from 'react-router-dom';

const SCHEMES = [
  {
    icon: 'ri-rocket-line',
    title: 'Vibrant Gujarat Global Summit',
    tag: 'Investment',
    desc: 'Flagship biennial investment summit attracting global investors and industry leaders to Gujarat.',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Startup Gujarat Scheme',
    tag: 'Startup',
    desc: 'Financial assistance and mentorship support to startups under the Gujarat Startup Policy 2022–27.',
  },
  {
    icon: 'ri-recycle-line',
    title: 'MSE-CDP Cluster Development',
    tag: 'MSME',
    desc: 'Government assistance for development of Micro & Small Enterprise clusters through a bottom-up approach.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <NewsTicker />
        <QuickLinks />
        <ServicesPreview />
        <AnnouncementsSection />

        {/* Schemes Section */}
        <section className="bg-[#F8F9FC] py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                <i className="ri-government-line" /> Key Schemes
              </span>
              <h2 className="text-[#1B3068] text-3xl sm:text-4xl font-bold">Industrial Schemes & Incentives</h2>
              <p className="text-gray-500 text-base mt-2 max-w-xl mx-auto">
                Discover schemes designed to accelerate industrial growth, investment and employment in Gujarat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SCHEMES.map((scheme) => (
                <div key={scheme.title} className="bg-white rounded-2xl p-6 border border-gray-100 group hover:border-[#FF6600]/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6600]/10 flex items-center justify-center mb-4">
                    <i className={`${scheme.icon} text-2xl text-[#FF6600]`} />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#1B3068]/10 text-[#1B3068] mb-3 inline-block">
                    {scheme.tag}
                  </span>
                  <h3 className="text-[#1B3068] font-bold text-base mb-2 group-hover:text-[#FF6600] transition-colors">
                    {scheme.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{scheme.desc}</p>
                  <div className="mt-4">
                    <Link to="/services" className="text-[#FF6600] text-sm font-semibold flex items-center gap-1 whitespace-nowrap group-hover:gap-2 transition-all">
                      Learn More <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#FF6600] to-[#FF9933] py-14 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              Ready to Start Your Industrial Journey in Gujarat?
            </h2>
            <p className="text-white/85 text-base mb-7 max-w-xl mx-auto">
              Apply for licenses, register your unit, and access all government services through a single digital window.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="bg-white text-[#FF6600] hover:bg-[#1B3068] hover:text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-lg"
              >
                Explore All Services
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF6600] px-8 py-3.5 rounded-full font-bold text-sm transition-all whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
