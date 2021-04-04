//console.log("Is our script file working?");

//load airtable library called "airtable";
//var and let are interchangable
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable lib, connect to base using API key
var base = new Airtable({ apiKey: "key9WKt4UVy61sEco" }).base(
  "appOoYlNmnCOR7krL"
);

//get collection base, select all records
//specify functions that will recieve the data

base("pink").select({}).eachPage(gotPageOfItems, gotAllItems);

var items = [];

function gotPageOfItems(records, fetchNextPage) {
  console.log("gotPageOfItems()");
  // add the records from this page to our books array
  items.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllItems(err) {
  console.log("gotAllItems()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading items");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogItems();
  showItems();
}

// just loop through the books and console.log them
function consoleLogItems() {
  console.log("consoleLogItems()");
  items.forEach((item) => {
    console.log("Item:", item);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showItems() {
  console.log("showItems()");
  items.forEach((item) => {
    var itemName = document.createElement("h2");
    itemName.innerText = item.fields.item_name;
    document.body.append(itemName);
  });
}

// creating new div container
// item info will go here
var itemContainer = document.createElement("div");
itemContainer.classList.add("item-container");
document.querySelector(".contianer").append(itemContainer);

// get category field from airtable
// loop through array and each genre as
// a class to the container

var itemCategory = item.fields.category;
itemCategory.forEach(function(category) {
  
}) 