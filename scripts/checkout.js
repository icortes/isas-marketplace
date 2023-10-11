function addToCountrySelect() {
  //get country select from the DOM
  let countrySelect = document.getElementById('country');
  //console.log(countrySelect);

  //get data from JSON file
  fetch('/db/countries.json').then((Response) =>
    Response.json().then((data) => {
      // for each country
      for (let i = 0; i < data.length; i++) {
        //add option element to select element
        countrySelect.appendChild(makeOptionElement(data[i].name));
      }
    })
  );
}

function addToStateSelect() {
  //get state select from the DOM
  let stateSelect = document.getElementById('state');

  //get data from JSON file
  fetch('/db/states.json').then((Response) =>
    Response.json().then((data) => {
      // for each state
      for (let i = 0; i < data.length; i++) {
        //add option element to select element
        stateSelect.appendChild(makeOptionElement(data[i].name));
      }
    })
  );
}

function makeOptionElement(name) {
  //create a new element
  let myOptionEl = document.createElement('option');
  //add value attribute equal to country name
  myOptionEl.value = name;
  //add text into the element
  myOptionEl.text = name;

  return myOptionEl;
}

function main() {
  addToCountrySelect();
  addToStateSelect();
}

main();
