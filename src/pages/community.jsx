import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Logo from "../../static/img/branding/logo/SVG/96-logo-horizontal.svg";

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

function Community() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="A modern CSS pre-processor built for components"
    >
      {/* <Header /> */}
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature title="GitHub" imageUrl="img/component.svg">
                track development, issues, contributions.
              </Feature>
              <Feature title="Twitter" imageUrl="img/api.svg">
                follow the latest news.
              </Feature>
              <Feature title="Discord" imageUrl="img/stethoscope.svg">
                join the community, chat with us, ask questions
              </Feature>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;
