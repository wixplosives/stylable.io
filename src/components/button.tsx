import React from 'react';
import { st, classes } from './button.st.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'button';
    text?: string;
    icon?: (iconClassName: string) => React.ReactNode;
    callToAction?: boolean;
}
interface ButtonAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    type: 'a';
    text?: string;
    icon?: (iconClassName: string) => React.ReactNode;
    callToAction?: boolean;
}

export function Button(props: ButtonProps | ButtonAnchorProps) {
    const { className, onClick, text, icon, callToAction, type, ...attrs } = props;
    const iconChild = !icon ? <span className={classes.icon}></span> : icon(classes.icon);
    const textChild = text ? <span className={classes.text}>{text}</span> : null;
    if (props.type === 'a') {
        return (
            <a {...(attrs as ButtonAnchorProps)} className={st(classes.root, { callToAction }, className)}>
                {iconChild}
                {textChild}
            </a>
        );
    } else {
        return (
            <button {...(attrs as ButtonProps)} className={st(classes.root, { callToAction }, className)}>
                {iconChild}
                {textChild}
            </button>
        );
    }
}
