// write a functio to retrieve a blob of json
//make an ajax request ! use the 'fetch' function

// function fetchAlbums(){
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res =>res.json())
//     .then(json=>console.log(json));
// }
// fetchAlbums();

async function fetchAlbums(){
    const res=await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json =await then(res =>res.json())
    console.log(json);
}
fetchAlbums();