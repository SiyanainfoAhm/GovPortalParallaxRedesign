import { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

type FormType = 'service' | 'grievance' | 'feedback';

export default function FormsPage() {
  const [activeForm, setActiveForm] = useState<FormType>('service');
  const [serviceStatus, setServiceStatus] = useState('');
  const [grievanceStatus, setGrievanceStatus] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [trackId, setTrackId] = useState('');
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

  const handleServiceSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((v, k) => data.append(k, v as string));
    setServiceStatus('loading');
    try {
      await fetch('https://readdy.ai/api/form/d6sk3vrvrivh3q8km1tg', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      setServiceStatus('success');
      form.reset();
    } catch {
      setServiceStatus('error');
    }
  };

  const handleGrievanceSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((v, k) => data.append(k, v as string));
    setGrievanceStatus('loading');
    try {
      await fetch('https://readdy.ai/api/form/d6sk3vrvrivh3q8km1u0', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      setGrievanceStatus('success');
      form.reset();
    } catch {
      setGrievanceStatus('error');
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
              <i className="ri-file-list-3-line text-base" />
              <span>Forms & Applications</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Digital Forms Centre</h1>
            <p className="text-white/70 mt-2 text-sm">Submit applications and grievances online — 100% paperless</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-1">
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#138808]" />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 bg-[#F8F9FC]">
          <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 border border-gray-100 w-fit">
              {([['service', 'ri-file-add-line', 'Service Application'], ['grievance', 'ri-error-warning-line', 'Grievance / Complaint'], ['feedback', 'ri-survey-line', 'Feedback']] as [FormType, string, string][]).map(([type, icon, label]) => (
                <button
                  key={type}
                  onClick={() => setActiveForm(type)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeForm === type ? 'bg-[#FF6600] text-white' : 'text-gray-500 hover:text-[#FF6600]'
                  }`}
                >
                  <i className={icon} /> {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Form */}
              <div className="lg:col-span-2">
                {/* Service Application Form */}
                {activeForm === 'service' && (
                  <div className="bg-white rounded-2xl border border-gray-100 p-7">
                    <h2 className="text-[#1B3068] font-bold text-lg mb-1">Service Application Form</h2>
                    <p className="text-gray-400 text-xs mb-6">Fill in the details below to apply for any industrial service.</p>
                    {serviceStatus === 'success' ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <i className="ri-check-line text-3xl text-green-600" />
                        </div>
                        <h3 className="text-[#1B3068] font-bold text-lg mb-2">Application Submitted!</h3>
                        <p className="text-gray-500 text-sm mb-4">Your application has been received. You will receive an acknowledgement on your registered email/mobile.</p>
                        <button onClick={() => setServiceStatus('')} className="bg-[#FF6600] text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap">Submit Another</button>
                      </div>
                    ) : (
                      <form data-readdy-form onSubmit={handleServiceSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Full Name *</label>
                            <input name="full_name" type="text" required placeholder="Enter your full name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Mobile Number *</label>
                            <input name="mobile" type="tel" required placeholder="10-digit mobile number" className={inputCls} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Email Address *</label>
                          <input name="email" type="email" required placeholder="Enter email address" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Service Type *</label>
                          <select name="service_type" required className={inputCls}>
                            <option value="">-- Select Service --</option>
                            <option>New Factory Registration</option>
                            <option>Factory License Renewal</option>
                            <option>NOC for New Industry</option>
                            <option>Contract Labour Registration</option>
                            <option>Contractor License</option>
                            <option>Boiler Registration</option>
                            <option>Explosive Storage License</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Industry / Firm Name *</label>
                            <input name="firm_name" type="text" required placeholder="Registered firm name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>District *</label>
                            <select name="district" required className={inputCls}>
                              <option value="">-- Select District --</option>
                              {['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Anand', 'Kutch', 'Mehsana', 'Bharuch', 'Jamnagar'].map((d) => (
                                <option key={d}>{d}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Brief Description of Application</label>
                          <textarea name="description" rows={3} maxLength={500} placeholder="Describe your application in brief (max 500 characters)" className={`${inputCls} resize-none`} />
                        </div>
                        <div className="flex items-start gap-2">
                          <input type="checkbox" required name="declaration" id="decl" className="mt-0.5 cursor-pointer" />
                          <label htmlFor="decl" className="text-xs text-gray-500 cursor-pointer">
                            I hereby declare that the information provided is true and correct to the best of my knowledge.
                          </label>
                        </div>
                        <button type="submit" disabled={serviceStatus === 'loading'} className="w-full bg-[#FF6600] hover:bg-[#e55c00] text-white py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer disabled:opacity-60">
                          {serviceStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
                        </button>
                        {serviceStatus === 'error' && <p className="text-red-500 text-xs text-center">Submission failed. Please try again.</p>}
                      </form>
                    )}
                  </div>
                )}

                {/* Grievance Form */}
                {activeForm === 'grievance' && (
                  <div className="bg-white rounded-2xl border border-gray-100 p-7">
                    <h2 className="text-[#1B3068] font-bold text-lg mb-1">Grievance / Complaint Form</h2>
                    <p className="text-gray-400 text-xs mb-6">File a grievance. We guarantee resolution within 30 working days.</p>
                    {grievanceStatus === 'success' ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <i className="ri-check-line text-3xl text-green-600" />
                        </div>
                        <h3 className="text-[#1B3068] font-bold text-lg mb-2">Grievance Registered!</h3>
                        <p className="text-gray-500 text-sm mb-4">Your grievance has been registered. A reference number has been sent to your email.</p>
                        <button onClick={() => setGrievanceStatus('')} className="bg-[#FF6600] text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap">File Another</button>
                      </div>
                    ) : (
                      <form data-readdy-form onSubmit={handleGrievanceSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Full Name *</label>
                            <input name="full_name" type="text" required placeholder="Enter your full name" className={inputCls} />
                          </div>
                          <div>
                            <label className={labelCls}>Mobile Number *</label>
                            <input name="mobile" type="tel" required placeholder="10-digit mobile number" className={inputCls} />
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Email Address *</label>
                          <input name="email" type="email" required placeholder="Enter email address" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Grievance Category *</label>
                          <select name="grievance_category" required className={inputCls}>
                            <option value="">-- Select Category --</option>
                            <option>Delay in Processing Application</option>
                            <option>Incorrect Fee Charged</option>
                            <option>Harassment by Officer</option>
                            <option>Portal Technical Issue</option>
                            <option>Non-receipt of Certificate</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Reference Application No. (if any)</label>
                          <input name="ref_number" type="text" placeholder="e.g. IC/FAC/2026/00123" className={inputCls} />
                        </div>
                        <div>
                          <label className={labelCls}>Grievance Description *</label>
                          <textarea name="grievance_desc" required rows={4} maxLength={500} placeholder="Describe your grievance in detail (max 500 characters)" className={`${inputCls} resize-none`} />
                        </div>
                        <button type="submit" disabled={grievanceStatus === 'loading'} className="w-full bg-[#B7201B] hover:bg-[#9a1a16] text-white py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer disabled:opacity-60">
                          {grievanceStatus === 'loading' ? 'Submitting...' : 'Submit Grievance'}
                        </button>
                        {grievanceStatus === 'error' && <p className="text-red-500 text-xs text-center">Submission failed. Please try again.</p>}
                      </form>
                    )}
                  </div>
                )}

                {/* Feedback Form */}
                {activeForm === 'feedback' && (
                  <div className="bg-white rounded-2xl border border-gray-100 p-7">
                    <h2 className="text-[#1B3068] font-bold text-lg mb-1">Feedback Form</h2>
                    <p className="text-gray-400 text-xs mb-6">Help us improve our services by sharing your experience.</p>
                    {feedbackStatus === 'success' ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <i className="ri-check-line text-3xl text-green-600" />
                        </div>
                        <h3 className="text-[#1B3068] font-bold text-lg mb-2">Thank you for your feedback!</h3>
                        <p className="text-gray-500 text-sm mb-4">Your valuable feedback helps us improve our services.</p>
                        <button onClick={() => setFeedbackStatus('')} className="bg-[#FF6600] text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap">Submit Again</button>
                      </div>
                    ) : (
                      <form data-readdy-form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setFeedbackStatus('success'); }}>
                        <div>
                          <label className={labelCls}>Rate Our Services *</label>
                          <div className="flex gap-3">
                            {['Excellent', 'Good', 'Average', 'Poor'].map((r) => (
                              <label key={r} className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                                <input type="radio" name="rating" value={r} required className="cursor-pointer" /> {r}
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Service Used</label>
                          <select name="service_used" className={inputCls}>
                            <option value="">-- Select Service --</option>
                            <option>Factory Registration</option>
                            <option>License Renewal</option>
                            <option>NOC Application</option>
                            <option>Grievance Portal</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Your Suggestions</label>
                          <textarea name="suggestions" rows={4} maxLength={500} placeholder="Share your suggestions for improvement (max 500 characters)" className={`${inputCls} resize-none`} />
                        </div>
                        <button type="submit" className="w-full bg-[#1B3068] hover:bg-[#FF6600] text-white py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer">
                          Submit Feedback
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Track Application */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-[#1B3068] font-bold text-sm mb-3 flex items-center gap-2">
                    <i className="ri-map-pin-2-line text-[#FF6600]" /> Track Application
                  </h3>
                  <input value={trackId} onChange={(e) => setTrackId(e.target.value)} type="text" placeholder="Enter Application / Grievance ID" className={`${inputCls} mb-3`} />
                  <button className="w-full bg-[#1B3068] hover:bg-[#FF6600] text-white py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap">
                    Track Now
                  </button>
                </div>

                {/* Download Forms */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-[#1B3068] font-bold text-sm mb-3 flex items-center gap-2">
                    <i className="ri-download-2-line text-[#FF6600]" /> Offline Forms (PDF)
                  </h3>
                  <div className="space-y-2">
                    {['Form A – Factory Registration', 'Form B – License Renewal', 'Form C – NOC Application', 'Form D – Grievance'].map((f) => (
                      <a key={f} href="https://ic.gujarat.gov.in" target="_blank" rel="nofollow noreferrer" className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#FF6600] transition-colors cursor-pointer">
                        <i className="ri-file-pdf-line text-red-500" /> {f}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Help */}
                <div className="bg-[#FF6600]/10 rounded-2xl border border-[#FF6600]/20 p-5">
                  <h3 className="text-[#FF6600] font-bold text-sm mb-2 flex items-center gap-2">
                    <i className="ri-question-answer-line" /> Need Help?
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">Our helpdesk is available Mon–Sat, 10am–6pm</p>
                  <a href="tel:+917923252520" className="flex items-center gap-2 text-[#1B3068] text-xs font-semibold cursor-pointer whitespace-nowrap">
                    <i className="ri-phone-line text-[#FF6600]" /> +91-79-2325 2520
                  </a>
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
