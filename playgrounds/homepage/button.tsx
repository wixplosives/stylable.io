import * as React from 'react';

import style from './button.st.css';

interface ButtonProps {
    label: string;
}

export class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <div {...style('root', {}, this.props)}>
                <span className={style.label}>{this.props.label}</span>
            </div>    
        );
    }
}
