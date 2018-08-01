import { LocalFileSystem } from 'kissfs/dist/src/local-fs';

const fs = new LocalFileSystem(__dirname);
console.log('building assets');

async function copyFile(from:string,to:string){
    const fileContent = await fs.loadTextFile(from);
    await fs.saveFile(to, fileContent);
}

async function copyAndMinify() {
    console.log('### Copying bundles');
    await Promise.all([
        copyFile('node_modules/tippy.js/dist/tippy.all.min.js','js/vendor/tippy/tippy.all.min.js'),
        copyFile('node_modules/tippy.js/LICENSE','js/vendor/tippy/LICENSE'),
        copyFile('node_modules/prismjs/prism.js','js/vendor/prism/prism.js'),
        copyFile('node_modules/prismjs/LICENSE','js/vendor/prism/LICENSE')
    ]);
}
copyAndMinify();