import React from 'react';
import { classes } from './responsive-embed.st.css';

export function ResponsiveEmbed({ src }: { src: string }) {
    return (
        <div className={classes.root}>
            <iframe src={src} frameBorder="0" allowFullScreen></iframe>
        </div>
    );
}
