declare module '*.st.css' {
    export * from '@stylable/runtime/stylesheet';

    const defaultExport: unknown;
    export default defaultExport;
}
declare module '*.png' {
    const urlToFile: string;
    export default urlToFile;
}
