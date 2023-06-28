import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { DarkLogo } from '../../../components/hero-logo';
import { DevThemeControl } from '../../dev-theme-control';

export default createBoard({
    name: 'header-logo-dark',
    Board: () => (
        <>
            <DevThemeControl colorScheme="dark" />
            <DarkLogo />
        </>
    ),
});
