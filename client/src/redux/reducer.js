import {GET_VIDEOGAMES,GET_VIDEOGAMES_BY_NAME,GET_VIDEOGAMES_BY_ID,GET_GENRES} from "./types"

const initialState={ //el estado es un objeto
    getVideogames:[],
    getVideogamesByName:[],
    getVideogamesById:[],
    getGenres:[],

}

export default function rootReducer(state = initialState, action){

    switch (action.type) {
        case GET_VIDEOGAMES:
            return{...state,getVideogames:action.payload};

        case GET_VIDEOGAMES_BY_NAME:
            return{...state,getVideogamesByName:action.payload};
        
        case GET_VIDEOGAMES_BY_ID:
            return{...state,getVideogamesById:action.payload};

        case GET_GENRES:
            return{...state,getGenres:action.payload};    
        case CLEAN_DETAIL:
            return{...state,getVideogamesById:{}};   //estará bien?

            default:
                return{...state};
    }

};