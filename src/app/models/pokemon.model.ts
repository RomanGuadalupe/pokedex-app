export interface IPokemon {
    id: number;
    name: string;
    type1: string;
    // ?: indica que es opcional
    type2?: string;
    sprite: string;
    height: number;
    weight: number;
    abilities: string[];
    hidenAbility: string;
    //stat: {
      //  base_stat: number;
        //name: string;
    //}

    stat: IStat[] 
            
    }
