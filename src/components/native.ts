import type { ReactHTML } from 'react';

export type NativeElementsNames = keyof ReactHTML;
export type NativeElementsProps = JSX.IntrinsicElements;
export type NativeProps<T extends NativeElementsNames> = NativeElementsProps[T];
