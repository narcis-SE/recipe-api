export interface Recipe{
    hits: Hits[]
}
export interface Hits{
    recipe:{
        label: string,
        images: {
            SMALL: {
                url: string
            }
            REGULAR: {
                url: string
            }
        }
        url: string,
        ingredients:[
            {
                text: string
            }
        ]
        }
    }

    