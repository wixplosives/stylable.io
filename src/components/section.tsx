import React from 'react';
import { st, classes } from './section.st.css';
import type { NativeProps } from './native';

export function Section({ className, children, ...rest }: NativeProps<'section'>) {
    return (
        <section {...rest} className={st(classes.root, className)}>
            {children}
        </section>
    );
}
