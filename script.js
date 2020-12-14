///Event listener for page load goes here! Calls init function.
window.addEventListener("load", function(){
   let planets = []
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {  
         planets = json
         console.log("hey")
         console.log(planets[0].name)           
         let missionTarget = document.getElementById("missionTarget");

      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol style=list-style-type:none>
         <li>Name: ${planets[0].name}</li>
         <li>Diameter: ${planets[0].diameter}</li>
         <li>Star: ${planets[0].star}</li>
         <li>Distance from Earth: ${planets[0].distance}</li>
         <li>Number of Moons: ${planets[0].moons}</li>         
      </ol>
      <img src="${planets[0].image}"> 
      `;

      })
   })
   init();
})

// Write your JavaScript code here! 
//////////Here are the steps for validation://///////////

// 1. init function
function init(){
   console.log("This is init");

   // 2. create DOM variables - initialize variables for each section of the form and the submit button. this is the "document.getElementById("id") thing.


   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let formSubmit = document.getElementById("formSubmit");

   let launchStatus = document.getElementById("launchStatus")
   let faultyItems = document.getElementById("faultyItems")
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");


//4. submit button
//5. add validations
//6. alert for unfilled field
   formSubmit.addEventListener("click", function(event){
   

       if (pilotName.value === "" 
      || !isNaN(pilotName.value)
      || copilotName.value === ""
      || !isNaN(copilotName.value)
      || fuelLevel.value === ""    
      || isNaN(fuelLevel.value)
      || cargoMass.value === ""
      || isNaN(cargoMass.value)) {
        
         alert("Fill out all fields with valid answers.")
         event.preventDefault(); 
      } else {
         faultyItems.style.visibility="visible";
         // form is filled out correctly, time to validate fuel and cargo mass. 


        let validLaunchStatus = true 
        
        if (fuelLevel.value < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            validLaunchStatus = false
        } else {
           fuelStatus.innerHTML = "Fuel level is high enough for launch."
        }

         if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = "Cargo Mass too high for launch.";
            validLaunchStatus = false
         } else {
            cargoStatus.innerHTML = "Cargo Mass is low enough for launch."
         }                          
         if (validLaunchStatus) {
            launchStatus.innerHTML = "Shuttle Ready For Launch!";
            launchStatus.style.color="green"
         } else {
            launchStatus.innerHTML = "Shuttle NOT Ready For Launch!";
            launchStatus.style.color= "red"
         }


         pilotStatus.innerHTML= `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`
      
       event.preventDefault();
      }
   })
};  

//And then i pass all that into the output display.
   //did all this with if statements above.







