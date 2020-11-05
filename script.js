document.addEventListener('DOMContentLoaded', fetcher());
function fetcher() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.scratch.mit.edu/users/R4356th/messages/count')
    .then(response => response.json())
    .then(data => {
        const count = data.status;
        console.log(status); 
        document.getElementById("status").innerHTML = `${status}`;
    })
    .catch(error => {
        console.error("An error occured while fetching the message count:", error);
    })
};
