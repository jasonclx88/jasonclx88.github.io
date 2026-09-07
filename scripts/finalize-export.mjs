import {copyFileSync,mkdirSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const out=resolve('dist/client');
for(const route of ['publications','bio','group','activities','contact','releaseddata','news']){
 const html=resolve(out,route+'.html');if(!existsSync(html))throw new Error('Missing exported page: '+route);
 mkdirSync(resolve(out,route),{recursive:true});copyFileSync(html,resolve(out,route,'index.html'));
}
writeFileSync(resolve(out,'.nojekyll'),'');
console.log('Static pages ready in dist/client, including directory URLs and legacy index.html links.');
