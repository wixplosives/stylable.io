import * as React from 'react';
import { Mood, Size } from './types';
import { Eye } from './eye';
import { Mouth } from './mouth';

import style from './potato.st.css';

interface PotatoBruceProps {
    mood: Mood;
    size: Size;
    className?: string;
}

export const Potato: React.SFC<PotatoBruceProps> = (props: PotatoBruceProps) => (
    <div {...style('root', { mood: props.mood, size: props.size }, props)}>
        <div className={style.top} />
        <div className={style.eyes}>
            <Eye {...style('eye', { position: 'left'})} />
            <Eye {...style('eye', { position: 'right'})} />
        </div>
        <Mouth className={style.mouth} />
    </div>
);
