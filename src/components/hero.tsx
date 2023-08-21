import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DarkLogo, LightLogo } from './hero-logo';
import { HeroBackground } from '../components/hero-background';
import { Button } from './button';
import { st, classes } from './hero.st.css';

export function Hero({ className }: { className?: string }) {
    return (
        <header className={st(classes.root, className)}>
            <div className={classes.wrapper}>
                <div className={classes.gfx}>
                    <HeroBackground className={classes.background} />
                    <DarkLogo className={st(classes.logo, { colorScheme: 'dark' })} />
                    <LightLogo className={st(classes.logo, { colorScheme: 'light' })} />
                </div>
                <div className={classes.content}>
                    <div className={classes.libName}>STYLABLE</div>
                    <h1 className={classes.title}>
                        CSS for <br />
                        Components
                    </h1>
                    <p className={classes.desc}>
                        Stylable — a CSS preprocessor that enables you to write style rules in CSS syntax, with some
                        extensions that we believe adhere to the spirit of CSS.
                    </p>
                    <nav className={classes.nav}>
                        <Button
                            type="a"
                            href={useBaseUrl('playground')}
                            className={st(classes.button, { action: 'demo' })}
                            text="View Demo"
                        />
                        <Button
                            type="a"
                            href={useBaseUrl('docs/getting-started/intro')}
                            className={st(classes.button, { action: 'intro' })}
                            callToAction
                            text="Get Started"
                        />
                    </nav>
                </div>
            </div>
        </header>
    );
}
