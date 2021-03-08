import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Logo from "../../static/img/branding/logo/SVG/96-logo-horizontal.svg";

function ResponsiveEmbed({ src }) {
  return (
    <div className={clsx(styles.responsiveEmbed)}>
      <iframe src={src} frameborder="0" allowfullscreen></iframe>
    </div>
  );
}

function Feature({ imageUrl, title, children }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Header() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Logo className={styles.mainLogo} />
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/getting-started/intro")}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="A modern CSS pre-processor built for components"
    >
      <Header />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature title="CSS Superset" imageUrl="img/component.svg">
                Extending CSS so that it is easier to use in a component
                ecosystem, but without losing any of the declarative, familiar,
                static and fast aspects of CSS.
              </Feature>
              <Feature title="Style API" imageUrl="img/api.svg">
                Each component exposes a Style API that maps its internal parts
                and states so you can reuse components across teams without
                sacrificing stylability or scalability.
              </Feature>
              <Feature title="Type Safety" imageUrl="img/stethoscope.svg">
                Provide the ability to see errors at build time or even while
                working in your IDE. Wave goodbye to silent run-time breakage
                misery!
              </Feature>
              <Feature title="Performant" imageUrl="img/checklist.svg">
                Perform build-time transpilation and require only a minimal
                runtime. Use custom states and properties for dynamic
                interactions.
              </Feature>
              <Feature
                title="Mixins &amp; Formatters"
                imageUrl="img/prototype.svg"
              >
                Easily create complex designs using CSS or JavaScript and reuse
                them across projects.
              </Feature>
              <Feature title="Developer Tooling" imageUrl="img/tool.svg">
                Use our language-intelligence IDE extension for a better
                development experience including completions, defintions,
                hinting, diagnostics and more.
              </Feature>
            </div>
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2>What is Stylable?</h2>
            <p>
              At <Link to="https://www.wix.engineering/">Wix</Link>, we{" "}
              <span className={styles.heart}>&hearts; </span>
              CSS. Its simple, declarative syntax that is native in browsers is
              easily the fastest way to add styles to web pages and web apps.
              But when writing CSS that is scoped to individual components,
              developers have to maintain highly-specific selectors, using
              elaborate conventions to fake namespacing. Writing and maintaining
              CSS across large teams and large projects can be tricky.
            </p>
            <p>
              We also <span className={styles.heart}>&hearts;</span> TypeScript.
              TypeScript helps us manage these large projects, exposing at
              build-time what we could once only see at run-time.
            </p>
            <div>
              We want to give CSS a <em>type system</em> &mdash; to do for CSS
              what TypeScript does for JavaScript.
              <ul>
                {/* <li>
                  <strong>Extend CSS</strong> so that it is easier to use in a
                  component ecosystem, but without losing any of the
                  declarative, familiar, static and fast aspects of CSS.
                </li> */}
                {/* <li>
                  Create <strong>CSS Macros</strong> with JavaScript and use
                  them at build time.
                </li> */}
                {/* <li>
                  Use language services like <strong>Code Completion</strong>{" "}
                  and <strong>Validation</strong>.
                </li> */}
                {/* <li>
                  Each component exposes a Style API that maps its internal
                  parts and states so you can reuse components across teams
                  without sacrificing stylability or scalability.
                </li> */}
                {/* <li>
                  Provide the ability to see our{" "}
                  <strong>errors at build</strong> time or even while{" "}
                  <Link to="https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence">
                    working in your IDE
                  </Link>
                  . Wave goodbye to silent run-time breakage misery!
                </li> */}
              </ul>
            </div>
            So we created <strong>Stylable</strong> &mdash; a CSS preprocessor
            that enables you to write style rules in CSS syntax, with some
            extensions that we believe adhere to the spirit of CSS.
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <h2>What Does Stylable Do?</h2>
            <ul>
              <li>
                Stylable scopes styles to components so they don’t "leak" and
                clash with other styles.
              </li>
              <li>
                Stylable enables custom pseudo-classes and pseudo-elements that
                abstract the internal state and structure of a component. These
                can then be styled externally. For example, you can style the
                label inside a button, or style the play button of a video
                player from outside these components.
              </li>
              <li>
                At build time, the preprocessor converts the Stylable CSS into
                flat, static, valid, vanilla CSS that works cross-browser.
              </li>
            </ul>
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2>Tooling</h2>
            <img
              className={styles.lspDemo}
              src="img/stylable-lsp.gif"
              alt="Stylable Intelligence Demo"
            />
            Treating CSS as a type system opens up a whole new world of tooling.
            You can:
            <ul>
              <li>
                Get code completion that hints at the internal structure of
                components.
              </li>
              <li>Get types for your parameters. And so much more.</li>
            </ul>
            <strong>Stylable</strong> enhances the styling development process.
            To get the full <strong>Stylable</strong> experience, install our{" "}
            <Link to="https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence">
              VSCode Intellisense Extension
            </Link>
            . It supports code completions, diagnostics, go to definitions,
            syntax highlighting and more.
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <h2>Videos</h2>
            <h3>Introduction to Stylable</h3>
            <ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/Cx-JyJ9eXks?rel=0" />
            <h3>The Official Stylable Musical!</h3>
            <ResponsiveEmbed src="https://www.youtube.com/embed/jK88TqyXSWs?rel=0" />
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2>Documentation</h2>
            <Link to="./docs/getting-started/intro">
              Learn more about Stylable
            </Link>{" "}
            and get started with step by step instructions and code examples.
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <h2>Demo Project</h2>
            <p>
              You can download our{" "}
              <Link to="https://github.com/wix/potato-bruce">
                Learn more about <strong>Mr. Potato Bruce project</strong>
              </Link>{" "}
              from GitHub. It's a{" "}
              <Link to="https://potatobruce.io/">
                Learn more about <strong>demo application</strong>
              </Link>{" "}
              showcasing the features and typed style API. Bruce explains it in
              his React Europe 2018 talk:
            </p>
            <div>
              <ResponsiveEmbed src="https://www.youtube.com/embed/YRhJZZsTEvQ" />
            </div>
            <p className={styles.playWithIt}>
              Play with it and let us know what you think!
            </p>
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div>
              <h2>Shut up and take my money!</h2>
              <p>
                No need! <strong>Stylable</strong> is open-source. Take it, use
                it, make your development easier and your apps faster. Viva CSS,
                and welcome <strong>Stylable</strong>. We hope you like it.
              </p>
              <p>
                Click here to access the BSD-licensed{" "}
                <Link to="https://github.com/wix/stylable">
                  Stylable GitHub project
                </Link>
                .
              </p>
              <blockquote className={styles.quote}>
                <p>
                  New ideas will come along, but they will extend CSS rather
                  than replace it. I believe that the CSS code we write today
                  will be readable by computers 500 years from now.
                </p>
                <small>
                  &mdash;{" "}
                  <Link to="https://dev.opera.com/articles/css-twenty-years-hakon/">
                    Håkon Wium Lie
                  </Link>
                  , co-creator of CSS.
                </small>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
