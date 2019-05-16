
const AlbumData = function() {

    return fetch("http://rallycoding.herokuapp.com/api/music_albums")
        .then( (data)=>data)
        .then( (response) => response.json());

};

export default AlbumData;