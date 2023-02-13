const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '565b910ef1msh5378420bcc0f262p1a4229jsnb6c6b7e6740d',
		'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
	}
};

fetch('https://ebay-search-result.p.rapidapi.com/search/shoes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));