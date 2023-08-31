import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button';
import { DevThemeControl } from '../../dev-theme-control';

export default createBoard({
    name: 'button-secondary [light]',
    Board: () => (
        <>
            <Button text="label" />
            <DevThemeControl colorScheme="light" />
        </>
    ),
    environmentProps: {
        canvasHeight: 46,
        windowWidth: 788,
        windowHeight: 527,
    },
});
