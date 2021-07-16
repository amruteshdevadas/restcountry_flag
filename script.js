var search = document.createElement("input")
search.type="text"
search.placeholder="Search for a country"
search.className="search-bar"
document.body.append(search)
var header = document.createElement("h2")
header.innerHTML="Where in the world"
header.className="header"
document.body.append(header)


const xhr = new XMLHttpRequest();
const url = 'https://restcountries.eu/rest/v2/all';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) 
  {
    var users = xhr.response;
  }
  const userList = document.createElement("div");
  userList.className="hello";


  users.forEach((user) => 
{
  const userContainer = document.createElement("div");
  userContainer.className="hello1"
  userContainer.innerHTML = `
    <img class="image" src=${user.flag}> </img>
    <h6 class="user-name">${user.name}</h6>
    <p class = "text"> Population :<span class="text1">${user.population} </span> </p>
    <p class = "text"> Region : <span class="text1">${user.region} </span></p>
    <p class = "text"> Capital : <span class="text1">${user.capital} </span></p>
    `;
  userList.append(userContainer);
});

document.body.append(userList);
};
xhr.open('GET', url);
xhr.send();
