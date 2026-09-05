export const saasProfile = {
  key: 'saas',
  label: 'SaaS',
  title: 'Senior Frontend Engineer',
  tagline: 'UI/UX, Architecture & Tooling',
  sectionOrder: ['summary', 'skills', 'experience', 'oss', 'education', 'awards'],
  sections: {
    summary:
      'Senior frontend engineer who builds and maintains complex web applications, from customer-facing interfaces to the tooling and services behind them. Experienced with React, TypeScript, Node.js, databases, automated testing, and delivery pipelines across healthcare, security, financial, and transit products. Uses AI-assisted development thoughtfully to move work forward while keeping code reliable and maintainable.',
    skills: [
      {
        title: 'Frontend',
        items: [
          {
            label: 'Core',
            value: 'JavaScript (ES6+), TypeScript, HTML, CSS, React, Next.js',
          },
          { label: 'State & Data', value: 'GraphQL, React Query, Zustand, Redux' },
          { label: 'UI & Visualization', value: 'SVG, HTML5 Canvas, D3.js, React Flow' },
          {
            label: 'Styling',
            value: 'Vanilla Extract, Styled Components, Tailwind CSS, Sass',
          },
          {
            label: 'Accessibility',
            value: 'WCAG, WAI-ARIA, Semantic HTML, Keyboard/Focus Support',
          },
          {
            label: 'Design Systems',
            value: 'Storybook, Chromatic, Figma, Radix UI, MUI, Design Tokens',
          },
          {
            label: 'Tools',
            value: 'Vite, Webpack, Rollup, Rspack, OXC, SWC, Babel, LightningCSS',
          },
        ],
      },
      {
        title: 'Backend & Infrastructure',
        items: [
          { label: 'Core', value: 'Node.js, Express.js, Ruby on Rails, REST/JSON APIs' },
          { label: 'Databases', value: 'Redis, PostgreSQL, MySQL' },
          {
            label: 'DevOps',
            value: 'AWS, GCP, Docker Compose, GitHub Actions, GitLab CI/CD',
          },
        ],
      },
      {
        title: 'Testing & Quality',
        items: [
          { label: 'Frameworks', value: 'Jest, Vitest, Node.js Test Runner' },
          {
            label: 'UI & E2E',
            value: 'RTL, Playwright, Cypress, MSW, Automated Seeding & Mocking',
          },
        ],
      },
      {
        title: 'AI & Velocity',
        items: [
          {
            label: 'Practices',
            value: 'Agentic workflows, AI prototyping, automated code review',
          },
        ],
      },
    ],
    experience: [
      {
        title:
          'GrowthLoop / Senior Frontend Engineer (Full-Stack & Infrastructure Focus)',
        date: 'February 2025 - Present',
        bullets: [
          "Led development of GrowthLoop's React component library (Hylo), establishing typed token contracts, theme/cascade-layer styling architecture, WCAG-conscious primitives, and a shared Vite/Storybook pipeline for consistent UI across product lines.",
          'Architected a non-isolated Vitest infrastructure that cut CI runtime by 93% (15.5m to 67s) for 1,900+ tests across 200+ files, and now scales to 3,000+ tests across 327+ files (~32s local, ~158s on GitHub Actions ubuntu-latest).',
          'Architected and evolved a local-first Playwright E2E ecosystem across GitLab and GitHub Actions using Docker, with modular test-data seeding and transaction-based validation to catch schema regressions early.',
          'Partnered with DevOps to move frontend bundles and static assets to a global CDN, improving browser caching and page-load reliability, and making rollbacks safer through uniquely versioned asset URLs.',
          'Engineered a real-time data-mapping engine with React Flow and PostgreSQL, using an indexed materialized view plus since_token polling to reduce server load and UI re-renders.',
        ],
      },
      {
        title: 'Athena Advisory (Contract) / Senior Frontend Engineer',
        date: 'August 2024 - January 2025',
        bullets: [
          'Built a responsive investments dashboard for accounts, holdings, and performance using a data-grid and SVG time-series charts with selectable date ranges.',
          'Transitioned to GrowthLoop via an accelerated offer from an earlier interview process.',
        ],
      },
      {
        title: 'Planned Career Break + OSS Development',
        date: 'June 2023 - July 2024',
        bullets: [
          'Took a planned personal sabbatical focused on childcare while maintaining active OSS development and technical depth.',
          'Built and maintained OSS tooling projects during this period.',
          {
            before: 'Developed ',
            link: { href: 'https://try.busmap.online', label: 'try.busmap.online' },
            after:
              ' as a full-stack transit web app with map-based UX and real-time arrivals using React, Express, PostgreSQL, Redis, and Docker.',
          },
        ],
      },
      {
        title: 'PowerSchool (acquired Headed2) / Sr. Software Engineer',
        date: 'July 2021 - June 2023, Sparkill, NY & Folsom, CA',
        bullets: [
          {
            before: 'Built a ',
            link: {
              href: 'https://github.com/morganney/tts-react',
              label: 'React text-to-speech component',
            },
            after:
              ' integrating SpeechSynthesis and Amazon Polly with highlighted text and accessible voice controls.',
          },
          'Developed a high-performance HiDPI Canvas drawing tool featuring ResizeObserver scaling, fixed-stack undo/redo, and Blob/Data URL serialization.',
          'Built the responsive K-12 home page + registration, with 50-state customization and modal/standalone flows.',
        ],
      },
      {
        title: 'Teladoc Health (acquired InTouch Health) / Sr. Software Engineer',
        date: 'July 2018 - July 2021, Santa Barbara, CA & Purchase, NY',
        bullets: [
          'Built hospital administrator dashboard experiences for operational monitoring and workflow oversight in an integrated web application.',
          'Engineered a scalable integration strategy using dynamic imports to lazy load different micro-frontends into an integrated web app.',
        ],
      },
      {
        title: 'Tenable / Sr. Software Engineer',
        date: 'March 2016 - July 2018, Columbia, MD',
        bullets: [
          'Developed security vulnerability dashboard experiences that improved visibility into risk and remediation status for engineering teams.',
          'Led monorepo modernization (Yarn Workspaces, Webpack, React/Redux) and built a Hapi middleware plus JSON-schema-driven API mock service.',
        ],
      },
    ],
    oss: [
      {
        title: 'Frontend Infrastructure & Tooling',
        date: '2023 - Present',
        bullets: [
          {
            before: 'Architected ',
            link: {
              href: 'https://github.com/knightedcodemonkey/develop',
              label: '@knighted/develop',
            },
            after:
              ', a UI component workbench with compiler-as-a-service that delivers CDN-served JSX and CSS compilation, live previews, integrated type checking, and linting, serving as a high-fidelity demonstration of @knighted/jsx and @knighted/css.',
          },
          {
            before: 'Built ',
            link: {
              href: 'https://github.com/morganney/swc-walk',
              label: '@morganney/swc-walk',
            },
            after:
              ', a high-performance AST traversal utility for the SWC ecosystem with strong community adoption for compiler-adjacent workflows.',
          },
          {
            segments: [
              { text: 'Created ' },
              {
                link: {
                  href: 'https://github.com/knightedcodemonkey/duel',
                  label: '@knighted/duel',
                },
              },
              { text: ' and ' },
              {
                link: {
                  href: 'https://github.com/knightedcodemonkey/specifier',
                  label: '@knighted/specifier',
                },
              },
              {
                text: ' to automate dual ESM/CJS builds and module specifier rewrites, reducing interoperability friction in complex Node.js environments.',
              },
            ],
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
