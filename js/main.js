// //complex API

// //find api.     https://musicbrainz.org/ws/2/artist?query=drake&fmt=json
// //find second api https://api.lyrics.ovh/v1/${artist}/NOKIA`
// //getkey.       doesnt require key
// // run it through postman.co     came back as 200 ok
// //build event listener 
// //make function 
// // call function and set variable to select parameters
// //console log to make sure it works.
// //create a fetch and json return
// //console log data to decide what parameters can pull
// //console log individual ones
// //catch to return errors 

// document.querySelector('button').onclick = songSearch
// // document.querySelector('button').onclick =

// function songSearch() {


//     let artist = document.querySelector('input').value;
//     const url = `https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json`;

//     fetch(url)
//         .then((res) => res.json())
//         .then((data => {
//             console.log(data);

//             document.querySelector('h4').innerText = data.artists[0].aliases[1].name;

//             let nameOfArtist = data.artists[0]
//             findSongs(nameOfArtist)
//         }))
//         .catch(err => console.error(err));
// }

// function findSongs(nameOfArtist) {
//     const songUrl = `https://itunes.apple.com/search?term=${nameOfArtist}&entity=song&limit=5`
//     fetch(songUrl)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         document.querySelector('h4').innerText = data.artists[0].aliases[1].name;



//         })
//         .catch(err => console.error(err));
// }




///used chat gpt to see why my first bloack of code above was not pulling songs 
// from 'input' artist to second function,
//  and the result was the first function was passing [object obect] 
// into song find in second function 
// after review i was able to understand that 
// it was pulling the artist alias i set in my first fetch / print to DOM 
// into song find instead of artist name 
// 
document.querySelector('button').onclick = songSearch;

function songSearch() {
    let artist = document.querySelector('input').value.trim();
    const url = `https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            const artistName = data.artists[0].name;
            document.querySelector('h4').innerText = data.artists[0].aliases[1].name;

            findSongs(artistName);
        })
        .catch(err => console.error("Error fetching artist:", err));
}

function findSongs(artistName) {
    const songUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(artistName)}&entity=song&limit=5`;

    fetch(songUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Display song names just to confirm it’s working
            const songs = data.results.map(song => song.trackName).join('\n');
            document.querySelector('h5').innerText = `Songs by ${artistName}:\n${songs}`;
        })
        .catch(err => console.error("Error fetching songs:", err));
}
