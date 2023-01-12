import React from 'react';
import { st, classes } from './hero.st.css';
import { DarkLogo } from './logo-dark';
import { BG } from './bg';
export interface HeroProps {
    className?: string;
}
export const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <div className={st(classes.root, className)}>
            <BG className={classes.bg} />
            <div className={classes.content}>
                <div className="col">
                    <h1>React Components</h1>
                    <div className="lib-name"></div>
                    <p></p>
                    <div className="btn-group">
                        <button className="cta-prim">View Demo</button>
                        <button className="cta-sec">Get Started</button>
                    </div>
                </div>
                <div className="col">
                    <DarkLogo className={classes.logo} />
                </div>
            </div>
        </div>
    );
};
