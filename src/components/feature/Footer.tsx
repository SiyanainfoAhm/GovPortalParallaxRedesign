import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Forms', path: '/forms' },
  { label: 'Guidelines', path: '/guidelines' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  'New Registration',
  'Renewal of License',
  'NOC Application',
  'Explosive License',
  'Factories Act Compliance',
  'Grievance Redressal',
];

const policies = [
  'Website Policy',
  'Privacy Policy',
  'Terms of Use',
  'Accessibility Statement',
  'RTI Information',
  'Citizen Charter',
];

const socialLinks = [
  { icon: 'ri-facebook-fill', label: 'Facebook', href: 'https://facebook.com' },
  { icon: 'ri-twitter-x-fill', label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: 'ri-youtube-fill', label: 'YouTube', href: 'https://youtube.com' },
  { icon: 'ri-instagram-fill', label: 'Instagram', href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2347] text-white">
      {/* Tricolor bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h4 className="text-[#FF6600] font-bold text-base mb-4 border-b border-white/10 pb-2">
              <a href="#about">About IC Gujarat</a>
            </h4>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              The Industries Commissionerate, Gujarat administers industrial laws and facilitates ease of doing business for industries across the state.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-[#FF6600] hover:border-[#FF6600] hover:text-white transition-all cursor-pointer"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FF6600] font-bold text-base mb-4 border-b border-white/10 pb-2">
              <a href="#quick-links">Quick Links</a>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#FF6600] text-sm flex items-center gap-2 transition-colors group whitespace-nowrap"
                  >
                    <i className="ri-arrow-right-s-line text-[#FF6600] text-xs transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FF6600] font-bold text-base mb-4 border-b border-white/10 pb-2">
              <a href="#services-list">Our Services</a>
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-[#FF6600] text-sm flex items-center gap-2 transition-colors group whitespace-nowrap"
                  >
                    <i className="ri-arrow-right-s-line text-[#FF6600] text-xs transition-transform group-hover:translate-x-1" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Policies */}
          <div>
            <h4 className="text-[#FF6600] font-bold text-base mb-4 border-b border-white/10 pb-2">
              <a href="#contact-info">Contact & Policies</a>
            </h4>
            <address className="not-italic text-sm text-white/70 leading-relaxed mb-4">
              <div className="flex gap-2 mb-2">
                <i className="ri-map-pin-line text-[#FF6600] mt-0.5 flex-shrink-0" />
                <span>Block No. 16, Udyog Bhavan, Sector-11, Gandhinagar – 382 011</span>
              </div>
              <div className="flex gap-2 mb-2">
                <i className="ri-phone-line text-[#FF6600] flex-shrink-0" />
                <span>+91-79-2325 2520</span>
              </div>
              <div className="flex gap-2">
                <i className="ri-mail-line text-[#FF6600] flex-shrink-0" />
                <span>ic-gujarat@gujarat.gov.in</span>
              </div>
            </address>
            <ul className="space-y-1">
              {policies.map((p) => (
                <li key={p}>
                  <Link
                    to="/guidelines"
                    className="text-white/60 hover:text-[#FF6600] text-xs flex items-center gap-1 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-external-link-line text-[10px]" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Industries Commissionerate, Government of Gujarat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Last Updated: March 2026</span>
            <span className="opacity-40">|</span>
            <span>Designed &amp; Developed by NIC Gujarat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
