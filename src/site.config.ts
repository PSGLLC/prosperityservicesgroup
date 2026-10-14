export const SITE_URL = 'https://prosperityservicesgroup.com';
export const BOOKING_URL = 'https://host.safemsngr.com/widget/booking/A0NTF4B4d9I3h3wNvyIB';
export const TAGLINE = 'Where You Matter';

export const NAV_LINKS = [
  { href: '/', label: 'Prosperity Services Group' },
  { href: '/annuities', label: 'Annuities' },
  { href: '/safe-money', label: 'Safe Money' },
  { href: '/income', label: 'Income Planning' },
  { href: '/guide', label: 'Free Guide' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// Primary top-level nav (4c): Home, About, Services (dropdown), Contact.
// The legacy NAV_LINKS above is kept for BaseLayout breadcrumb labels and any
// existing internal links; SERVICES_MENU below drives the new dropdown so
// existing pages (Safe Money, Guide, FAQ, Blog) aren't dropped from the site.
export const PRIMARY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export const SERVICES_MENU = [
  { href: '/annuities', label: 'Annuities' },
  { href: '/life-insurance', label: 'Life Insurance' },
  { href: '/long-term-care', label: 'Long-Term Care' },
  { href: '/retirement-income', label: 'Retirement Income' },
  { href: '/safe-money', label: 'Safe Money Strategies' },
  { href: '/income', label: 'Lifetime Income Planning' },
  { href: '/guide', label: 'Free Annuity Guide' },
];

export const SECONDARY_NAV = [
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const COMPLIANCE = {
  npn: 'NPN 18530055',
  agencyNpn: 'Agency NPN 20387435',
  states: ['NC', 'SC', 'GA', 'FL', 'VA', 'MD', 'MI', 'KS', 'TX', 'OH'],
  annuityDisclaimer:
    'Fixed indexed annuities are insurance products, not investments. They are not FDIC insured and involve fees, surrender charges, and terms that vary by carrier and state. Consult with a licensed insurance agent to determine if an annuity is suitable for your specific situation.',
  footerDisclaimer:
    'Prosperity Services Group is not affiliated with or endorsed by Medicare or any government agency. Fixed indexed annuities are insurance products. Consult with a licensed agent to determine if an annuity is right for your situation.',
};

export const CONTACT = {
  phone: '(866) 648-1578',
  phoneHref: 'tel:+18666481578',
  phoneLocal: '(910) 631-5392',
  phoneLocalHref: 'tel:+19106315392',
  email: 'hello@priceservicesgroup.com',
  address: {
    line1: '1108 New Pointe Blvd Ste 130 PMB 1073',
    city: 'Leland',
    state: 'NC',
    zip: '28451',
  },
};
