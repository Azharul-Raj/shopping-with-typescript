
export const Style = {
    theme1: {
        primary:"#F5DB2B",
        secondary:'#8AA9F5'
    },
    theme2: {
        primary:"#FFFB68",
        secondary:'#DE3E5F'
    }
}

export type Todo = {
    id: number
    todo: string
    isComplete:boolean
}
export type Todos = {
    // todos: string[] | {id:number,todo:string,isComplete:boolean}
    id: number
    todo:string
    todos: string[]
    isComplete:boolean
}