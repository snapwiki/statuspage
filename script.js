document.addEventListener('DOMContentLoaded', fetcher());
function fetcher() {
    fetch('/status.json')
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
