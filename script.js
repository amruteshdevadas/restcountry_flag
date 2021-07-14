var header = document.createElement("h2")
header.innerHTML="National Flags of the Counrties"
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
    <h3 class="user-name">${user.name}</h3>
    <img class="image" src=${user.flag}> </img>

    `;
  userList.append(userContainer);
});

document.body.append(userList);
};
xhr.open('GET', url);
xhr.send();
