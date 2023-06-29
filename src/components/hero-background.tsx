import React from 'react';
/* ToDo: replace with webp - make sure quality looks good in dark mode */
import darkBg from '../../static/img/hero-dark-bg.png';
import lightBg from '../../static/img/hero-light-bg.png';
import { st, classes } from './hero-background.st.css';

export function HeroBackground({ className }: { className?: string }) {
    return (
        <>
            {/* dark mode gradient background across the screen */}
            <svg
                className={st(classes.root, { colorScheme: 'dark' }, className)}
                xmlns="http://www.w3.org/2000/svg"
                width="10vw"
                height="100%"
                style={{ position: 'absolute', left: '-100vw' }}
                preserveAspectRatio="none"
                fill="none"
                viewBox="0 210 10 510"
            >
                <image href={darkBg} />
            </svg>
            {/* dark mode image */}
            <svg
                className={st(classes.root, { colorScheme: 'dark' }, className)}
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="1395 210 461 510"
            >
                <image href={darkBg} />
            </svg>
            {/* light mode image */}
            <svg
                className={st(classes.root, { colorScheme: 'light' }, className)}
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="1230 248 461 510"
            >
                <image href={lightBg} />
            </svg>
        </>
    );
}
