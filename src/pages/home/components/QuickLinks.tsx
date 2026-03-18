import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { icon: 'ri-file-add-line', label: 'New Registration', desc: 'Register your factory/industry', path: '/forms', color: '#FF6600' },
  { icon: 'ri-refresh-line', label: 'License Renewal', desc: 'Renew existing licenses', path: '/forms', color: '#1B3068' },
  { icon: 'ri-shield-check-line', label: 'NOC Application', desc: 'Apply for No Objection Certificate', path: '/forms', color: '#138808' },
  { icon: 'ri-error-warning-line', label: 'Grievance', desc: 'File and track grievances', path: '/forms', color: '#B7201B' },
  { icon: 'ri-award-line', label: 'Certificates', desc: 'Download your certificates', path: '/services', color: '#7B3FAD' },
  { icon: 'ri-bank-card-line', label: 'Fee Payment', desc: 'Pay fees online securely', path: '/services', color: '#0E7C86' },
  { icon: 'ri-map-pin-2-line', label: 'Track Status', desc: 'Track your application', path: '/services', color: '#C07D00' },
  { icon: 'ri-question-answer-line', label: 'Help Desk', desc: 'Get assistance & support', path: '/contact', color: '#1B5E20' },
];

export default function QuickLinks() {
  return (
    <section className="w-full bg-[#F8F9FC] py-16 px-4 sm:px-6" id="quick-links">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <i className="ri-links-line" /> Quick Access
          </span>
          <h2 className="text-[#1B3068] text-3xl sm:text-4xl font-bold">Citizen Services</h2>
          <p className="text-gray-500 text-base mt-2 max-w-xl mx-auto">
            Access the most frequently used government services quickly and efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#FF6600]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}18` }}
              >
                <i
                  className={`${item.icon} text-xl`}
                  style={{ color: item.color }}
                />
              </div>
              <div>
                <div className="text-[#1B3068] font-semibold text-sm leading-tight group-hover:text-[#FF6600] transition-colors">
                  {item.label}
                </div>
                <div className="text-gray-400 text-xs mt-0.5 leading-snug">{item.desc}</div>
              </div>
              <div className="mt-auto flex items-center gap-1 text-[#FF6600] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Access <i className="ri-arrow-right-line" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
