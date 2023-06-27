import React from 'react';
import { st, classes } from './button.st.css.js';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    text?: string;
    icon?: (iconClassName: string) => React.ReactNode;
    callToAction?: boolean;
}

export function Button({ className, onClick, text, icon, callToAction, ...attrs }: ButtonProps) {
    return (
        <button {...attrs} className={st(classes.root, { callToAction }, className)} onClick={onClick}>
            {!icon ? <span className={classes.icon}></span> : icon(classes.icon)}
            {text ? <span className={classes.text}>{text}</span> : null}
        </button>
    );
}
