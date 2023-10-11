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

function makeOptionElement(countryName) {
  //create a new element
  let myOptionEl = document.createElement('option');
  //add value attribute equal to country name
  myOptionEl.value = countryName;
  //add text into the element
  myOptionEl.text = countryName;

  return myOptionEl;
}

function main() {
  addToCountrySelect();
}

main();
