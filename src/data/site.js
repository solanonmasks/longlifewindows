// =====================================================================
// site.js: ALL the editable business info and text lists for the site.
//
// Change a value here, save, and the page updates. You should not need
// to touch index.astro just to change wording, phone numbers or photos.
// =====================================================================

// ---- Photos ---------------------------------------------------------
// Photos live in src/assets/. To swap one, drop the new file into
// src/assets/ and change the file name on the matching line below.
// Astro turns these into small, fast WebP files automatically.
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpg';
import v145 from '../assets/v145.jpg';
import v085 from '../assets/v085.jpg';
import rr054 from '../assets/rr054.jpg';
import rr036 from '../assets/rr036.jpg';
import rr003 from '../assets/rr003.jpg';
import b224 from '../assets/b224.jpg';
import b218 from '../assets/b218.jpg';
import b236 from '../assets/b236.jpg';
import r335 from '../assets/r335.jpg';
import r053 from '../assets/r053.jpg';
import l102 from '../assets/l102.jpg';
import l072 from '../assets/l072.jpg';
import s339 from '../assets/s339.jpg';

// ---- Business details -----------------------------------------------
export const business = {
  name: 'Long Life Windows & Doors',
  legalName: 'Long Life Property Improvements Ltd.',
  // How the phone number is shown on the page:
  phoneDisplay: '604 439 0982',
  // The same number for tap-to-call links (country code + digits, no spaces):
  phoneTel: '16044390982',
  email: 'hello@longlife.ca',
  address: {
    street: '1645 Boundary Road',
    city: 'Vancouver',
    region: 'BC',
    postalCode: 'V5K 4X7',
    country: 'CA',
  },
  foundingYear: '1989',
  // Areas served (used for search engines, not shown on the page)
  areaServed: ['Vancouver', 'North Vancouver', 'Burnaby', 'Richmond', 'Langley', 'Surrey'],
  socials: {
    instagram: 'https://www.instagram.com/longlifewindows/',
    homestars: 'https://homestars.com/companies/2735837-long-life-property-improvements-ltd',
  },
  copyrightYear: '2026',
};

// ---- Contact form -----------------------------------------------------
// Leave this as "" (empty) and the form opens the visitor's email app
// with everything they typed, addressed to business.email above.
// To receive submissions directly instead: sign up at https://formspree.io,
// create a form, and paste its endpoint here, for example:
//   export const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
export const FORM_ENDPOINT = '';

// ---- Search engine / social preview text ---------------------------------
export const seo = {
  title: 'Long Life Windows & Doors | Replacement windows & exterior doors, Vancouver since 1989',
  description:
    'Family-run and Canadian owned since 1989. Locally made, custom Vinyltek replacement windows and exterior doors, installed by our own team in Vancouver and the Lower Mainland. No subcontracting. Lifetime warranty.',
  themeColor: '#B32D24',
};

export const images = { logo, hero };

// ---- Top bar + header -------------------------------------------------
export const topBarText = 'Proudly Canadian owned and operated since 1989';

export const nav = [
  { label: 'Windows & doors', href: '#products' },
  { label: 'Our story', href: '#story' },
  { label: 'Your neighbourhood', href: '#neighbourhood' },
  { label: 'Contact', href: '#consult' },
];

// ---- Hero ---------------------------------------------------------------
export const heroCopy = {
  titleStart: 'We install windows and instill',
  titleEmphasis: 'peace of mind.',
  text: 'Locally made, custom Vinyltek replacement windows and exterior doors, installed by our own family-run team. No subcontracting. Lifetime warranty.',
  primaryCta: 'Schedule a free consultation',
  imageAlt: 'Living room with new picture windows by Long Life',
};

// ---- Proof strip (4 columns under the hero photo) -------------------------
export const proof = [
  { title: 'Since 1989', text: 'Canadian owned and operated' },
  { title: 'No subcontracting', text: 'Our own installers, every job' },
  { title: 'Lifetime warranty', text: 'On products and workmanship' },
  { title: 'Locally made', text: 'Custom Vinyltek windows and doors' },
];

