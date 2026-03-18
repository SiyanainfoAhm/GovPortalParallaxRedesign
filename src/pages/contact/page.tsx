import { useRef, useEffect, useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const OFFICES = [
  { city: 'Gandhinagar (HQ)', address: 'Block No. 16, Udyog Bhavan, Sector-11, Gandhinagar – 382 011', phone: '+91-79-2325 2520', email: 'ic-gujarat@gujarat.gov.in', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14669.22774394847!2d72.6343!3d23.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b1e84a1e3af%3A0x3d2f8b982f8bc4b0!2sUdyog%20Bhavan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1710000000000' },
  { city: 'Ahmedabad Regional Office', address: 'Karnavati Tower, Prahladnagar, Ahmedabad – 380 051', phone: '+91-79-4032 1400', email: 'ic-ahm@gujarat.gov.in', mapUrl: '' },
  { city: 'Surat Regional Office', address: 'Industries Bhavan, Athwalines, Surat – 395 001', phone: '+91-261-2469 500', email: 'ic-surat@gujarat.gov.in', mapUrl: '' },
];

const HELPLINES = [
  { label: 'General Enquiry', number: '1800-233-1000', icon: 'ri-phone-line', note: 'Toll-free | Mon–Sat 10am–6pm' },
  { label: 'Grievance Hotline', number: '1800-233-1001', icon: 'ri-customer-service-2-line', note: 'Toll-free | Mon–Fri 9am–5pm' },
  { label: 'Technical Support', number: '+91-79-2325 2522', icon: 'ri-computer-line', note: 'Portal issues | Mon–Fri 10am–5pm' },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((v, k) => data.append(k, v as string));
    setFormStatus('loading');
    try {
      await fetch('https://readdy.ai/api/form/d6sk3vrvrivh3q8km1t0', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      setFormStatus('success');
      form.reset();
    } catch {
      setFormStatus('error');
    }
  };

  const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all';
  const labelCls = 'block text-xs font-semibold text-[#1B3068] mb-1.5';

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
              <i className="ri-contacts-line text-base" />
              <span>Contact Us</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Get in Touch</h1>
            <p className="text-white/70 mt-2 text-sm">Reach us via phone, email or visit our offices</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-1">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
        </section>

        {/* Helplines */}
        <section className="bg-[#1B3068] py-8 px-4 sm:px-6" id="contact-info">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HELPLINES.map((h) => (
                <div key={h.label} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-white flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6600]/20 flex items-center justify-center flex-shrink-0">
                    <i className={`${h.icon} text-[#FF9933] text-xl`} />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-0.5">{h.label}</div>
                    <div className="text-white font-bold text-base">{h.number}</div>
                    <div className="text-white/40 text-xs">{h.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Offices */}
        <section className="py-12 px-4 sm:px-6 bg-[#F8F9FC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF6600] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                      <i className="ri-mail-send-line" /> Write to Us
                    </span>
                    <h2 className="text-[#1B3068] font-bold text-xl">Send us a Message</h2>
                    <p className="text-gray-400 text-xs mt-1">We respond within 2 working days</p>
                  </div>

                  {formStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <i className="ri-check-line text-3xl text-green-600" />
                      </div>
                      <h3 className="text-[#1B3068] font-bold text-lg mb-2">Message Sent!</h3>
                      <p className="text-gray-500 text-sm mb-4">Thank you for contacting us. Our team will respond within 2 working days.</p>
                      <button onClick={() => setFormStatus('')} className="bg-[#FF6600] text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap">Send Another</button>
                    </div>
                  ) : (
                    <form data-readdy-form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Full Name *</label>
                          <input name="full_name" type="text" required placeholder="Enter your full name" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Mobile Number *</label>
                          <input name="mobile" type="tel" required placeholder="10-digit mobile" className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input name="email" type="email" required placeholder="Enter email address" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Subject *</label>
                        <select name="subject" required className={inputCls}>
                          <option value="">-- Select Subject --</option>
                          <option>General Enquiry</option>
                          <option>Service Related Query</option>
                          <option>Technical Issue on Portal</option>
                          <option>Feedback & Suggestions</option>
                          <option>Media / Press Query</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Message *</label>
                        <textarea name="message" required rows={4} maxLength={500} placeholder="Your message here (max 500 characters)" className={`${inputCls} resize-none`} />
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" required name="consent" id="consent" className="mt-0.5 cursor-pointer" />
                        <label htmlFor="consent" className="text-xs text-gray-500 cursor-pointer">
                          I consent to Industries Commissionerate Gujarat storing my contact details for responding to this query.
                        </label>
                      </div>
                      <button type="submit" disabled={formStatus === 'loading'} className="w-full bg-[#FF6600] hover:bg-[#e55c00] text-white py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer disabled:opacity-60">
                        {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                      </button>
                      {formStatus === 'error' && <p className="text-red-500 text-xs text-center">Failed to send. Please try again.</p>}
                    </form>
                  )}
                </div>
              </div>

              {/* Offices */}
              <div className="lg:col-span-2 space-y-4">
                {OFFICES.map((office) => (
                  <div key={office.city} className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="text-[#1B3068] font-bold text-sm mb-3 flex items-center gap-2">
                      <i className="ri-map-pin-2-line text-[#FF6600]" /> {office.city}
                    </h3>
                    <address className="not-italic space-y-2 text-xs text-gray-500">
                      <div className="flex gap-2">
                        <i className="ri-home-4-line text-[#FF6600] mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <i className="ri-phone-line text-[#FF6600] flex-shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-[#FF6600] transition-colors">{office.phone}</a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <i className="ri-mail-line text-[#FF6600] flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-[#FF6600] transition-colors">{office.email}</a>
                      </div>
                    </address>
                    {office.mapUrl && (
                      <div className="mt-3 rounded-xl overflow-hidden border border-gray-100">
                        <iframe
                          src={office.mapUrl}
                          width="100%"
                          height="160"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map – ${office.city}`}
                          aria-label={`Google Map showing location of ${office.city} office`}
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Office Hours */}
                <div className="bg-[#1B3068] rounded-2xl p-5 text-white">
                  <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <i className="ri-time-line text-[#FF9933]" /> Office Hours
                  </h3>
                  <div className="space-y-2 text-xs text-white/70">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="text-white font-semibold">10:30 AM – 6:10 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white font-semibold">10:30 AM – 1:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday & Holidays</span>
                      <span className="text-white/40">Closed</span>
                    </div>
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
