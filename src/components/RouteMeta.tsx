import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMeta {
  title: string;
  description: string;
}

const SITE_URL = 'https://www.stesi.in';

const DEFAULT_META: PageMeta = {
  title:
    'STESI 2027 | 2nd International Conference on Smart Technologies for Energy, Sustainability & Industry',
  description:
    'STESI 2027 — 2nd International Conference on Smart Technologies for Energy, Sustainability & Industry (August 5–6, 2027) at Manipal University Jaipur. Theme: Green Hydrogen and Intelligent Energy Systems: Powering Sustainable Energy and Future Mobility.',
};

const ROUTE_META: Record<string, PageMeta> = {
  '/': DEFAULT_META,
  '/about': {
    title: 'About STESI 2027 | Theme, Scope & Conference Overview',
    description:
      'Learn about STESI 2027 (August 5–6, 2027) organized by the Department of Electrical Engineering, Manipal University Jaipur, focusing on Green Hydrogen and Intelligent Energy Systems.',
  },
  '/call-for-papers': {
    title: 'Call for Papers | STESI 2027 — Submission Guidelines & 7 Tracks',
    description:
      'Submit papers to STESI 2027 by March 15, 2027. Explore 7 research tracks covering green hydrogen, power electronics, renewable energy, smart grids, EV/V2G, AI & IoT, and power system stability.',
  },
  '/special-sessions': {
    title: 'Special Sessions | STESI 2027 — Manipal University Jaipur',
    description:
      'Explore special sessions and proposal guidelines for STESI 2027 at Manipal University Jaipur (August 5–6, 2027).',
  },
  '/camera-ready': {
    title: 'Camera-Ready Submission Guidelines | STESI 2027',
    description:
      'Camera-ready paper preparation, IEEE PDF eXpress instructions, and final submission guidelines for accepted STESI 2027 papers (deadline April 30, 2027).',
  },
  '/templates': {
    title: 'Paper & Presentation Templates | STESI 2027',
    description:
      'Download official IEEE LaTeX, Word, poster, and PPT templates for STESI 2027 submissions and presentations.',
  },
  '/committee': {
    title: 'Organizing & Technical Committees | STESI 2027',
    description:
      'Meet the patrons, general chairs, organizing committee, advisory board, and technical program committee of STESI 2027 at Manipal University Jaipur.',
  },
  '/committee/patrons-general-chairs': {
    title: 'Patrons & General Chairs | STESI 2027 Committee',
    description:
      'Patrons and General Chairs leading STESI 2027 at Manipal University Jaipur.',
  },
  '/committee/organizing-committee': {
    title: 'Organizing Committee | STESI 2027',
    description:
      'Organizing Committee members of the 2nd International Conference STESI 2027 at Manipal University Jaipur.',
  },
  '/committee/advisory-committees': {
    title: 'Advisory Committees | STESI 2027',
    description:
      'National and international advisory committee members guiding STESI 2027.',
  },
  '/committee/conference-oversight-committee': {
    title: 'Conference Oversight Committee | STESI 2027',
    description:
      'IEEE Conference Oversight Committee for STESI 2027 at Manipal University Jaipur.',
  },
  '/committee/technical-program-committee': {
    title: 'Technical Program Committee | STESI 2027',
    description:
      'Technical Program Committee reviewing research submissions for STESI 2027.',
  },
  '/committee/publication-plenary-chairs': {
    title: 'Publication & Plenary Chairs | STESI 2027',
    description:
      'Publication and Plenary Session Chairs for STESI 2027 proceedings and keynotes.',
  },
  '/committee/supporting-committees': {
    title: 'Supporting Committees | STESI 2027',
    description:
      'Supporting committees managing hospitality, publicity, finance, and logistics for STESI 2027.',
  },
  '/committee/women-in-engineering': {
    title: 'Women in Engineering (WIE) | STESI 2027',
    description:
      'Women in Engineering (WIE) committee and initiatives at STESI 2027.',
  },
  '/committee/track-chairs': {
    title: 'Track Chairs | STESI 2027',
    description:
      'Track Chairs overseeing the 7 technical research tracks of STESI 2027.',
  },
  '/registration': {
    title: 'Registration Fees & Details | STESI 2027',
    description:
      'Register for STESI 2027 before July 5, 2027. View author, student, academic, and industry registration categories and fee details.',
  },
  '/speakers': {
    title: 'Keynote & Plenary Speakers | STESI 2027',
    description:
      'Distinguished keynote and plenary speakers sharing insights on green hydrogen, intelligent energy systems, and sustainable industry at STESI 2027.',
  },
  '/accepted-papers': {
    title: 'Accepted Papers | STESI 2027',
    description:
      'List of accepted and registered research papers for STESI 2027.',
  },
  '/venue': {
    title: 'Conference Venue & Travel | Manipal University Jaipur — STESI 2027',
    description:
      'Venue information, campus address, travel directions, and local attractions in Jaipur for STESI 2027 at Manipal University Jaipur.',
  },
  '/contact': {
    title: 'Contact Us | STESI 2027 — Manipal University Jaipur',
    description:
      'Contact the STESI 2027 organizing team at Manipal University Jaipur (stesi@jaipur.manipal.edu) for paper submissions, registration, or venue inquiries.',
  },
  '/sponsorship': {
    title: 'Sponsorship & Exhibition Opportunities | STESI 2027',
    description:
      'Partner with STESI 2027 at Manipal University Jaipur. Explore sponsorship tiers and industry exhibition opportunities.',
  },
  '/stesi-2026': {
    title: 'STESI 2026 Archive | Proceedings, Highlights & Photo Gallery',
    description:
      'Explore the 1st edition STESI 2026 retrospective, technical session schedules, best paper awards, and photo gallery from Manipal University Jaipur.',
  },
};

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname.length > 1 && pathname.endsWith('/')
        ? pathname.slice(0, -1)
        : pathname;

    const meta = ROUTE_META[normalizedPath] ?? {
      title: 'Page Not Found | STESI 2027',
      description: DEFAULT_META.description,
    };

    const canonicalUrl =
      normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertCanonical(canonicalUrl);
  }, [pathname]);

  return null;
};

export default RouteMeta;
