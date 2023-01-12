import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Hero } from '../components/hero';

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <main>
            <Hero />
        </main>
    );
}

export default Home;
