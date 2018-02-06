import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from './button';
import styles from './index.st.css';

if (document.body.querySelector('#container')) {
    document.body.querySelector('#container')!.remove();
}

const container = document.body.appendChild(document.createElement('div'));
container.setAttribute('id','container');

ReactDOM.render(
    <div className={styles.root}>
        <Button {...styles('triple-layer')} label="Triple Layer" />
        <Button {...styles('notes-button')} label="Notes Button" />
        <Button {...styles('gradient-animation')} label="Gradient Animation" />
    </div>
, container);
