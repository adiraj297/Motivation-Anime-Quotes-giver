const API = 'https://animechan.vercel.app/api/random';

async function fetcher(URL){
    const response = await fetch(URL);
    if(response.status == 404){
        let message = `The data cannot be accessed at this time,response status is:${response.status}`
        throw new Error(message);
    }
    const data  = await response.json();
    console.log(data);
    assigner(data)
}

const assigner = (data) => {

    let quoteName = document.getElementById("quote")
    let quoteData = data.quote;

    let animeName = document.getElementById("anime")
    let animeData = data.anime;

    let characterName = document.getElementById("character")
    let charaData = data.character;    

    animeName.innerText = `Anime Name: ${animeData}`;
    quoteName.innerText = quoteData;
    characterName.innerText = `Character name: ${charaData}`;

}

document.getElementById("clicker").addEventListener("click", () =>{
    fetcher(API).catch(error => { console.log(error.message)
    })
})
