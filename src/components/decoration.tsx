import React from 'react';
import { st, classes } from './decoration.st.css';

type PreserveAspectRatio =
    | 'none'
    | 'xMinYMin'
    | 'xMidYMin'
    | 'xMaxYMin'
    | 'xMinYMid'
    | 'xMidYMid'
    | 'xMaxYMid'
    | 'xMinYMax'
    | 'xMidYMax'
    | 'xMaxYMax';

export function Decoration({
    context,
    className,
    preserveAspectRatio,
}: {
    context: string[];
    className?: string;
    preserveAspectRatio?: PreserveAspectRatio;
}) {
    const contextClasses = context.map((name) => `dec--of-${name}`).join(' ');
    return (
        <svg
            className={st(classes.root, className, contextClasses)}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio={preserveAspectRatio}
            fill="none"
            viewBox="0 0 1000 1000"
        >
            <foreignObject x="0" y="0" width="1000" height="1000">
                <div className={classes.htmlElement}></div>
            </foreignObject>
            <path className={classes.path} />
        </svg>
    );
}
