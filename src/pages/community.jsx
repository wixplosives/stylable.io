import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function CardWithImageSrc({ imageUrl, link, title, children }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link href={link}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3 className="text--center">{title}</h3>
      </Link>
      <p className="text--center">{children}</p>
    </div>
  );
}
function CardWithThumb({ link, thumb, title, children }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link href={link}>
        <div className="text--center">{thumb}</div>
        <h3 className="text--center">{title}</h3>
      </Link>
      <p className="text--center">{children}</p>
    </div>
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
      <main>
        <div className={clsx("container", styles.communityPageTitle)}>
          <h2>Join the Community</h2>
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <CardWithThumb
                link="https://github.com/wix/stylable"
                title="GitHub"
                thumb={
                  <svg
                    className={styles.featureImage}
                    width="100%"
                    height="100%"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                      transform="scale(64)"
                    />
                  </svg>
                }
              >
                Track our development, search open issues, report new ones, and
                contribute back to the project
              </CardWithThumb>
              <CardWithImageSrc
                link="https://twitter.com/stylableio"
                title="Twitter"
                imageUrl="img/twitter-logo.svg"
              >
                Follow our Twitter to stay up to date with the latest happenings
                in Stylable
              </CardWithImageSrc>
              <CardWithImageSrc
                link="https://discord.gg/C5ZhENSbV7"
                title="Discord"
                imageUrl="img/discord-Logo-color.svg"
              >
                Join our Discord community, where you can chat with us, ask
                questions, and showcase your work
              </CardWithImageSrc>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;