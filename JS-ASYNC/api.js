/*Now we are at the heart of frontend technology which passes it love to backend
and that is via API.*/

//I will use async and await keyword to do the process

//1. 'GET req'  to fetch API and get data

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    if (response.status === 200) {
      const parsedResponse = await response.json();
      console.log(parsedResponse);
    } else {
      console.error("Api Request Failed");
    }
  } catch (error) {
    console.error("Sorry, an error occurred:", error);
  }
}

fetchData();

/*Their would be lot more way to fetch API but beleieve me 
this is very easy and looks similar to synchronous codes*/

//2. POST req to send  data  from client to server and check the response
async function sendData(data) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      const responseData = await response.json();
      console.log(responseData);
    }
  } catch (error) {
    console.log("Failed to send the data", error);
  }
}

sendData(data);

//similarly we can do for 'PATCH' , 'PUT' , 'DELETE' with simply fetch 