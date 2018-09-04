document.addEventListener("DOMContentLoaded", function() {
  // console.log('hi')
  addButtonListener()
})

function getAllFetch() {
  //fetch location
  fetch('http://api.open-notify.org/iss-now.json')
  .then(res => res.json())
  .then(jsonData => spaceLocation(jsonData))
  //fetch people
  fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json())
  .then(jsonData => spacePeople(jsonData))
}


//event listener for click button
function addButtonListener() {
  let button = document.querySelector('button')
  button.addEventListener("click", getAllFetch)
}

//render location
function spaceLocation(spaceData) {
  let latitudeElement = document.querySelector('.latitude')
  let longitudeElement = document.querySelector('.longitude')

  latitudeElement.innerText = `Latitude: ${  spaceData.iss_position.latitude}`
  longitudeElement.innerText = `Longitude: ${  spaceData.iss_position.longitude}`
  // console.log(spaceData)
}

//render people
function spacePeople(peopleData) {
  let peopleList = document.querySelector('.people-list')
  let people = peopleData.people
  let peopleArray = people.forEach( (person) => {
    let liElement = document.createElement('li')
    peopleList.appendChild(liElement)
    liElement.innerText = person.name
  })
  // console.log(people)
}
