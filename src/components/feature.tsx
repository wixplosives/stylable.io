import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { st, classes } from './feature.st.css';

export function Feature({
    className,
    image,
    title,
    children,
    link,
}: {
    className?: string;
    image?: string | ((className: string) => JSX.Element);
    title: string;
    children: React.ReactNode;
    link?: string;
}) {
    const imageToRender = React.useMemo(() => {
        if (!image) {
            return null;
        } else if (typeof image === 'string') {
            return (
                <div className={classes.imageWrapper}>
                    <img className={classes.image} src={useBaseUrl(image)} alt={title} />
                </div>
            );
        } else {
            return <div className={classes.imageWrapper}>{image(classes.image)}</div>;
        }
    }, [image]);

    return (
        <div className={st(classes.root, 'col col--4', className)}>
            {link ? (
                <Link href={link}>
                    {imageToRender}
                    <h3 className={classes.title}>{title}</h3>
                </Link>
            ) : (
                <>
                    {imageToRender}
                    <h3 className={classes.title}>{title}</h3>
                </>
            )}
            <p>{children}</p>
        </div>
    );
}
