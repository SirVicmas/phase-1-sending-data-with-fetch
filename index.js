// Add your code here
function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    };
  
    return fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        // Access the new id from the response and append it to the DOM
        const newId = data.id;
        const idElement = document.createElement("p");
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
      })
      .catch((error) => {
        // Append the error message to the DOM in case of an error
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  