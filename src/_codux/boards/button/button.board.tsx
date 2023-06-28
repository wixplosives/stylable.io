import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button';
import '../../../css/theme.st.css';
import { DevThemeControl } from '../../dev-theme-control';

export default createBoard({
    name: 'button-cta-dark',
    Board: () => (
        <>
            <Button text="label" callToAction />
            <DevThemeControl colorScheme="dark" />
        </>
    ),
    environmentProps: {
        canvasHeight: 46,
        windowWidth: 788,
        windowHeight: 527,
    },
});
