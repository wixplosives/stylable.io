import { PackageBuilder } from 'stylable-playground-recepies';
import { LocalFileSystem } from 'kissfs/dist/src/local-fs';
import { isFile } from 'kissfs';

const fs = new LocalFileSystem(__dirname);
console.log('building assets');
async function shallowCopyDir(from:string,to:string){
    const dirContent = await fs.loadDirectoryChildren(from);
    await Promise.all(dirContent.map(async (fileOrDir)=>{
        if(isFile(fileOrDir)){
            await copyFile(fileOrDir.fullPath,to+'/'+fileOrDir.name)
        }
    }));
}

async function copyFile(from:string,to:string){
    const fileContent = await fs.loadTextFile(from);
    await fs.saveFile(to, fileContent);
}
shallowCopyDir('node_modules/rabbit-playground/dist','js/playground');
copyFile('node_modules/rabbit-playground/LICENSE','js/playground/LICENSE');
copyFile('node_modules/rabbit-playground/dist/playground-recipe.json','recipes/playground-recipe.json');

copyFile('node_modules/tippy.js/dist/tippy.all.min.js','js/vendor/tippy/tippy.all.min.js');
copyFile('node_modules/tippy.js/LICENSE','js/vendor/tippy/LICENSE');


copyFile('node_modules/prismjs/prism.js','js/vendor/prism/prism.js');
copyFile('node_modules/prismjs/LICENSE','js/vendor/prism/LICENSE');