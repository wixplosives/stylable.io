import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../components/hero';
import { DevThemeControl } from '../../dev-theme-control';

export default createBoard({
    name: 'hero [dark]',
    Board: () => (
        <>
            <Hero />
            <DevThemeControl colorScheme="dark" />
        </>
    ),
    environmentProps: {
        windowHeight: 640,
    },
});