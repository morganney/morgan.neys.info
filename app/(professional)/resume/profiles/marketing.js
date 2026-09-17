export const marketingProfile = {
  key: 'marketing',
  label: 'Marketing',
  title: 'Web Developer',
  tagline: 'Browser Fundamentals, CMS & Marketing Sites',
  sectionOrder: ['summary', 'skills', 'experience', 'oss', 'education', 'awards'],
  sections: {
    summary:
      'Web developer returning to hands-on CMS, marketing-site, and browser-fundamentals work after a decade building SaaS/frontend products. Built custom CMS/CRM systems, WordPress/Drupal/ExpressionEngine sites, and SEO/PPC campaigns from 2007-2011, then spent the following decade deepening craft in semantic HTML, modern CSS, accessibility, and performance optimization across React/TypeScript products. Comfortable ramping quickly on current CMS, ecommerce, and email-marketing platforms, backed by a proven pattern of adopting new tooling fast.',
    skills: [
      {
        title: 'CMS & Platforms',
        items: [
          {
            label: 'Production Experience',
            value: 'WordPress, Drupal, ExpressionEngine, Symfony (PHP OOP)',
          },
          {
            label: 'Modern Equivalents',
            value:
              'Ramping quickly on Shopify, HubSpot CMS, Webflow, and similar platforms',
          },
        ],
      },
      {
        title: 'Marketing & SEO',
        items: [
          {
            label: 'Technical SEO',
            value:
              'On/off-page SEO, schema/JSON-LD, canonical tags, XML sitemaps, link building',
          },
          {
            label: 'Analytics & Tracking',
            value:
              'Google Analytics/GA4, Google Tag Manager, AdWords/PPC, conversion tracking',
          },
          {
            label: 'Email & CRO',
            value: 'Responsive email templates, A/B testing, landing page optimization',
          },
        ],
      },
      {
        title: 'Browser Fundamentals',
        items: [
          {
            label: 'HTML/CSS',
            value:
              'Semantic HTML5, modern CSS (Grid, Flexbox, Custom Properties), responsive design',
          },
          {
            label: 'JavaScript',
            value:
              'Vanilla JS (ES6+), TypeScript, DOM/Web APIs, cross-browser compatibility',
          },
          {
            label: 'Accessibility',
            value: 'WCAG 2.1 AA, semantic structure, keyboard and screen reader support',
          },
        ],
      },
      {
        title: 'Performance & Tooling',
        items: [
          {
            label: 'Performance',
            value:
              'Core Web Vitals, bundle analysis (Rsdoctor), image/script optimization, CDN caching',
          },
          {
            label: 'Build & Server',
            value: 'Rspack, Vite, Webpack, Node.js/Express, PHP, MySQL/PostgreSQL, Git',
          },
          {
            label: 'Workflow',
            value: 'AI-assisted development, automated testing (Vitest, Playwright)',
          },
        ],
      },
    ],
    experience: [
      {
        title: 'GrowthLoop / Senior Frontend Engineer',
        date: 'February 2025 - Present',
        bullets: [
          "Maintain GrowthLoop's Rspack build and use Rsdoctor to monitor bundle size, guiding performance and code-splitting decisions for a fast, reliable production web app.",
          'Design accessible, WCAG-conscious UI primitives with cascade-layer CSS, applying the same standards-based HTML/CSS discipline used in hand-built marketing sites.',
        ],
      },
      {
        title: 'Athena Advisory (Contract) / Senior Frontend Engineer',
        date: 'August 2024 - January 2025',
        bullets: [
          'Built a responsive financial dashboard using semantic HTML and custom SVG charts for dense tabular data.',
        ],
      },
      {
        title: 'Planned Career Break + OSS Development',
        date: 'June 2023 - July 2024',
        bullets: [
          {
            before: 'Developed ',
            link: { href: 'https://try.busmap.online', label: 'try.busmap.online' },
            after:
              ', a map-based transit web app with real-time arrivals and native browser geolocation.',
          },
        ],
      },
      {
        title: 'PowerSchool (acquired Headed2) / Sr. Software Engineer',
        date: 'July 2021 - June 2023, Sparkill, NY & Folsom, CA',
        bullets: [
          'Built the responsive K-12 registration and marketing home page experience, with 50-state customization and dual modal/standalone registration flows.',
          'Implemented a HiDPI Canvas drawing tool with ResizeObserver scaling and durable Blob/Data URL serialization.',
        ],
      },
      {
        title: 'Teladoc Health (acquired InTouch Health) / Sr. Software Engineer',
        date: 'July 2018 - July 2021, Santa Barbara, CA & Purchase, NY',
        bullets: [
          'Built accessible hospital administrator dashboards with clear, semantic information hierarchy.',
        ],
      },
      {
        title: 'Tenable / Sr. Software Engineer',
        date: 'March 2016 - July 2018, Columbia, MD',
        bullets: [
          'Delivered accessible security dashboards and schema-driven API mocks to speed local development.',
        ],
      },
      {
        title: 'LiveWire Supply / Web Developer',
        date: 'January 2010 - June 2011, Oakland, CA',
        bullets: [
          "Redeveloped the company's primary website from the ground up using Symfony (PHP OOP), improving on-page SEO structure; PageRank increased and the company had its best web-order quarter ever after launch.",
          'Built a custom CMS/CRM with CRUD for customers, quotes, and purchasing records, plus an email quoting system, using historical data and Ajax throughout to minimize keystrokes and shorten the learning curve for new staff.',
          'Integrated the UPS Developer Kit API for an Ajax shipping calculator and used CSS sprites, mod_deflate, and mod_expires to cut HTTP requests and speed page loads.',
        ],
      },
      {
        title: 'Early Web & CMS Development (Freelance) / Web Developer',
        date: '2009 - 2011, Oakland, CA',
        bullets: [
          'Built websites and secure data-entry applications from the ground up on Symfony, WordPress, and ExpressionEngine, including a validated PHP/MySQL reporting tool and a from-scratch marketing site with canonical URL handling.',
          "Served as Webmaster for a nonprofit's ExpressionEngine site, handling HTML/CSS/JS updates, user administration, and analytics.",
        ],
      },
    ],
    oss: [
      {
        title: 'Browser-Focused Open Source',
        date: '2023 - Present',
        bullets: [
          {
            before: 'Published ',
            link: {
              href: 'https://github.com/morganney/magic-crayon',
              label: 'magic-crayon',
            },
            after:
              ', a framework-agnostic Web Component for freehand Canvas drawing — Shadow DOM encapsulation, ResizeObserver HiDPI scaling, undo/redo, and CSS custom property theming.',
          },
          {
            before: 'Authored ',
            link: {
              href: 'https://github.com/morganney/tts-react',
              label: 'tts-react',
            },
            after:
              ', a React text-to-speech component integrating SpeechSynthesis and Amazon Polly with synchronized text highlighting and accessible, keyboard-friendly voice controls.',
          },
        ],
      },
    ],
    education: [
      {
        title: 'SFSU',
        date: 'January 2007 - May 2008, San Francisco, CA',
        detail:
          'Studied general computer science curriculum after transferring credits from Berkeley City College.',
      },
    ],
    awards: [
      {
        before: '',
        link: {
          href: 'https://news.ucsc.edu/2002/05/133.html',
          label: 'UCSC 2002 $20K Leadership Opportunity Scholarship',
        },
        after: '.',
      },
    ],
  },
}
