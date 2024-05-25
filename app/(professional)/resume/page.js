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
              Software Engineer
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
                portfolio
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
        <div>
          <article>
            <h5>Client</h5>
            <p>
              JavaScript, TypeScript, HTML, CSS, React, React Query, Redux, Storybook,
              Styled-Components, Emotion, Sass, Less, CSS Modules, Vite, Rollup, Webpack,
              Babel, SPA, PWA,{' '}
              <a target="_blank" href="https://html-now.github.io/">
                Web Platform
              </a>
              .
            </p>
          </article>
          <article>
            <h5>Server</h5>
            <p>
              Node.js, Express.js, Next.js, Redis, PostgreSQL, MySQL, Nginx, Apache, HTTP
              JSON API.
            </p>
          </article>
          <article>
            <h5>Testing</h5>
            <h6>Frameworks</h6>
            <p>
              Jest, Vitest, Node.js Test Runner, Mocha, Cypress, Playwright, Webdriver.io,
              Karma.
            </p>
            <h6>Assertion Libraries</h6>
            <p>Chai, Sinon.js, Enzyme, React Testing Library, Node:assert.</p>
            <h6>Types/Styles</h6>
            <p>
              Unit, Functional, End-To-End (E2E), Test Driven Development (TDD), Behavior
              Driven Development (BDD).
            </p>
          </article>
          <article>
            <h5>DevOps</h5>
            <p>
              AWS (EC2, S3, Lambda, Route 53, CloudWatch, Copilot CLI), Docker, Compose,
              GitHub Actions, Monorepos,{' '}
              <a
                target="_blank"
                href="https://nodejs.org/api/packages.html#dual-commonjses-module-packages"
              >
                Dual Packages.
              </a>
            </p>
          </article>
        </div>
      </section>
      <section>
        <h3>Experience</h3>
        <div>
          <article>
            <h4>PowerSchool (acquired Headed2) / Sr. Software Engineer II</h4>
            <h5>June 2022 &ndash; June 2023, Folsom, CA</h5>
            <ul>
              <li>
                Using the HTML Canvas element, I developed a responsive React drawing
                component that supports HiDPI displays, erasing, undoing/redoing strokes,
                and serialization of the drawing as a Blob or Data URL.
              </li>
              <li>
                Developed a React text-to-speech component that wraps both SpeechSynthesis
                and the HTMLAudioElement API&apos;s, while allowing the spoken text to be
                highlighted, and/or synthesized through{' '}
                <a target="_blank" href="https://aws.amazon.com/polly/">
                  Amazon Polly
                </a>
                .
              </li>
              <li>
                Added ability to unit test their HTML Custom Element component library,
                and created an NPM bin script to facilitate Jest configuration of
                consuming micro-frontends.
              </li>
              <li>
                Updated NPM dependencies and Webpack builds across multiple projects to
                upgrade Node.js versions in CI/CD pipelines.
              </li>
            </ul>
          </article>
          <article>
            <h4>Headed2 / Sr. Software Engineer</h4>
            <h5>July 2021 &ndash; June 2022, Sparkill, NY</h5>
            <ul>
              <li>
                Set up their first CI/CD pipeline using GitHub Actions to automate
                integration and deployment of a Scala backend, React/Webpack frontend, and
                Storybook build.
              </li>
              <li>
                Transitioned legacy code from class-based Redux workflows to React context
                and local state where applicable, while establishing similar patterns for
                new development using hooks.
              </li>
              <li>
                Using Storybook, I created a reusable React component library that laid
                the foundation for future UI development with a consistent UX and design.
              </li>
              <li>
                Developed their new homepage, global navigation, and multi-step
                registration flow for mobile and desktop.
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
