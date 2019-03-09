/******************************************
A Random Quote Generator
 - Kieran Shepherd
 - 09/03/2019
******************************************/

/*Initializes an array of quote objects*/
var quotes = [
	{ quote:"I'm going to make him an offer he can't refuse.", source:"The Godfather", categorization:"Mafia", actor:"Marlon Brando" },
	{ quote:"What we've got here is failure to communicate.", source:"Cool Hand Luke", citation:"Top 100 Movie Quotes", year:1967 },
	{ quote:"You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?", source:"Dirty Harry", actor:"Clint Eastwood" },
	{ quote:"Get your stinking paws off me, you damned dirty ape.", source:"Planet of the Apes", categorization:"Science Fiction" },
	{ quote:"Open the pod bay doors, HAL.", source:"2001", citation:"Top 100 Movie Quotes", year:1968 },
	{ quote:"Who's on first.", source:"The Naughty Nineties", citation:"Top 100 Movie Quotes", year:1945 },
	{ quote:"You don't understand! I coulda had class. I coulda been a contender.", source:"On the Waterfront", citation:"Top 100 Movie Quotes", year:1954 },
	{ quote:"I love the smell of napalm in the morning.", source:"Apocalypse Now", categorization:"War", actor:"Robert Duvall" },
	{ quote:"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!", source:"The Treasure of the Sierra Madre", citation:"Top 100 Movie Quotes", year:1948 },
	{ quote:"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.", source:"Animal Crackers" }
];

/*Returns a random quote object from the quotes array*/
function getRandomQuote(quotes) {
	var rand = Math.floor(Math.random()*10);
	return quotes[rand];
}

/*Gets a random object from the quotes array and builds an HTML string for output. Adds to page using innerHTML.*/
function printQuote() {
	
	var colourBackgroundArray = ["lightgreen", "lightblue", "lightgrey"];
	var colourButtonArray = ["green", "blue", "grey"];
	var randColourIndex = Math.floor(Math.random()*colourBackgroundArray.length + 1)
	var randBackgroundColour = colourBackgroundArray[randColourIndex];
	var randButtonColour = colourButtonArray[randColourIndex];
	document.body.style.backgroundColor = randBackgroundColour;
	document.getElementById('loadQuote').style.backgroundColor = randButtonColour;
	
	var random_quote = getRandomQuote(quotes);
	var strHTML = '';
	strHTML += '<p class="quote">';
	strHTML += random_quote.quote;
	strHTML += '</p><br><p class="source">';
	strHTML += random_quote.source;
	if(random_quote.actor!=null) {
		strHTML += " - "+random_quote.actor;
	}
	if(random_quote.citation!=null) {
		strHTML += '<span class="citation">';
		strHTML += random_quote.citation;
		strHTML += '</span>';
	}
	if(random_quote.year!=null) {
		strHTML += '<span class="year">';
		strHTML += random_quote.year;
		strHTML += '</span>';
	}
	if(random_quote.categorization!=null) {
		strHTML += '<span class="categorization">';
		strHTML += random_quote.categorization;
		strHTML += '</span>';
	}
	strHTML += '</p>';
	document.getElementById("quote-box").innerHTML = strHTML;
}

/*Run printQuote every 5 seconds*/
setInterval(printQuote, 5000);

/*Run printQuote on button click*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

