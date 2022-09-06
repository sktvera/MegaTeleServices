
export const apiRequest=(link)=>{
    return fetch(`http://localhost:3300/api/buildings`);
} 

export const apiSugest=(link)=>{
    return fetch(`/api/buildings/:buildings_id`);
}
//return fetch(`https://api.giphy.com/v1/gifs/search?/tags?api_key=OBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j&q=${link}&limit=12&offset=0&rating=g&lang=en`);