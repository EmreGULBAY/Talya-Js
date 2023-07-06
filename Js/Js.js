var data = localStorage.getItem('data')

data = JSON.parse(data)
//data.response.itineraryList[0].flightOptionList.forEach(element => {});
prices = [];
data.response.itineraryList[0].flightOptionList.forEach( x => {
  prices.push(x.fareOptionList[0].originalPrice)

})
prices.sort( (a,b) => { return a-b } );
flights = [];
data.response.itineraryList[0].flightOptionList.forEach(x => flights.push(x))

document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const table = document.getElementById('flightTable');
  flights.forEach(flight => {
    const row = document.createElement('tr');
    const button = document.createElement("button");
    button.className = "asd";
    button.innerHTML= 'Sec';
    const flightNo = flight.flightNo;
    const departureAirport = flight.departureAirport.code;
    const arrivalAirport = flight.arrivalAirport.code;
    const flightOperatorName = flight.flightList[0].flightOperator.name;
    const originalPrice = flight.fareOptionList[0].originalPrice;
    const cells = [flightNo, departureAirport, arrivalAirport, flightOperatorName, originalPrice];
    
    cells.forEach(cellText => {
      const cell = document.createElement('td');
      cell.textContent = cellText;
      row.appendChild(cell);
      row.appendChild(button)
    });

    table.appendChild(row);
});
});







