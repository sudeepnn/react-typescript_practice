export type priortity='high'|'low'|'medium'
export type data={
    id?:number,
    text:String,
    classprio?:priortity
}

export enum color{
    high='red',
    medium='orange',
    low='rgb(82, 220, 82)'

}
