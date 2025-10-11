/*
Implement JavaScript functionality to asynchronously fetch user data 
from a public API (https://jsonplaceholder.typicode.com/users) and 
display the names of the users in a list on the webpage.
*/

async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');
    
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        
        // create and append user List
        const userList = document.createElement('ul');
        users.forEach((user) => {
            listItem = document.createElement('li');

            //Append User to listItem
            listItem.textContent = user.name;

            // Append listItem to userList
            userList.appendChild(listItem);
        })
        
        //Append userList to dataContainer to be displayed.
        dataContainer.appendChild(userList)
        
    }catch (error){
        //Clear the Screen
        dataContainer.innerHTML = '';
        console.error('Failed to load user data.');
    }
}

fetchUserData()