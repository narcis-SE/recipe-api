export interface Recipe{
    hits: Hits[]
}
export interface Hits{
    recipe:{
        label: string,
        image: string 
        // {
        //     SMALL: {
        //         url: string
        //     }
        //     REGULAR: {
        //         url: string
        //     }
        // }
        url: string,
        ingredients:[
            {
                text: string
            }
        ],
        }
    }

    