// ---- Products (Windows / Doors toggle) ------------------------------------
export const products = [
  {
    tab: 'Windows',
    image: r335,
    heading: 'Replacement windows',
    text: 'Available in a variety of configurations and styles, our vinyl replacement windows are custom made to fit your home. Choose optional grids, wood trims, colours and configurations to match your home’s current style, or create a new one.',
    list: [
      'Sliding windows',
      'Crank casement windows',
      'Push-out casement windows',
      'Tilt & turn windows',
      'Pass-through windows',
      'Aluminum windows',
    ],
  },
  {
    tab: 'Doors',
    image: rr003,
    heading: 'Replacement exterior doors',
    text: 'Carefully curated and custom built. Everything we install is weather-tight and designed to open and close with ease for years to come, keeping your family secure and adding street appeal.',
    list: [
      'Front & entry doors',
      'Sliding patio doors',
      'Exterior French doors',
      'Bi-fold doors',
      'Multi-stacking doors',
      'Aluminum doors',
    ],
  },
];
export const productsNote = 'Every product is installed with a lifetime guarantee.';

// ---- Story (dark section) ------------------------------------------------
export const story = {
  titleStart: 'Built by Pat.',
  titleEmphasis: 'Carried forward by our family.',
  lead: 'Long Life started in 1989 with Pat Alexander’s belief that a window company should stay hands-on, do things properly, and be small enough to care. Today that same standard guides Kris, Katie and the Long Life team, from the first consultation to the final clean-up.',
  text: 'From fabricating window trims to making friends with the family pet, our installers have the service attitude that built our business. It’s why word of mouth is still how most people find us.',
};

export const timeline = [
  { year: '1989', text: 'Pat Alexander starts Long Life: hands-on, done properly, small enough to care.' },
  { year: 'Generations', text: 'Homeowners across the Lower Mainland keep recommending us to family and neighbours.' },
  { year: 'Today', text: 'Kris, Katie and the Long Life team carry the same standard forward.' },
];

// ---- Neighbourhood photo grid ----------------------------------------------
// The city buttons are built from this list. "All" is added automatically.
// To add a photo: put it in src/assets/, import it at the top, add a line here.
export const cities = ['Vancouver', 'North Vancouver', 'Burnaby', 'Richmond', 'Langley', 'Surrey'];

export const homes = [
  { image: v145, city: 'Vancouver' },
  { image: v085, city: 'Vancouver' },
  { image: rr054, city: 'North Vancouver' },
  { image: rr036, city: 'North Vancouver' },
  { image: rr003, city: 'North Vancouver' },
  { image: b224, city: 'Burnaby' },
  { image: b218, city: 'Burnaby' },
  { image: b236, city: 'Burnaby' },
  { image: r335, city: 'Richmond' },
  { image: r053, city: 'Richmond' },
  { image: l102, city: 'Langley' },
  { image: l072, city: 'Langley' },
  { image: s339, city: 'Surrey' },
];

// ---- Promises (3 columns on white) ------------------------------------------
export const promises = [
  { title: 'We deliver what we promise', text: 'Decades of experience, skilled workmanship and a hands-on approach on every home.' },
  { title: 'We treat your home as our own', text: 'Thoughtfully designed solutions that meet high standards, installed with care.' },
  { title: 'Peace of mind, for life', text: 'A lifetime guarantee on everything we install, so you never have to wonder.' },
];

// ---- Consultation form --------------------------------------------------------
export const consult = {
  titleStart: 'Interested?',
  titleEmphasis: 'We’ll come to you.',
  chips: ['Windows', 'Doors', 'Both'],
  submitLabel: 'Book my free consultation',
  thankYou: 'Thank you. We’ll call to book your consultation.',
  emailSubject: 'Free consultation request',
};
