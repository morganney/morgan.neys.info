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
        </header>
        <div>
          <h3>Morgan Ney</h3>
          <address>
            <p>432 County Road 1236</p>
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
          Senior frontend engineer focused on developer tooling and frontend systems,
          bridging high-impact product features with the platforms that enable delivery at
          scale. I specialize in code analysis, AST tooling, and build optimizations to
          turn complex workflows into golden paths. Product-minded, I care equally about
          translating Figma designs into polished, intuitive UI/UX, scalable component
          libraries, and robust developer infrastructure.
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
                CSS, React, Next.js, SPA, PWA
              </li>
              <li>
                <strong>UI & Visualization:</strong> SVG, HTML5 Canvas, D3.js, React Flow,
                React Query, Zustand, Redux, Styled-Components, Vanilla Extract
              </li>
              <li>
                <strong>Accessibility:</strong> WCAG, WAI-ARIA Authoring Practices,
                keyboard navigation, focus management, semantic HTML, color contrast,
                screen readers (JAWS)
              </li>
              <li>
                <strong>Design Systems:</strong> Storybook, Chromatic, Figma, Radix UI,
                MUI, design tokens, component libraries
              </li>
              <li>
                <strong>Build Tools:</strong> Vite, Webpack, Rollup, Rspack, OXC, SWC,
                Babel, Lightning CSS
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
            Agentic workflows (Cursor and Copilot Plan/Agent), AI-driven prototyping and
            implementation, LLM-assisted software architecture, automated reviews
            (Copilot, CodeRabbit)
          </dd>
        </dl>
      </section>
      <section>
        <h3>OSS &amp; Technical Research</h3>
        <div>
          <article>
            <h4>Ecosystem Infrastructure &amp; Tooling</h4>
            <p>
              Architected and implemented{' '}
              <a target="_blank" href="https://github.com/knightedcodemonkey/css">
                @knighted/css
              </a>{' '}
              (CSS pipeline),{' '}
              <a target="_blank" href="https://github.com/knightedcodemonkey/jsx">
                @knighted/jsx
              </a>{' '}
              (JSX runtime/loader), and{' '}
              <a
                target="_blank"
                href="https://github.com/knightedcodemonkey/jsx-ts-plugin"
              >
                @knighted/jsx-ts-plugin
              </a>{' '}
              (TypeScript editor diagnostics); published as NPM packages with comprehensive
              documentation and CI/CD integration.
            </p>
          </article>
          <article>
            <h4>AI-Driven Primitives &amp; Runtimes</h4>
            <p>
              Delivered demo apps{' '}
              <a target="_blank" href="https://github.com/morganney/css-jsx-app">
                css-jsx-app
              </a>
              ,{' '}
              <a target="_blank" href="https://github.com/morganney/jsx-loader-demo">
                jsx-loader-demo
              </a>
              , and{' '}
              <a target="_blank" href="https://github.com/morganney/jsx-node-playground">
                jsx-node-playground
              </a>{' '}
              to validate integration and DX using agentic AI workflows. Leveraged LLMs for
              complex refactoring and automated PR auditing, achieving rapid iteration
              cycles from concept to production.
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
                Engineered a flexible combo box component with Downshift.js, supporting
                both single and multi-select modes, customizable rendering, and
                asynchronous option loading for enhanced usability.
              </li>
              <li>
                Optimized front-end performance by implementing chunked rendering
                strategies and efficient network request batching, reducing canvas
                interaction latency by a factor of sixteen and eliminating UI jank.
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
                Developed a high-fidelity React drawing component using the HTML Canvas
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
            </ul>
          </article>
          <article>
            <h4>Additional Experience</h4>
            <div>
              <p>
                <strong>Teladoc Health / InTouch Health / Sr. Software Engineer</strong>{' '}
                (June 2018 &ndash; July 2021):
              </p>
              <ul>
                <li>
                  Spearheaded technical vision for a new React SPA in telehealth,
                  establishing architecture, component library, and monorepo structure that
                  grew to eleven contributors across two teams and multiple web apps.
                </li>
                <li>
                  Engineered scalable integration strategy using dynamic imports to lazy
                  load micro-frontends, while developing features with TypeScript, Redux,
                  Styled Components, Jest, and Testing Library.
                </li>
              </ul>
              <p>
                <strong>Tenable / Sr. Software Engineer</strong> (March 2016 &ndash; July
                2018):
              </p>
              <ul>
                <li>
                  Spearheaded migration from a legacy jQuery framework to a modern
                  React/Redux architecture, implementing the next-generation stack as a
                  mono-repo using Yarn Workspaces, Webpack, and Gulp.
                </li>
                <li>
                  Built an in-house Hapi-based frontend middleware service for aggregation
                  and service mocking.
                </li>
              </ul>
            </div>
          </article>
          <article>
            <h4>Previous Experience:</h4>
            <ul>
              <li>
                <p>
                  Developed chart-based SPAs to visualize high-frequency energy usage
                  using React, D3, and SVG, optimizing performance for complex data sets.
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
