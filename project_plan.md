# Industries Commissionerate Gujarat – Web Portal Redesign

## 1. Project Description
A modern, GIGW-compliant redesign of the Industries Commissionerate Gujarat (ic.gujarat.gov.in) portal. The redesigned portal serves citizens, industries, and investors seeking services, information, and forms from the Industries Commissionerate, Government of Gujarat. Core values: accessible, bilingual, responsive, parallax-enriched, and government-standards compliant.

## 2. Page Structure
- `/` – Home (Hero + Quick Links + News Ticker + Stats + Schemes + Announcements)
- `/about` – About (Vision, Mission, Org Structure, Key Officials)
- `/services` – Services (All services categorized with details)
- `/forms` – Forms (Form builder – Service Application, Grievance, etc.)
- `/guidelines` – Guidelines (GIGW, Policies, RTI, Citizen Charter, Accessibility)
- `/contact` – Contact (Contact form, addresses, helpline, map)

## 3. Core Features
- [x] Parallax scrolling hero & section backgrounds
- [x] Sticky government navbar with utility bar (font size, language switcher)
- [x] Mobile-responsive layout (hamburger menu, touch-optimized)
- [x] GIGW compliance: skip-to-content, ARIA labels, keyboard navigation
- [x] News & announcements ticker
- [x] Quick links / citizen services grid
- [x] Form builder pages (Service Application, Grievance, Contact)
- [x] Guidelines accordion
- [x] Footer with sitemap, social links, copyright

## 4. Data Model Design
No backend database required. Static content with form submissions via Readdy form endpoints.

## 5. Backend / Third-party Integration Plan
- Supabase: Not required
- Shopify: Not required
- Stripe: Not required
- Forms: Readdy Form API (Contact Us, Service Application, Grievance)

## 6. Development Phase Plan

### Phase 1: Core Portal Structure
- Goal: Navbar, Footer, Router setup + all 6 page shells
- Deliverable: Navigable multi-page portal with full content

### Phase 2: Polish & Enhancements
- Goal: Animations, parallax tuning, accessibility audit, responsive fixes
- Deliverable: Production-ready portal
