import React from 'react';
import { st, classes } from './decoration.st.css';

export function Decoration({ context, className }: { context: string[]; className?: string }) {
    const contextClasses = context.map((name) => `dec--of-${name}`).join(' ');
    return (
        <svg
            className={st(classes.root, className, contextClasses)}
            xmlns="http://www.w3.org/2000/svg"
            // width="10px"
            // height="10px"
            // style={{ position: 'absolute', left: '-50vw' }}
            // preserveAspectRatio="none"
            fill="none"
            viewBox="0 0 1000 1000"
        >
            <foreignObject x="0" y="0" width="1000" height="1000">
                <div className={classes.htmlElement}></div>
            </foreignObject>
            <polygon points="5,5 195,10 185,185 10,195" />
        </svg>
    );
}
