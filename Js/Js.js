var data = localStorage.getItem('data')

data = JSON.parse(data)
//data.response.itineraryList[0].flightOptionList.forEach(element => {});
let isAscending = true;
var flights = data.response.itineraryList[0].flightOptionList;
populateTable();
function populateTable() {
  const table = document.getElementById('flightTable');
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    if (!row.querySelector('th')) {
      row.remove();
    }
  });
  flights.forEach(flight => {
    const row = document.createElement('tr');

    const flightNo = flight.flightNo;
    const departureAirportCode = flight.departureAirport.code;
    const arrivalAirportCode = flight.arrivalAirport.code;
    const flightOperatorName = flight.flightList[0].flightOperator.name;
    const originalPrice = flight.fareOptionList[0].originalPrice;
    const way = flight.flightList.length > 1 ? "direct" : "connecting";
    const button = document.createElement("button");
    button.className = "asd";
    button.innerHTML= 'Sec';
    const cells = [flightNo, departureAirportCode, arrivalAirportCode, way, flightOperatorName, originalPrice];
    cells.forEach(cellText => {
      const cell = document.createElement('td');
      cell.textContent = cellText;
      row.appendChild(cell);
      row.appendChild(button)
    });

    table.appendChild(row);
  });
}
function sortFlightsByPrice() {
  flights.sort((a, b) => { 
    const priceA = a.fareOptionList[0].originalPrice;
    const priceB = b.fareOptionList[0].originalPrice;
    if (isAscending) {
      return priceA - priceB; 
    } else {
      return priceB - priceA; 
    }
  });

  populateTable();
}
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', () => {
  isAscending = !isAscending; 
  sortFlightsByPrice();
});
populateTable();

  




