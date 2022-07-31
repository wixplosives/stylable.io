import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { useState } from "react";

function getLocationSearch() {
  return typeof window !== "undefined" ? window.location.search : "";
}

function Playground() {
  const context = useDocusaurusContext();
  const [state, setState] = useState({});
  const { siteConfig = {} } = context;
  const iframeRef = useRef(null);

  useEffect(() => {
    const handler = ({ data }) => {
      console.log("!", { data });
      if (data?.infoResponse?.location) {
        const loc = JSON.parse(data.infoResponse.location);
        history.replaceState({}, "", location.pathname + loc.search);
      }
    };
    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
    };
  });

  return (
    <Layout
      title={siteConfig.title}
      description="A modern CSS pre-processor built for components"
      noFooter={true}
      wrapperClassName={styles.playgroundWrapper}
    >
      <iframe
        ref={iframeRef}
        src={
          "https://wixplosives.github.io/stylable-playground2/" +
          getLocationSearch()
        }
        frameBorder={0}
      />
    </Layout>
  );
}

export default Playground;
