// # 📊 Project: Simple API 1

// ### Goal: Display data returned from an api




//find api.     https://api.thedogapi.com/v1
//getkey.       doesnt require key
// run it through postman.co     came back as 200 ok
//build event listener 
//make function 
// call function and set variable to select parameters
//console log to make sure it works.
//create a fetch and json return
//console log data to decide what parameters can pull
//console log individual ones
//catch to return errors 

document.querySelector('button').onclick = dogSearch
// document.querySelector('button').onclick = dogImgSearch

function dogSearch() {


    const input = document.querySelector('input').value;
    const url = `https://api.thedogapi.com/v1/breeds/search?q=${input}`;

    fetch(url)
        .then((res) => res.json())
        .then((data => {
            console.log(data);

            document.querySelector('h2').innerText = data[0].name;
            document.querySelector('.breedGroup').innerText = data[0].breed_group;
            document.querySelector('.height').innerText = data[0].height.metric.split(" - ").map(v => (v * 0.393701).toFixed(1)).join(" - ") + " in";//used chatGpt for forumla conversion
            document.querySelector('.weight').innerText = data[0].weight.metric.split(" - ").map(v => (v * 2.20462).toFixed(1)).join(" - ") + " lbs";//^^ ^^ ^^
            document.querySelector('.lifeSpan').innerText = data[0].life_span;
            document.querySelector('.mood').innerText = data[0].temperament;

        }))
        .catch((err) => console.error(err));
}
// function dogImgSearch() {
//     const input = document.querySelector('input').value;
//     const url = `"https://api.thedogapi.com/v1/images/search"?q=${input}`;

//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data); // Array of breeds matching the input
//         })
//         .catch((err) => console.error(err));
// }

