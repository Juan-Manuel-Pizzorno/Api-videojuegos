
export const getVideogames=()=>{
    return function(dispatch){ 
        fetch("http://localhost:3001/videogames") 
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_VIDEOGAMES,payload:data}));
    };
};

export const getVideogamesByName=()=>{
    return function(dispatch){ 
        fetch(`http://localhost:3001/videogames/name?name="${name}"`) 
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_VIDEOGAMES_BY_NAME,payload:data}));
    };
};

export const getVideogamesById=()=>{
    return function(dispatch){ 
        fetch(`http://localhost:3001/videogames/${id}`)
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_VIDEOGAMES_BY_ID,payload:data}));
    };
};

export const getGenres=()=>{
    return function(dispatch){ 
        fetch("http://localhost:3001/genres")
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_GENRES,payload:data}));
    };
};

export const cleanDetail=()=>{
    return{type:CLEAN_DETAIL};
};