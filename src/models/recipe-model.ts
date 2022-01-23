export interface Recipe{
    from: number | undefined;
    to: number | undefined;
    hits: Hits[]
}
export interface Hits{
    recipe:{
        label: string,
        image: string 
        url: string,
        ingredients:[
            {
                text: string
            }
        ],
        }
    }

    