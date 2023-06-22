import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import './playground.st.css';

export default function Playground() {
    const context = useDocusaurusContext();
    const frame = usePlaygroundFrame();
    return (
        <Layout
            title={context.siteConfig.title}
            description="A modern CSS pre-processor built for components"
            noFooter={true}
            wrapperClassName={styles.playgroundWrapper}
        >
            <iframe ref={frame} frameBorder={0} />
        </Layout>
    );
}

function usePlaygroundFrame() {
    useSyncUrlToPlaygroundFrame();
    const frame = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        if (frame.current) {
            frame.current.src =
                typeof window !== 'undefined'
                    ? 'https://wixplosives.github.io/stylable-playground2/' + window.location.search
                    : 'about:blank';
        }
    }, []);
    return frame;
}

function useSyncUrlToPlaygroundFrame() {
    useEffect(() => {
        const handler = ({ data }: MessageEvent) => {
            if (data?.infoResponse?.location) {
                const loc = JSON.parse(data.infoResponse.location);
                history.replaceState({}, '', location.pathname + loc.search);
            }
        };
        window.addEventListener('message', handler);
        return () => {
            window.removeEventListener('message', handler);
        };
    });
}
