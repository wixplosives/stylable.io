import React from 'react';
import { classes } from './responsive-embed.st.css';

export function ResponsiveEmbed({ src }) {
    return (
        <div className={classes.root}>
            <iframe src={src} frameBorder="0" allowFullScreen></iframe>
        </div>
    );
}
