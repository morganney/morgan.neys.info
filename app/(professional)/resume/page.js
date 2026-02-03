export default function Resume() {
  return (
    <>
      <section>
        <header>
          <h1>
            <a target="_blank" href="https://morgan.neys.info">
              Morgan Ney
            </a>
          </h1>
          <h2>
            <a target="_blank" href="https://linkedin.com/in/morganney">
              <span>Senior Frontend Engineer</span>
              <span>UI/UX, Architecture & Tooling</span>
            </a>
          </h2>
          <p>
            <a target="_blank" href="https://morgan.neys.info/resume">
              morgan.neys.info/resume
            </a>
          </p>
        </header>
        <div>
          <h3>Morgan Ney</h3>
          <address>
            <p>Quitman, TX 75783</p>
            <p>
              <a href="mailto:morganney@gmail.com">morganney@gmail.com</a>
            </p>
            <p>
              <a href="tel:+19035214816">903.521.4816</a>
            </p>
          </address>
          <ul>
            <li>
              <a target="_blank" href="https://morganney.github.io/morganney">
                morganney.github.io/morganney
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/morganney">
                github.com/morganney
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/knightedcodemonkey">
                github.com/knightedcodemonkey
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Summary</h3>
        <p>
          Senior frontend engineer who builds user&ndash;focused features and the tooling
          that helps teams ship reliably at scale. Product&ndash;minded with strong UI/UX
          instincts, translating Figma into polished interfaces, reusable components, and
          durable developer infrastructure.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <dl>
          <dt>Frontend</dt>
          <dd>
            <ul>
              <li>
                <strong>Languages & Frameworks:</strong> JavaScript, TypeScript, HTML,
                CSS, React, Next.js, GraphQL
              </li>
              <li>
                <strong>UI & Visualization:</strong> SVG, HTML5 Canvas, D3.js, React Flow,
                React Query, Redux
              </li>
              <li>
                <strong>Accessibility:</strong> WCAG, WAI-ARIA, semantic HTML, keyboard
                and focus support
              </li>
              <li>
                <strong>Design Systems:</strong> Storybook, Chromatic, Figma, Radix UI,
                MUI, design tokens, component libraries
              </li>
              <li>
                <strong>Build Tools:</strong> Vite, Webpack, Rollup, Rspack, OXC, SWC,
                LightningCSS, Babel
              </li>
            </ul>
          </dd>
          <dt>Backend</dt>
          <dd>Node.js, Express.js, Redis, PostgreSQL, MySQL, REST/JSON APIs</dd>
          <dt>DevOps & CI/CD</dt>
          <dd>AWS, Docker, Docker Compose, GitHub Actions</dd>
          <dt>Testing</dt>
          <dd>
            Jest, Vitest, React Testing Library, Playwright, Cypress, Node.js Test Runner
          </dd>
          <dt>AI &amp; Developer Velocity</dt>
          <dd>Agentic workflows, AI-assisted prototyping, and automated code reviews</dd>
        </dl>
      </section>
      <section>
        <h3>OSS &amp; Technical Research</h3>
        <div>
          <article>
            <h4>Frontend Systems &amp; Tooling</h4>
            <h5>2023 &ndash; Present</h5>
            <p>
              Built{' '}
              <a target="_blank" href="https://github.com/morganney/swc-walk">
                @morganney/swc-walk
              </a>
              , a fast AST traversal utility for the SWC ecosystem with strong community
              adoption. Created{' '}
              <a target="_blank" href="https://github.com/knightedcodemonkey/duel">
                @knighted/duel
              </a>{' '}
              to automate dual ESM/CJS builds and reduce interoperability friction in
              Node.js projects. Implemented{' '}
              <a target="_blank" href="https://github.com/knightedcodemonkey/specifier">
                @knighted/specifier
              </a>{' '}
              to parse module imports/exports for specifier rewrites and AST metadata.
            </p>
          </article>
          <article>
            <h4>AI-Driven Web Primitives</h4>
            <h5>December 2025 &ndash; Present</h5>
            <p>
              Architected a suite of high-performance primitives including{' '}
              <a target="_blank" href="https://github.com/knightedcodemonkey/css">
                @knighted/css
              </a>{' '}
              (CSS pipeline) and{' '}
              <a target="_blank" href="https://github.com/knightedcodemonkey/jsx">
                @knighted/jsx
              </a>{' '}
              (JSX runtime/loader), plus{' '}
              <a
                target="_blank"
                href="https://github.com/knightedcodemonkey/jsx-ts-plugin"
              >
                @knighted/jsx-ts-plugin
              </a>{' '}
              (editor diagnostics) using agentic AI workflows. Validated the stack with
              the{' '}
              <a target="_blank" href="https://github.com/morganney/css-jsx-app">
                css-jsx-app
              </a>{' '}
              demo. Leveraged LLMs for complex AST refactoring and automated PR auditing
              to accelerate development cycles from concept to published NPM packages.
            </p>
          </article>
        </div>
      </section>
      <section>
        <h3>Experience</h3>
        <div>
          <article>
            <h4>GrowthLoop / Senior Frontend Engineer</h4>
            <h5>February 2025 &ndash; Present</h5>
            <ul>
              <li>
                Engineered an interactive builder canvas using React Flow to model complex
                relationships within warehouse datasets, improving user comprehension and
                engagement.
              </li>
              <li>
                Built a flexible combo box with Downshift.js, supporting single and
                multi-select modes plus async loading.
              </li>
              <li>
                Optimized front-end performance with chunked rendering and request
                batching, reducing interaction latency by 16x.
              </li>
            </ul>
          </article>
          <article>
            <h4>Athena / Software Engineer</h4>
            <h5>July 2024 &ndash; January 2025</h5>
            <ul>
              <li>
                Delivered a responsive investments dashboard featuring performance
                analytics via data grid and SVG-based time-series charts.
              </li>
            </ul>
          </article>
          <article>
            <h4>PowerSchool (acquired Headed2) / Sr. Software Engineer II</h4>
            <h5>June 2022 &ndash; June 2023, Folsom, CA</h5>
            <ul>
              <li>
                Built a{' '}
                <a target="_blank" href="https://github.com/morganney/tts-react">
                  React text-to-speech component
                </a>{' '}
                integrating SpeechSynthesis and Amazon Polly with highlighted text and
                accessible voice controls.
              </li>
            </ul>
          </article>
          <article>
            <h4>Headed2 / Sr. Software Engineer</h4>
            <h5>July 2021 &ndash; June 2022, Sparkill, NY</h5>
            <ul>
              <li>
                Built the responsive K-12 home page + registration, with 50-state
                customization and modal/standalone flows.
              </li>
            </ul>
          </article>
          <article>
            <h4>Teladoc Health (acquired InTouch Health) / Sr. Software Engineer</h4>
            <h5>June 2020 &ndash; July 2021, Purchase, NY</h5>
            <ul>
              <li>
                Engineered a scalable integration strategy using dynamic imports to lazy
                load different micro-frontends into an integrated web app.
              </li>
            </ul>
          </article>
          <article>
            <h4>InTouch Health / Sr. Software Engineer (Web Frontend)</h4>
            <h5>July 2018 &ndash; June 2020, Santa Barbara, CA</h5>
            <ul>
              <li>
                Grew the monorepo to eleven contributors across two teams and multiple web
                apps.
              </li>
            </ul>
          </article>
          <article>
            <h4>Tenable / Sr. Software Engineer</h4>
            <h5>March 2016 &ndash; July 2018, Columbia, MD</h5>
            <ul>
              <li>
                Led a monorepo modernization (Yarn Workspaces, Webpack, Gulp, React,
                Redux) and built a Hapi-based middleware + JSON-schema-driven API mock
                service.
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <div>
          <article>
            <h4>SFSU</h4>
            <h5>January 2007 &ndash; May 2008, San Francisco, CA</h5>
            <p>
              Studied general computer science curriculum after transferring credits from
              Berkeley City College.
            </p>
          </article>
        </div>
      </section>
      <section>
        <h3>Awards</h3>
        <div>
          <p>
            <a target="_blank" href="https://news.ucsc.edu/2002/05/133.html">
              UCSC 2002 $20K Leadership Opportunity Scholarship
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
