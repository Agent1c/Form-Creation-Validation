// Delay Function
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getBoredActivity(){
    try{
        //response

        await delay(2000); //Wait 2 seconds before fetching
        const response = await fetch('https://bored-api.appbrewery.com/random');

        // network error handling
        if(!response.ok){
            console.log('Network response was not ok')
        }
        
        const data = await response.json()
        console.log("Success: ", data)
    }catch (error){
        console.error("You encounted an error: ", error)
    }
}

getBoredActivity()

// async function fetchData() {
//   try {
//     const response = await fetch('https://bored-api.appbrewery.com/random');

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json(); 
//     console.log('Success:', data); 
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();