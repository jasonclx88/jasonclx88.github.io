import data from './content.json';
export type Block={kind:string;text:string;links:{label:string;href:string}[]};
export const content=data as Record<string,Block[]>;
export function sections(blocks:Block[],heading='h3') {const result:{title:string;items:Block[]}[]=[];for(const b of blocks){if(b.kind===heading)result.push({title:b.text,items:[]});else if(result.length)result[result.length-1].items.push(b);}return result;}
export function paperAnchor(text:string,index:number){if(text.includes('Improving Conversational Capabilities'))return 'language';if(text.includes('Measuring Diversity'))return 'diversity';if(text.includes('GT-SNT:'))return 'graph';if(text.includes('SaGIF:'))return 'trust';if(text.includes('A Review-level Sentiment'))return 'recommendation';return `publication-${index}`;}
