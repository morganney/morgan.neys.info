export default function Resume() {
  return (
    <>
      <section>
        <header>
          <h1>
            <a target="_blank" rel="noopener noreferrer" href="https://morgan.neys.info">
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://morganney.github.io/morganney"
              >
                morganney.github.io/morganney
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/morganney"
              >
                github.com/morganney
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/knightedcodemonkey"
              >
                github.com/knightedcodemonkey
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Summary</h3>
        <p>
          Senior frontend engineer with deep full-stack and infrastructure expertise,
          specializing in UI/UX architecture, developer tooling, and performance-oriented
          systems design. Delivered measurable impact by reducing CI duration by 93%,
          building containerized test ecosystems, and improving real-time database
          workloads. Applies AI-assisted workflows pragmatically to accelerate end-to-end
          delivery of production-grade features, from platform foundations to
          customer-facing web products.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <dl>
          <dt>Frontend</dt>
          <dd>
            <ul>
              <li>
                <strong>Core:</strong> JavaScript (ES6+), TypeScript, HTML, CSS, React,
                Next.js
              </li>
              <li>
                <strong>State & Data:</strong> GraphQL, React Query, Zustand, Redux
              </li>
              <li>
                <strong>UI & Visualization:</strong> SVG, HTML5 Canvas, D3.js, React Flow
              </li>
              <li>
                <strong>Styling:</strong> Vanilla Extract, Styled Components, Tailwind
                CSS, Sass
              </li>
              <li>
                <strong>Accessibility:</strong> WCAG, WAI-ARIA, Semantic HTML,
                Keyboard/Focus Support
              </li>
              <li>
                <strong>Design Systems:</strong> Storybook, Chromatic, Figma, Radix UI,
                MUI, Design Tokens
              </li>
              <li>
                <strong>Tools:</strong> Vite, Webpack, Rollup, Rspack, OXC, SWC, Babel,
                LightningCSS
              </li>
            </ul>
          </dd>
          <dt>Backend & Infrastructure</dt>
          <dd>
            <ul>
              <li>
                <strong>Core:</strong> Node.js, Express.js, Ruby on Rails, REST/JSON APIs
              </li>
              <li>
                <strong>Databases:</strong> Redis, PostgreSQL, MySQL
              </li>
              <li>
                <strong>DevOps:</strong> AWS, GCP, Docker Compose, GitHub Actions, GitLab
                CI/CD
              </li>
            </ul>
          </dd>
          <dt>Testing & Quality</dt>
          <dd>
            <ul>
              <li>
                <strong>Frameworks:</strong> Jest, Vitest, Node.js Test Runner
              </li>
              <li>
                <strong>UI & E2E:</strong> RTL, Playwright, Cypress, MSW, Automated
                Seeding & Mocking
              </li>
            </ul>
          </dd>
          <dt>AI & Velocity</dt>
          <dd>
            <ul>
              <li>
                <strong>Practices:</strong> Agentic workflows, AI prototyping, automated
                code review
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <section>
        <h3>Experience</h3>
        <div>
          <article>
            <h4>
              GrowthLoop / Senior Frontend Engineer (Full-Stack & Infrastructure Focus)
            </h4>
            <h5>February 2025 &ndash; Present</h5>
            <ul>
              <li>
                Architected a non-isolated Vitest infrastructure for 1,900+ tests spanning
                200+ files in a shared runtime, reducing CI duration by 93% (15.5m to 67s)
                via MSW fixtures and strategic dependency pre-bundling.
              </li>
              <li>
                Ranked #1 in repository volume (1.3M+ lines of change) over 14 months;
                maintained a near 1:1 addition-to-deletion ratio (628k++ / 670k--) to
                drive a shift toward clean architecture backed by robust developer tooling
                and automated CI gates.
              </li>
              <li>
                Architected a local-first E2E testing ecosystem using Docker-in-Docker
                (DinD) and Playwright; developed a modular seeding utility and a
                transaction-based CI validator to catch schema regressions.
              </li>
              <li>
                Engineered a real-time data-mapping engine using React Flow and
                PostgreSQL; shifted state tracking to an indexed materialized view with
                concurrent refreshes and implemented since_token polling to fetch only
                changed records, reducing server load and UI re-renders.
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
              <li>
                Developed a high-performance HiDPI Canvas drawing tool featuring
                ResizeObserver scaling, fixed-stack undo/redo, and Blob/Data URL
                serialization.
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
        <h3>Recent OSS Projects</h3>
        <div>
          <article>
            <h4>Frontend Infrastructure &amp; Tooling</h4>
            <h5>2023 &ndash; Present</h5>
            <ul>
              <li>
                Architected{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/knightedcodemonkey/develop"
                >
                  @knighted/develop
                </a>
                , a Compiler-as-a-Service browser IDE that delivers CDN-served JSX and CSS
                compilation with live previews, integrated type checking, and linting,
                serving as a high-fidelity demonstration of{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/knightedcodemonkey/jsx"
                >
                  @knighted/jsx
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/knightedcodemonkey/css"
                >
                  @knighted/css
                </a>
                .
              </li>
              <li>
                Built{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/morganney/swc-walk"
                >
                  @morganney/swc-walk
                </a>
                , a high-performance AST traversal utility for the SWC ecosystem with
                strong community adoption for compiler-adjacent workflows.
              </li>
              <li>
                Created{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/knightedcodemonkey/duel"
                >
                  @knighted/duel
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/knightedcodemonkey/specifier"
                >
                  @knighted/specifier
                </a>{' '}
                to automate dual ESM/CJS builds and module specifier rewrites, reducing
                interoperability friction in complex Node.js environments.
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
