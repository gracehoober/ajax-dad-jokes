"use strict";
//GLOBAL variables
const $jokeArea = $(".joke-list");
const DAD_JOKE_BASE_URL = 'https://icanhazdadjoke.com/';
const USER_AGENT = "Grace-Hoober: https://github.com/gracehoober/ajax-dad-jokes";
// access jokes on API
async function getJoke(){
  let retrieveJoke = await fetch(`${DAD_JOKE_BASE_URL}`, {method:"GET", headers:{Accept: "application/json"}});
  let joke = await retrieveJoke.json();
  let jokeText = joke.joke;
  console.log("retrieved joke ", jokeText);
  return jokeText;
}

//dynamically add 10 dad jokes to the page
function addJokes(){
  for(let i = 0; i < 1; i++){
    let joke = getJoke();
    $jokeArea.append(joke);
  }
}

//once joke is added add two buttons

//calculate net score for each joke

// add net score to appropriate joke

//click handlers
  // up click
  //down click

  $(window).on('load', addJokes);