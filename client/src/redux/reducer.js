import {GET_VIDEOGAMES,GET_VIDEOGAMES_BY_NAME,GET_VIDEOGAMES_BY_ID,GET_GENRES,CLEAN_DETAIL} from "./types"

const initialState={ //el estado es un objeto
    videogames:[],
    videogamesByName:[],
    videogameById:[],
    allGenres:[],

}

const rootReducer =(state = initialState, {type, payload})=>{

    switch (type) {
        case GET_VIDEOGAMES:
            return{...state,videogames:payload};

        case GET_VIDEOGAMES_BY_NAME:
            return{...state,videogamesByName:payload};
        
        case GET_VIDEOGAMES_BY_ID:
            return{...state,videogameById:payload};

        case GET_GENRES:
            return{...state,allGenres:payload};    


            default:
                return{...state};
    }

};

export default rootReducer;