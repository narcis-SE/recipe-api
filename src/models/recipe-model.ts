export interface Recipe{
    hits: Hits[]
}
export interface Hits{
    recipe:{
        label: string,
        image: string
    }

    ingredients:[
        {
            text: string 
        }
    ]
}