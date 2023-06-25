import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Logo from '../../static/img/branding/logo/SVG/96-logo-horizontal.svg';
import { st, classes } from './hero.st.css';

export function Hero({ className }: { className?: string }) {
    return (
        <header className={st(classes.root, 'hero hero--primary', className)}>
            <div className="container">
                <Logo className={classes.logo} />
                <div className={classes.buttons}>
                    <Link
                        className={st(classes.getStarted, 'button button--outline button--secondary button--lg')}
                        to={useBaseUrl('docs/getting-started/intro')}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
