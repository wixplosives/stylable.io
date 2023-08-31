import React from 'react';
import { st, classes } from './feature.st.css';
import { Decoration } from './decoration';

export const useFeatures = ({ features }: { features: { title: string; desc: string }[] }) => {
    const nodes = features.map(({ title, desc }) => <Feature title={title}>{desc}</Feature>);
    const wrapperStyle = {
        counterReset: 'feature',
    };
    return { nodes, wrapperStyle };
};

function Feature({ className, title, children }: { className?: string; title: string; children: React.ReactNode }) {
    return (
        <div className={st(classes.root, className)}>
            <Decoration className={classes.decoration} preserveAspectRatio="none" context={[]} />
            <div className={classes.content}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.desc}>{children}</p>
            </div>
        </div>
    );
}
