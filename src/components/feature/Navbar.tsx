import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Forms', path: '/forms' },
  { label: 'Guidelines', path: '/guidelines' },
  { label: 'Contact', path: '/contact' },
];

const LANGUAGES = ['English', 'ગુજરાતી', 'हिंदी'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [activeLang, setActiveLang] = useState('English');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const increaseFont = () => setFontSize(f => Math.min(f + 2, 22));
  const decreaseFont = () => setFontSize(f => Math.max(f - 2, 12));
  const resetFont = () => setFontSize(16);

  return (
    <>
      {/* Skip to content – accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-[#FF6600] focus:text-white focus:px-4 focus:py-2 focus:rounded whitespace-nowrap"
      >
        Skip to Main Content
      </a>

      {/* Top Utility Bar */}
      <div className="w-full bg-[#1A3A6C] text-white text-xs py-1.5 px-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <span className="opacity-80">Government of Gujarat</span>
          <span className="opacity-40">|</span>
          <a
            href="https://india.gov.in"
            target="_blank"
            rel="nofollow noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            National Portal of India
          </a>
        </div>
        <div className="flex items-center gap-3">
          {/* Font Size Controls */}
          <span className="opacity-60 hidden sm:inline">Text Size:</span>
          <button
            onClick={decreaseFont}
            aria-label="Decrease text size"
            className="w-6 h-6 flex items-center justify-center border border-white/30 rounded hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
          >
            A-
          </button>
          <button
            onClick={resetFont}
            aria-label="Reset text size"
            className="w-6 h-6 flex items-center justify-center border border-white/30 rounded hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
          >
            A
          </button>
          <button
            onClick={increaseFont}
            aria-label="Increase text size"
            className="w-6 h-6 flex items-center justify-center border border-white/30 rounded hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap text-base font-bold"
          >
            A+
          </button>
          <span className="opacity-40 mx-1">|</span>
          {/* Language Switcher */}
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer whitespace-nowrap ${
                activeLang === lang
                  ? 'bg-[#FF6600] text-white'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'fixed top-0 left-0 bg-white shadow-md'
            : 'relative bg-[#1B3068]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Industries Commissionerate Gujarat Home">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center border-2 flex-shrink-0 ${
                scrolled ? 'border-[#1B3068]' : 'border-white/50'
              }`}
            >
              <img
                src="https://ic.gujarat.gov.in/assets/img/logo.png"
                alt="Gujarat State Emblem"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span
                className={`text-2xl font-bold leading-none hidden ${scrolled ? 'text-[#1B3068]' : 'text-white'}`}
                role="img"
                aria-label="State Emblem"
              >
                ☸
              </span>
            </div>
            <div>
              <div className={`font-bold text-base leading-tight ${scrolled ? 'text-[#1B3068]' : 'text-white'}`}>
                Industries Commissionerate
              </div>
              <div className={`text-xs leading-tight ${scrolled ? 'text-[#FF6600]' : 'text-[#FFD580]'}`}>
                Government of Gujarat
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap relative group ${
                    active
                      ? scrolled
                        ? 'text-[#FF6600] bg-orange-50'
                        : 'text-[#FF6600] bg-white/10'
                      : scrolled
                      ? 'text-[#1B3068] hover:text-[#FF6600] hover:bg-orange-50'
                      : 'text-white hover:text-[#FF6600] hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF6600] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
                scrolled
                  ? 'border-[#1B3068] text-[#1B3068] hover:bg-[#1B3068] hover:text-white'
                  : 'border-white/50 text-white hover:bg-white/20'
              }`}
            >
              <i className="ri-search-line text-base" />
            </button>
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
                scrolled
                  ? 'border-[#1B3068] text-[#1B3068] hover:bg-[#1B3068] hover:text-white'
                  : 'border-white/50 text-white hover:bg-white/20'
              }`}
            >
              <i className={`text-base ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-96' : 'max-h-0'
          } ${scrolled ? 'bg-white border-t border-gray-100' : 'bg-[#1B3068] border-t border-white/10'}`}
        >
          <nav className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    active
                      ? 'bg-[#FF6600] text-white'
                      : scrolled
                      ? 'text-[#1B3068] hover:bg-orange-50'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
