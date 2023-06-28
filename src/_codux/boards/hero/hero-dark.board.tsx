import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../components/hero';

export default createBoard({
    name: 'Hero-dark',
    Board: () => <Hero />
});
