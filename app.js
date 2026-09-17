

const URL = "https://catfact.ninja/facts";
const msg = document.querySelector("#msg");

const getData = async () => {
    console.log("Getting data..");
    let response = await fetch(URL);

    console.log(response); //This generate JSON format data
    // So we have to change the data format into JS Object to read the data
    
    let result = await response.json(); // Renamed to 'result' to avoid confusion
    
    // 1. Access the 'data' array inside the result
    let arrayData = result.data; 
    console.log(result);
    
    // // 2. Access a specific object in the array
    console.log(arrayData[0]); 
    
    // // 3. Extract a string property (like .breed) to display in the innerText
    msg.innerText = arrayData[0].fact; 
}

getData();




//                       Promise method to fetch API data                         //

// function getData(){
//      fetch(URL).then((response)=>{
//         return response.json();
//      }).then((data)=>{
//         console.log(data[2].text);
//      });
// }


/**
 * And if we want we can print in the html 
 * id <- innerText <-arrayData[0].fact;
 * 
 * btn.addEventListener("click",getData);
 */