import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Playground() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="A modern CSS pre-processor built for components"
      noFooter={true}
    >
      <iframe
        src="https://wixplosives.github.io/stylable-playground2/?filePath=%2Fsrc%2Fapp.st.css&type=code&stDebug=true"
        frameBorder={0}
        style={{ height: "100%", width: "100%" }}
      />
    </Layout>
  );
}

export default Playground;
