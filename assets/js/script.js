let userInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-button");
let view = document.querySelector("viewItem");
let items = document.querySelector("#listItem");


searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let choices = userInput.value;


    appearlSearch(choices);

    
})


function appearlSearch(userChoice) {
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '565b910ef1msh5378420bcc0f262p1a4229jsnb6c6b7e6740d',
		'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
	}
};

fetch(`https://ebay-search-result.p.rapidapi.com/search/${userChoice}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    choiceDeatils(userChoice);

}

