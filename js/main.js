var quoetsList = [
  "“Be yourself; everyone else is already taken.”",

  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",

  "“In three words I can sum up everything I've learned about life: it goes on.”",
];

function displayQuotes() {

  
  var quoets = document.getElementById("quoets");

  var randomQuotes = quoetsList[Math.floor(Math.random() * quoetsList.length)];

  quoets.innerHTML = randomQuotes;
}
