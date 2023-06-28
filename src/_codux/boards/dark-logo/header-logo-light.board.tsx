import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { LightLogo } from '../../../components/hero-logo';
import { DevThemeControl } from '../../dev-theme-control';

export default createBoard({
    name: 'header-logo-light',
    Board: () => (
        <>
            <DevThemeControl colorScheme="dark" />
            <LightLogo />
        </>
    ),
});
