export const browserProfile = {
  key: 'browser',
  label: 'Browser',
  title: 'Frontend Developer',
  tagline: 'Web Standards, Browser Platform',
  sectionOrder: ['summary', 'skills', 'oss', 'experience', 'education', 'awards'],
  sections: {
    summary:
      'Veteran web craftsman specializing in the browser as a platform — semantic markup, CSS layout systems, native DOM APIs, and runtime performance. Builds fast, layout-resilient interfaces using standards-based code, with careful attention to WCAG accessibility, maintainability, and user experience.',
    skills: [
      {
        title: 'Platform Fundamentals',
        items: [
          {
            label: 'HTML',
            value: 'Semantic HTML — accessible structure, forms, ARIA, metadata, SEO',
          },
          {
            label: 'CSS',
            value:
              'Modern CSS — Grid, Flexbox, Custom Properties, cascade, layout composition',
          },
          {
            label: 'JS',
            value:
              'JavaScript (ES6+) — TypeScript, DOM/Web APIs, async programming, browser event model, ES modules',
          },
          {
            label: 'Components',
            value: 'Web Components — Custom Elements, Shadow DOM, Declarative Shadow DOM',
          },
        ],
      },
      {
        title: 'Browser Runtimes & APIs',
        items: [
          {
            label: 'Rendering',
            value:
              'Canvas 2D, SVG, browser performance profiling, render bottleneck analysis',
          },
          {
            label: 'Delivery',
            value:
              'Asset optimization, CDN delivery, HTTP caching, progressive loading, dynamic imports',
          },
        ],
      },
      {
        title: 'Core Tooling',
        items: [
          {
            label: 'Libraries',
            value: 'React, React Query, Base UI, Material UI, React Flow, Zustand',
          },
          {
            label: 'Build & Test',
            value: 'Vite, Webpack, Sass, Vanilla Extract, Vitest, Jest, Playwright',
          },
          {
            label: 'Workflow',
            value: 'AI-assisted development, code review, testing, and debugging',
          },
        ],
      },
    ],
    experience: [
      {
        title: 'GrowthLoop / Frontend Developer',
        date: 'February 2025 - Present',
        bullets: [
          'Designed and implemented accessible UI primitives with typed token contracts, WCAG-conscious component patterns, and cascade-layer styling — enforcing consistent, standards-based HTML and CSS practices across independently developed product surfaces.',
          'Partnered with DevOps to move frontend bundles and static assets to a global CDN, maximizing browser caching effectiveness and page-load reliability through uniquely versioned, cache-safe asset URLs.',
          'Built complex client-side graph rendering, tuning DOM update patterns and polling behavior to keep interactive diagrams responsive under real data loads.',
        ],
      },
      {
        title: 'Athena Advisory (Contract) / Frontend Developer',
        date: 'August 2024 - January 2025',
        bullets: [
          'Built a responsive, accessible financial dashboard with dense tabular data and custom SVG time-series charts, using raw semantic HTML and CSS layout composition to ensure clear information hierarchy.',
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
              ' during a planned caregiving sabbatical — a map-heavy transit web app exploring native browser geolocation, real-time arrival rendering, and constrained-network resilience.',
          },
        ],
      },
      {
        title: 'PowerSchool / Frontend Developer',
        date: 'July 2021 - June 2023, Sparkill, NY & Folsom, CA',
        bullets: [
          {
            before: 'Built a ',
            link: {
              href: 'https://github.com/morganney/tts-react',
              label: 'React text-to-speech component',
            },
            after:
              ' leveraging the native SpeechSynthesis Web API with synchronized text highlighting, keyboard-accessible voice controls, and inclusive reading flow design.',
          },
          {
            before: 'Developed the ',
            link: {
              href: 'https://tx.headed2.com/',
              label: 'Headed2 home page and registration experience',
            },
            after:
              ' with fully responsive layouts, state-specific homepage variants across all 50 states, and dual registration delivery as either a modal flow or standalone page.',
          },
          'Implemented a HiDPI Canvas drawing tool using native ResizeObserver APIs for pixel-accurate scaling, a fixed-stack undo/redo model, and Blob/Data URL serialization for durable state across sessions.',
        ],
      },
      {
        title: 'Teladoc Health / Frontend Developer',
        date: 'July 2018 - July 2021, Santa Barbara, CA & Purchase, NY',
        bullets: [
          'Built accessible hospital administrator dashboards and implemented dynamic import boundaries for safe composition of independent frontend modules within a single browser runtime.',
        ],
      },
      {
        title: 'Tenable / Frontend Developer',
        date: 'March 2016 - July 2018, Columbia, MD',
        bullets: [
          'Delivered accessible security vulnerability interfaces with clear visual hierarchy and introduced schema-driven API mocks to eliminate local development friction.',
        ],
      },
    ],
    oss: [
      {
        title: 'Browser-Focused Open Source',
        date: '2023 - Present',
        bullets: [
          {
            before: 'Architected ',
            link: {
              href: 'https://github.com/knightedcodemonkey/develop',
              label: '@knighted/develop',
            },
            after:
              ', a browser-native component workbench with no local bundler — CDN ESM delivery with provider fallback chains, WASM-powered JSX and CSS compilation via oxc-parser/transform, iframe-isolated preview rendering, and native import maps for dependency resolution.',
          },
          {
            before: 'Published ',
            link: {
              href: 'https://github.com/morganney/magic-crayon',
              label: 'magic-crayon',
            },
            after:
              ', a framework-agnostic Web Component for freehand Canvas drawing — Shadow DOM encapsulation, ResizeObserver HiDPI scaling, undo/redo, custom events, and CSS custom property theming.',
          },
          {
            before: 'Authored ',
            link: {
              href: 'https://github.com/morganney/web-component-best-practices',
              label: 'web-component-best-practices',
            },
            after:
              ', a minimal reference for CDN-consumable custom elements with strict HTML/CSS/JS separation, Declarative Shadow DOM, and side-effect-free registration patterns.',
          },
          {
            before: 'Published ',
            link: {
              href: 'https://github.com/morganney/react-stock-ticker',
              label: 'react-stock-ticker',
            },
            after:
              ', a TypeScript React component for animating live price changes, available on npm with a CDN-ready demo and cross-browser Intl formatting support.',
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
