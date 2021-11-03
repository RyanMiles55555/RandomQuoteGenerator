/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Project completed by Ryan in November 2021
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let displayQuotes = [];

/***
 * `quotes` array
 * An array of objects
 * Each object contains a quote, source, citation, and year.
 ***/
let quotes = [
  {
    quote:
      "No shepherd, and one herd! Everyone wants the same, everyone is the same: whoever feels different goes wilingly into the madhouse.",
    source: "Friedreich Nietzsche",
    citation: "Thus Spoke Zarathustra",
    year: 1885,
  },

  {
    quote: "I’m a survivor. We’re a dying breed.",
    source: "Xavier",
    citation: "Xavier: Renegade Angle",
    year: 2007,
  },

  {
    quote:
      "It's easier to imagine the end of the world than the end of capitalism.",
    source: "Mark Fisher",
    citation: "Capitalist Realism",
    year: 2009,
  },

  {
    quote:
      "It’s hard to understand other people, to know what’s hidden in their hearts, and without the assistance of alcohol it might never be done at all.",
    source: "Michel Houellebecq",
    citation: "Submission",
    year: 2015,
  },

  {
    quote: "Integrity has no need of rules.",
    source: "Albert Camus",
    citation: "The Rebel",
    year: 1951,
  },
];

/***
 * `getRandomQuote` function
 *  Returns a quote object from a random index of the quotes array.
 ***/
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `printQuote` function
 *  Calls get random quote to get a quote
 *  Formats and adds the quote to the HTML
 ***/
function printQuote() {
  let theQuote = getRandomQuote();
  let theHTML = `<p class='quote'> ${theQuote.quote} </p> <p class='source'>${theQuote.source}`;

  if (theQuote.citation != null) {
    theHTML += `<span class='citation'> ${theQuote.citation} </span>`;
  }
  if (theQuote.year != null) {
    theHTML += `<span class='year'> ${theQuote.year} </span>`;
  }

  theHTML += "</p>";

  document.getElementById("quote-box").innerHTML = theHTML;
  console.log(theQuote.quote);
}

/***
 * Show Another Quote button event listener
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
