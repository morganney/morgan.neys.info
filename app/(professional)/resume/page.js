export default function Resume() {
  return (
    <>
      <section>
        <header>
          <h1>
            <a target="_blank" href="https://morgan.neys.info">
              Morgan
              <br />
              Ney
            </a>
          </h1>
          <h2>
            <a target="_blank" href="https://linkedin.com/in/morganney">
              Frontend Engineer
            </a>
          </h2>
        </header>
        <div>
          <h3>Morgan Ney</h3>
          <address>
            <p>432 CR 1236</p>
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
          </ul>
        </div>
      </section>
      <section>
        <h3>Skills</h3>
        <dl>
          <dt>Frontend</dt>
          <dd>
            <ul>
              <li>
                <strong>Languages & Frameworks:</strong> JavaScript, TypeScript, React,
                Next.js
              </li>
              <li>
                <strong>UI:</strong> React Query, Zustand, Redux, Storybook,
                Styled-Components, Vanilla Extract, Emotion
              </li>
              <li>
                <strong>Build Tools:</strong> Vite, Webpack, Rollup, Rspack, SWC, Babel
              </li>
              <li>
                <strong>Web Fundamentals:</strong> HTML, CSS, SPA, PWA,{' '}
                <a target="_blank" href="https://html-now.github.io/">
                  Web Platform
                </a>
              </li>
            </ul>
          </dd>
          <dt>Backend</dt>
          <dd>
            Node.js, Express.js, Next.js, Redis, PostgreSQL, MySQL, Nginx, Apache,
            REST/JSON APIs
          </dd>
          <dt>DevOps & CI/CD</dt>
          <dd>
            AWS (EC2, ECS, ECR, RDS, API Gateway, S3, Lambda, Route 53, CloudWatch,
            Copilot CLI), Docker, Docker Compose, GitHub Actions, Monorepos,{' '}
            <a
              target="_blank"
              href="https://nodejs.org/api/packages.html#dual-commonjses-module-packages"
            >
              Dual Packages
            </a>
          </dd>
          <dt>Testing</dt>
          <dd>
            Jest, Vitest, Node.js Test Runner, Mocha, Cypress, Playwright, Webdriver.io,
            React Testing Library, jest-dom, Node:assert, Chai, Sinon.js
          </dd>
          <dt>AI &amp; Developer Velocity</dt>
          <dd>
            Agentic Workflows (Cursor Composer, Copilot Plan), AI-Driven Prototyping,
            CodeRabbit (Automated Reviews), LLM-assisted Software Architecture
          </dd>
          <dt>Other Strengths</dt>
          <dd>
            Performance Optimization (Core Web Vitals), Design Systems, Responsive UX,
            Accessibility (a11y), Engineering Mentorship &amp; Vision
          </dd>
        </dl>
      </section>
      <section>
        <h3>Technical Research &amp; Prototyping</h3>
        <div>
          <article>
            <h4>AI-Driven Web Tooling</h4>
            <h5>January 2024 &ndash; Present</h5>
            <p>
              Architected and implemented a suite of high-performance web primitives
              (@knighted/jsx, css, jsx-ts-plugin) using agentic AI workflows. Leveraged
              LLMs for complex refactoring and automated PR auditing, achieving rapid
              iteration cycles from concept to published NPM packages.
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
                Developed an interactive canvas using React Flow to visualize and explore
                complex relationships within warehouse datasets, improving user
                comprehension and engagement.
              </li>
              <li>
                Engineered a flexible combo box component with Downshift.js, supporting
                both single and multi-select modes, customizable rendering, and
                asynchronous option loading for enhanced usability.
              </li>
              <li>
                Optimized front-end performance by implementing chunked rendering
                strategies and efficient network request batching, reducing interaction
                latency by a factor of sixteen and eliminating UI jank.
              </li>
              <li>
                Elevated code quality and maintainability by introducing advanced tooling
                for linting, testing, and type checking, and by implementing pre-push
                hooks and{' '}
                <a
                  target="_blank"
                  href="https://github.com/knightedcodemonkey/display-name"
                >
                  codemods
                </a>{' '}
                to enforce coding standards and streamline developer workflows.
              </li>
              <li>
                Refactored codebase structure using colocation-by-feature, removed
                obsolete dependencies and files, and improved documentation, making
                onboarding easier and code maintenance more efficient.
              </li>
              <li>
                Set up a robust local development environment with Docker Compose,
                enabling the team to run the full stack locally and facilitating seamless
                integration with remote services.
              </li>
              <li>
                Collaborated closely with designers and product managers to deliver highly
                interactive, user-friendly features, prioritizing accessibility,
                responsiveness, and pixel-perfect UI.
              </li>
            </ul>
          </article>
          <article>
            <h4>Athena / Software Engineer</h4>
            <h5>July 2024 &ndash; January 2025</h5>
            <ul>
              <li>
                Led adoption of best practices for a financial advice platform using
                Next.js, React, Styled Components, and TypeScript.
              </li>
              <li>
                Enhanced E2E test reliability and streamlined CI/CD workflows with
                Playwright, improved linting, and database seeding in Docker.
              </li>
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
                Developed a responsive React drawing component using the HTML Canvas
                element, supporting HiDPI displays, erasing, undo/redo, and export as Blob
                or Data URL.
              </li>
              <li>
                Built a{' '}
                <a target="_blank" href="https://github.com/morganney/tts-react">
                  React text-to-speech component
                </a>{' '}
                integrating SpeechSynthesis, HTMLAudioElement APIs, and Amazon Polly, with
                support for highlighted spoken text and flexible voice synthesis for
                accessibility.
              </li>
              <li>
                Enabled robust unit testing for Custom Element component libraries and
                automated Jest setup for micro-frontend consumers via tailored NPM
                scripts.
              </li>
              <li>
                Upgraded Node.js versions and modernized NPM dependencies and Webpack
                builds across multiple projects, enhancing CI/CD stability and
                maintainability.
              </li>
            </ul>
          </article>
          <article>
            <h4>Headed2 / Sr. Software Engineer</h4>
            <h5>July 2021 &ndash; June 2022, Sparkill, NY</h5>
            <ul>
              <li>
                Implemented CI/CD automation with GitHub Actions, streamlining integration
                and deployment for Scala backend, React/Webpack frontend, and Storybook
                builds.
              </li>
              <li>
                Modernized front-end state management by migrating legacy Redux class
                patterns to React Context and hooks, promoting maintainable, scalable
                architecture in new feature development.
              </li>
              <li>
                Built a reusable React component library with Storybook, and created{' '}
                <a
                  target="_blank"
                  href="https://www.npmjs.com/package/storybook-preset-inline-svg"
                >
                  storybook-preset-inline-svg
                </a>{' '}
                to enable easy inline SVG usage, laying the groundwork for consistent,
                scalable UI and improved developer velocity.
              </li>
              <li>
                Designed and developed responsive homepage, global navigation, and
                multi-step registration flow for both mobile and desktop platforms.
              </li>
            </ul>
          </article>
          <article>
            <h4>Teladoc Health (acquired InTouch Health) / Sr. Software Engineer</h4>
            <h5>June 2020 &ndash; July 2021, Purchase, NY</h5>
            <ul>
              <li>
                Developed features for React applications using TypeScript, Redux, Styled
                Components, Jest, and Testing Library.
              </li>
              <li>
                Created a React component that made use of dynamic imports to lazy load
                different micro-frontends into an integrated web app.
              </li>
              <li>
                Transitioned an OAuth 2 flow for an SPA away from the browser and into a
                Node/Express backend-for-frontend based on the{' '}
                <a
                  target="_blank"
                  href="https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-07#section-6.2"
                >
                  IETF BCP
                </a>
                .
              </li>
            </ul>
          </article>
          <article>
            <h4>InTouch Health / Sr. Software Engineer (Web Frontend)</h4>
            <h5>July 2018 &ndash; June 2020, Santa Barbara, CA</h5>
            <ul>
              <li>
                Brought on as the first frontend engineer to oversee development of their
                new React SPA.
              </li>
              <li>
                Using yarn workspaces and Docker I started a monorepo for development of
                SPAs, a component library, Storybook, and an Express mock server.
              </li>
              <li>
                Grew the monorepo to eleven contributors that spanned two teams and
                multiple web apps.
              </li>
              <li>
                Deployed the API for a React SPA to AWS using Amazon API Gateway and stage
                variables for management of different environments. Served static assets
                for the SPA via S3.
              </li>
            </ul>
          </article>
          <article>
            <h4>Tenable / Sr. Software Engineer</h4>
            <h5>March 2016 &ndash; July 2018, COLUMBIA, MD</h5>
            <ul>
              <li>
                Spearheaded development of their next-generation architecture and stack as
                a mono-repo using Yarn Workspaces, Webpack, Gulp, React, and Redux (was
                previously a custom framework on top of jQuery).
              </li>
              <li>
                Using an in-house framework built with Hapi I developed their first
                frontend middleware service used for aggregation and mocking of other
                microservices.
              </li>
              <li>
                Contributed as part of the front end platform teach, providing the
                modules, framework, and tools to support higher-level feature development.
              </li>
            </ul>
          </article>
          <article>
            <h4>Previous Experience:</h4>
            <ul>
              <li>
                <p>
                  Developed chart-based SPAs to visualize energy usage across a building
                  portfolio using React, Backbone, D3 and SVG.
                </p>
                <h5>Lucid, Oakland, CA, 2014 &ndash; 2015</h5>
              </li>
              <li>
                <p>
                  Using the Google Maps JavaScript API and HTML5 audio and video elements
                  I developed a NextStop application allowing bus administrators to
                  designate geographic locations where a bus would announce the next stop.
                </p>
                <h5>NextBus, Emeryville, CA, 2011 &ndash; 2013</h5>
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
          <article>
            <h4>Berkeley City College</h4>
            <h5>August 2004 &ndash; December 2006, Berkeley, CA</h5>
            <p>
              Studied general web programming curriculum before transferring credits to
              SFSU.
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
          <p>
            Solicited by Packt Publishing for a technical review on an Amazon web services
            book.
          </p>
        </div>
      </section>
    </>
  )
}
