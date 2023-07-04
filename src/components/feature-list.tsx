import React, { ReactHTML } from 'react';
import { st, classes } from './feature-list.st.css';
import { Decoration } from './decoration';
type NativeElementsNames = keyof ReactHTML;
type NativeElementsProps = JSX.IntrinsicElements;
type NativeProps<T extends NativeElementsNames> = NativeElementsProps[T];

export function FeatureList<TYPE extends NativeElementsNames = 'div'>({
    tagName,
    className,
    children,
    ...rest
}: { tagName?: TYPE } & NativeProps<TYPE>) {
    const Wrapper = (tagName || 'div') as any;
    return (
        <Wrapper {...rest} className={st(classes.root, className)}>
            <h2 className={classes.title}>Features</h2>
            {children}
        </Wrapper>
    );
}

function Feature({ className, title, children }: { className?: string; title: string; children: React.ReactNode }) {
    return (
        <div className={st(classes.feature, className)}>
            <Decoration className={classes['feature-decoration']} preserveAspectRatio="none" context={[]} />
            <div className={classes.content}>
                <h3 className={classes['feature-title']}>{title}</h3>
                <p className={classes['feature-desc']}>{children}</p>
            </div>
        </div>
    );
}
FeatureList.Feature = Feature;
