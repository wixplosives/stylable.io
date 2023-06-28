import React, { useLayoutEffect } from 'react';
import '../css/theme.st.css';

export function DevThemeControl({ colorScheme }: { colorScheme: 'light' | 'dark' }) {
    const [scheme, setScheme] = React.useState(colorScheme);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', scheme);
        document.body.setAttribute('data-theme', scheme);
    }, [scheme]);
    return (
        <div
            style={{
                position: 'fixed',
                color: 'black',
                background: 'white',
                outline: '1px solid black',
                top: '1em',
                padding: '0.3em',
                borderRadius: '5px',
                boxShadow: '2px 2.5px 10px #646A68',
            }}
        >
            <label>
                <span>color scheme </span>
                <select onChange={({ currentTarget }) => setScheme(currentTarget.value as typeof scheme)}>
                    <option value="light" selected={scheme === 'light'}>
                        light
                    </option>
                    <option value="dark" selected={scheme === 'dark'}>
                        dark
                    </option>
                </select>
            </label>
        </div>
    );
}
